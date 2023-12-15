"use client";

import { CardBlog } from "@/components/CardBlog";
import { Loading } from "@/components/Loading";
import { formatDate } from "@/ultil/date";
import { clean } from "@/lib/sanitizeHtml";
import {
    Box,
    HStack,
    SimpleGrid,
    GridItem,
    Center,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const StyledPaginate = styled(ReactPaginate)`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0 1rem;

  li a {
    border-radius: 7px;
    padding: 0.1rem 0.5rem;
    border: gray 1px solid;
    cursor: pointer;
    margin-right: 3px;
    margin-left: 3px;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #003163;
    border-color: transparent;
    color: white;
    min-width: 24px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

export const ListSearchPosts = ({
    cate,
    searchText,
}: {
    searchText: string;
    cate: string;

}) => {
    const [posts, setPosts] = useState<any[]>([]);
    const [postsse, setPostsse] = useState<any[]>([]);
    const [totalp, setTotalp] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchPosts, setSearchPosts] = useState<any[]>([]);

    function toSlug(str: string) {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str
            .normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
            .replace(/[\u0300-\u036f]/g, ''); // xóa các ký tự dấu sau khi tách tổ hợp

        // Thay ký tự đĐ
        str = str.replace(/[đĐ]/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // Xóa ký tự - liên tiếp
        str = str.replace(/-+/g, '-');

        // xóa phần dư - ở đầu & cuối
        str = str.replace(/^-+|-+$/g, '');

        // return
        return str;
    }
    useEffect(() => {
        const getPosts = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(`/api/posts/?type=${cate}&page=1&per_page=100`, {
                    next: { revalidate: 3 },
                });

                const data: { posts: any[]; totalPosts: string } = await res.json();
                const { posts, totalPosts } = data;
                posts?.length && setPosts(posts);
            } catch (error) {
                console.log(error);
            }
        };
        getPosts();

        const getPostsSe = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(`/api/posts/?type=${cate}&page=2&per_page=100`, {
                    next: { revalidate: 3 },
                });

                const data: { posts: any[]; totalPosts: string } = await res.json();
                const { posts, totalPosts } = data;
                posts?.length && setPostsse(posts);
            } catch (error) {
                console.log(error);
            }
        };
        getPostsSe();

    }, []);
    useEffect(() => {
        if (posts.length > 0 && postsse.length > 0) {
            setTotalp([...posts, ...postsse])
        }
    }, [posts, postsse])

    useEffect(() => {
        setIsLoading(true);
        const searchpost = totalp.filter((post) => toSlug(post?.title?.rendered).includes(toSlug(searchText)))
        setSearchPosts(searchpost)
        setIsLoading(false);
        setCurrentPage(0)
    }, [searchText, totalp])
    const len = Math.ceil(Number(searchPosts.length) / 8) || 1;


    const [currentPage, setCurrentPage] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 8;
    const currentItems = searchPosts.slice(itemOffset, endOffset);

    const changePage = (event: any) => {
        const newOffset = (event.selected * 8) % searchPosts.length;
        setCurrentPage(event.selected)

        setItemOffset(newOffset);
    };
    return (
        <>
            <Box>
                {!isLoading && (
                    <SimpleGrid pt={2} columns={{ base: 1, md: 2, lg: 2 }} spacing={"8"}>
                        {currentItems?.map((post: any, index: number) => (
                            <GridItem key={index}>
                                <CardBlog
                                    date={post?.date ? formatDate(post.date) : ""}
                                    title={post?.title?.rendered}
                                    desc={clean("")}
                                    image={post?.featured_image || ""}
                                    path={`/${post?.slug}`}
                                />
                            </GridItem>
                        ))}
                    </SimpleGrid>
                )}
                {totalp?.length === 0 && (
                    <><Center placeItems={"center"} height={"40vh"} textAlign={"center"}>
                        Đang tìm dữ liệu
                    </Center><Loading /></>
                )}
                {
                    totalp?.length > 0 && searchPosts.length === 0 && (
                        <Center placeItems={"center"} height={"40vh"} textAlign={"center"}>
                            Không tìm được kết quả phù hợp
                        </Center>
                    )
                }
                {isLoading && <Loading />}
            </Box>
            {searchPosts?.length > 0 && !isLoading && (

                <HStack pt={"32px"} justify={"center"}>
                    <StyledPaginate
                        className="paginate"
                        previousLabel="<"
                        nextLabel=">"
                        pageCount={len}
                        onPageChange={changePage}
                        pageRangeDisplayed={1}
                        marginPagesDisplayed={1}
                        activeClassName="active"
                        forcePage={currentPage}
                    />
                </HStack>

            )}
        </>
    );
};
