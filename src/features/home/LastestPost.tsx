import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { SamePosts } from "../post/Sames";
import { useEffect, useState } from "react";
import { CardBlog } from "@/components/CardBlog";
import { formatDate } from "@/ultil/date";
import { clean } from "@/lib/sanitizeHtml";
import { Loading } from "@/components/Loading";
export const LastestPost = () => {
  const [posts, setPosts] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts/?type=news&page=${1}`, {
          next: { revalidate: 3 },
        });

        const data: { posts: any[]; totalPosts: string } = await res.json();
        const { posts, totalPosts } = data;
        posts?.length && setPosts(posts);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getPosts();
  }, []);
  return (
    <Container maxW={"7xl"}>
      <Box>
        <Text
          pt={{ base: 16, lg: 32 }}
          size={"xl"}
          color={"blue.600"}
          fontSize={36}
          pb={{ base: 12, lg: 20 }}
          textAlign={{ base: "center", lg: "center" }}
        >
          TIN TỨC
        </Text>

        {!isLoading && (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={"8"}>
            {posts?.slice(0, 2).map((post: any, index: number) => (
              <GridItem key={index}>
                <CardBlog
                  date={post?.date ? formatDate(post.date) : ""}
                  title={post?.title?.rendered}
                  desc={post?.desc?.rendered}
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
    </Container>
  );
};
