"use client";
import { CardReg } from "@/components/CardReg";
import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";

export const Reg = [
  {
    image: "/nganh-xay-dung.webp",
    title: "Kỹ Thuật Xây Dựng",
    path: "/ky-thuat-xay-dung"
  },
  {
    image: "/nganh-quan-li-cong-nghiep.webp",
    title: "Quản Lý Công Nghiệp",
    path: `quan-ly-cong-nghiep`
  },
  {
    image: "/nganh-kinh-te-cong-nghiep.webp",
    title: "Kinh Tế Công nghiệp",
    path: `/kinh-te-cong-nghiep`
  }
];

export const Majors = () => {
  return (
    <Box py={{ base: "8", lg: "12" }}>
      <Container maxW="7xl">
        <Text
          py={{ base: 4, lg: 8 }}
          fontSize={{ base: "25px", md: "32px", lg: "32px" }}
          color={"blue.900"}
          textAlign={"center"}
          fontWeight={500}
        >
          NGÀNH ĐÀO TẠO
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5} py={5}>
          {Reg.map((Reg, index) => (
            <CardReg
              key={index}
              title={Reg.title}
              path={Reg.path}
              image={`${Reg.image}`}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
