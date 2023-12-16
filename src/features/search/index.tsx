"use client";
import {
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Button,
  Input,
  Text
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ListSearchPosts } from "./ListSearchPosts";


export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [keyWord, setKeyWord] = useState<any>();
  const [checkInput, setCheckInput] = useState(false)
  const router = useRouter();
  let str = "@,#,$,^,&,*,(,),[,],{,},|,;,:,<,>,/,="
  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const str = searchQuery.replace(/([^0-9a-z-%!?\s])/g, '');
    if (str != "") {
      router.push(`/tim-kiem?keyword=${str}`);
    }else{
      setCheckInput(true)
    }
  };
  useEffect(() => {
    const str = searchQuery.replace(/([^0-9a-z-%!?\s])/g, '');
    if (searchQuery != "" && str == "") {
      setCheckInput(true)
    } else {
      setCheckInput(false)
    }
  }, [searchQuery])
  useEffect(() => {
    const { keyword } = router.query;
    setKeyWord(Array.isArray(keyword) ? keyword[0] || "" : (keyword as string) || "");
    setSearchQuery(Array.isArray(keyword) ? keyword[0] || "" : (keyword as string) || "")
  }, [router.query])

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
              pb={"40px"}
              textAlign={{ base: "center", lg: "center" }}
            >
              Kết quả trả về cho từ khóa : " {keyWord} "
            </Heading>
            {checkInput &&
              <Box pt={2} display={"flex"} color={"#f5222d"} justifyContent={"center"}>
                <Text>Từ khóa tìm kiếm không hợp lệ</Text>
              </Box>
            }
            <Box justifyContent={"center"} pb={16}>
              <form onSubmit={onSearch}>
                <HStack justifyContent={"center"} columnGap={0}>
                  <Input
                    required
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
              <Box display={"flex"} fontSize={"12px"} justifyContent={"center"}>
                <Text as={'i'} >
                  Ký tự đặc biệt {str} sẽ không được ghi nhận
                </Text>
              </Box>

            </Box>
          </Box>
          {keyWord != "" &&
            <ListSearchPosts cate="news" searchText={keyWord} />
          }

        </Box>
        <Divider size={"xl"} />
      </Container>
    </Box>
  );
};
