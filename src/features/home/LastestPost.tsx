import { Box, Container, GridItem, Text, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CardLBlog } from "@/components/CardBlog";
import { BtnThemeSe } from "@/components/BtnTheme";
export const lblog = [
  {
    image: "/lblog1.jpg",
    title: "Managing Your Finances",
    author: "Theresa Barnes",
    tags: "News",
    desc: "Personal financial management is a subject that is not taught in many schools, but is something that nearly everyone has to deal with in their lives later on. Here are some statistics...",
    path: "",
    date: "Apr 21, 2023 at 12:05 pm",
  },
  {
    image: "/lblog2.jpg",
    title: "5 Reasons Why You Need an Accountant",
    author: "Theresa Barnes",
    tags: "Advertising",
    desc: "As your business — and revenue — grow, managing your financials may become a task you don’t have the time or knowledge to manage. Specifically, when it comes avoiding legal and...",
    path: "",
    date: "Apr 21, 2023 at 12:05 pm",
  },
];

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

        posts?.length && setPosts([...posts, ...lblog]);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getPosts();
  }, []);
  return (
    <>
      {posts?.length > 0 && (
        <Container maxW={"7xl"}>
          <Box>
            <Text
              pt={{ base: 12, lg: 28 }}
              size={"xl"}
              color={"blue.800"}
              fontSize={{ base: 24, lg: 36 }}
              pb={{ base: 8, lg: 12 }}
              textAlign={{ base: "center", lg: "center" }}
              fontWeight={500}
            >
              TIN TỨC
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={"8"}>
              {posts?.slice(0, 2).map((post: any, index: number) => (
                <GridItem key={index}>
                  <CardLBlog
                    date={post?.date}
                    title={post?.title}
                    desc={post?.desc}
                    image={post?.image || ""}
                    path={``}
                    author={post?.author}
                    tags={post?.tags}
                  />
                </GridItem>
              ))}
            </SimpleGrid>
            <Box
              display={"flex"}
              justifyContent={"center"}
              pt={4}
              pb={{ base: 16, lg: 32 }}
            >
              <BtnThemeSe
                bg={"none"}
                size={{ base: "sm", md: "lg" }}
                w={{ base: "200px", lg: "250px" }}
              >
                VIEW ALL BLOG POST
              </BtnThemeSe>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};
