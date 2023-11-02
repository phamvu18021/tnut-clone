"use client";

import { CardBlog } from "@/components/CardBlog";
import { Loading } from "@/components/Loading";
import { LayoutBottom } from "@/layouts/layoutPosts/LayoutBottom";
import { formatDate } from "@/ultil/date";
import { clean } from "@/lib/sanitizeHtml";
import {
  Box,
  Grid,
  HStack,
  Heading,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useSearchParams } from "next/navigation";
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
    background-color: #0366d6;
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

export const ListPosts = ({
  handleRouter,
}: {
  handleRouter?: ({ selected }: { selected: number }) => void;
}) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "1";

  const [posts, setPosts] = useState<any[]>([]);
  const [totalPosts, setTotalPosts] = useState("0");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts/?type=news&page=${page}`, {
          next: { revalidate: 3 },
        });

        const data: { posts: any[]; totalPosts: string } = await res.json();
        const { posts, totalPosts } = data;
        posts?.length && setPosts(posts);
        totalPosts && setTotalPosts(totalPosts);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getPosts();
  }, [page]);

  const len = Math.ceil(Number(totalPosts) / 10) || 1;

  return (
    <LayoutBottom sticky="120px">
      <Box>
        <Heading
          size={"xl"}
          color={"red.600"}
          pb={"20px"}
          textAlign={{ base: "center", lg: "center" }}
        >
          Tin Tức
        </Heading>

        {!isLoading && (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={"8"}>
            {posts?.map((post: any, index: number) => (
              <GridItem key={index}>
                <CardBlog
                  date={post?.date ? formatDate(post.date) : ""}
                  title={post?.title?.rendered}
                  desc={clean("")}
                  image={post?.featured_image || ""}
                  path={`/tin-tuc/${post?.slug}`}
                />
              </GridItem>
            ))}
            {posts?.length === 0 && (
              <Grid placeItems={"center"} height={"40vh"}>
                Dữ liệu đang được chúng tôi cập nhập
              </Grid>
            )}
          </SimpleGrid>
        )}

        {isLoading && <Loading />}
      </Box>

      <HStack pt={"32px"} justify={"center"}>
        <StyledPaginate
          previousLabel="<"
          nextLabel=">"
          pageCount={len / 3}
          onPageChange={handleRouter}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
        />
      </HStack>
    </LayoutBottom>
  );
};
