"use client";
import { CardCat } from "@/components/CardCat";
import { Box, Container, SimpleGrid, Heading } from "@chakra-ui/react";
export const categotys = [
  {
    image: "/cntt.png",
    path: "/nganh-cong-nghe-thong-tin",
    title: "Ngành công nghệ thông tin",
    desc: "",
  },
  {
    image: "/KTĐTVT.png",
    path: "/nganh-ky-thuat-dien-tu-vien-thong",
    title: "Ngành kỹ thuật điện tử viễn thông",
    desc: "",
  },
  {
    image: "/QTKD.png",
    path: "/nganh-quan-tri-kinh-doanh",
    title: "Ngành quản trị kinh doanh",
    desc: "",
  },
];

export const Categoty = () => {
  return (
    <Box py={"48px"}>
      <Container maxW="1728px">
        <Heading textAlign={"center"} mb={"59px"}> Các ngành học</Heading>
        <SimpleGrid spacing={"5"} columns={{ base: 2, md: 2, lg: 3 }}>
          {categotys.map((categoty, index) => (
            <CardCat
              key={index}
              desc={categoty.desc}
              path={categoty.path}
              title={categoty.title}
              image={`${categoty.image}`}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};