"use client";
import { Loading } from "@/components/Loading";
import {
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Button,
  Input,
} from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import dynamic from "next/dynamic";

const ListPosts = dynamic(
  () => import("@/features/posts/ListPosts").then((mod) => mod.ListPosts),
  {
    loading: () => <Loading />,
  }
);
export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const search = useSearchParams();
  const searchQuery2 = search ? search.get("s") : null;
  console.log(searchQuery2);
  const encodedSearchQuery2 = decodeURIComponent(searchQuery2 || "");
  const router = useRouter();
  console.log(encodedSearchQuery2);
  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery || "");
    router.push(`/tim-kiem?s=${encodedSearchQuery}`);
    setSearchQuery("");
  };

  const nextpage = ({ selected }: { selected: number }) => {
    router.push(`/tim-kiem?s=${encodedSearchQuery2}&page=${selected + 1}`);
  };
  return (
    <Box>
      <Box
        bgImage={"url('/bannernews.png')"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        maxW={"100vw"}
        overflowX={"hidden"}
        h={{ base: "10vh", md: "15vh", lg: "20vh" }}
      ></Box>
      <Container maxW={"7xl"}>
        <Box pt={"32px"}>
          <Box>
            <Heading
              size={"xl"}
              color={"red.600"}
              pb={"12px"}
              textAlign={{ base: "center", lg: "center" }}
            >
              Kết quả trả về cho từ khóa : " {encodedSearchQuery2} "
            </Heading>

            <Box pb={8}>
              <form onSubmit={onSearch}>
                <HStack justifyContent={"center"} py={8} columnGap={0}>
                  <Input
                    value={searchQuery}
                    type="Text"
                    border={"1px solid #BFBFBF "}
                    borderRadius={0}
                    py={2}
                    maxW={820}
                    px={4}
                    placeholder="Tìm kiếm..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button
                    borderRadius={0}
                    onClick={onSearch}
                    bg={"blue.800"}
                    color={"white"}
                    _hover={{
                      bg: "red.600",
                    }}
                  >
                    Tìm kiếm
                  </Button>
                </HStack>
              </form>
            </Box>
          </Box>
          <ListPosts cate="news" handleRouter={nextpage} />
        </Box>
        <Divider size={"xl"} />
      </Container>
    </Box>
  );
};
