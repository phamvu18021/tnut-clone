"use client";
import {
  Box,
  Container,
  HStack,
  Heading,
  Img,
  SimpleGrid,
  Text,
  VStack
} from "@chakra-ui/react";

export const Item = ({
  title,
  desc,
  image, 
}: {
  title: string;
  desc: string;
  image?: string; 
}) => {
  return (
    <Box
      pos="relative"
      transition={"all ease .4s"}
      color={"#004956"}
      p={{ base: "16px", md: "20px", lg: "15px" }}
      rounded={"sm"}
      bg={"white"}
      minH={"175px"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      boxShadow='md'
    >
      <Img
        src={image || "/default-image.jpg"} 
        alt={title}
        w={"45px"}
        h={"45px"}
        mb={"8px"}
      />
      <Heading as={"h2"} size={{ base: "md" }}  color={"#1E2456 "}>
        {title}
      </Heading>
      <HStack spacing={"12px"} pt={"5px"}>
        <VStack align={"start"}>
          <Text color={"#1E2456 "} fontSize={{ base: ".8rem", md: "20px" }}>
            {desc}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};
export const InputMajordtvts = [
  {
    title: "Mã ngành",
    desc: "7520207",
    image: "/icon-1.png",
  },
  {
    title: "Thời gian đào tạo",
    desc: "2 - 4 năm",
    image: "/icon-2.png", 
  },
  {
    title: "Bằng cấp",
    desc: "Kỹ sư Kỹ Thuật Điện Tử Viễn Thông",
    image: "/icon-3.png", 
  },
  {
    title: "Tổ hợp môn xét tuyển",
    desc: "A00, A01",
    image: "/icon-4.png", 
  },
  
];
export const InputMajordtvt = () => {
  return (
    <Box>
      <Container maxW="1728px" >

        <SimpleGrid pt={"24px"} columns={{ base: 2, md: 4 }} spacing={4} paddingTop={"30px"} pb={"48px"} >
          {InputMajordtvts.map((major, index) => (
            <Item
              key={index}
              title={major.title}
              desc={major.desc}
              image={major.image} 
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export const InputMajorcntts = [
  {
    title: "Mã ngành",
    desc: "7480201",
    image: "/icon-1.png",
  },
  {
    title: "Thời gian đào tạo",
    desc: "2 - 4 năm",
    image: "/icon-2.png", 
  },
  {
    title: "Bằng cấp",
    desc: "Kỹ sư Công nghệ thông tin",
    image: "/icon-3.png", 
  },
  {
    title: "Tổ hợp môn xét tuyển",
    desc: " A00, A01",
    image: "/icon-4.png", 
  },

];
export const InputMajorcntt = () => {
  return (
    <Box>
      <Container maxW="1728px" >

        <SimpleGrid pt={"24px"} columns={{ base: 2, md: 4 }} spacing={4} paddingTop={"30px"} pb={"48px"} >
          {InputMajorcntts.map((major, index) => (
            <Item
              key={index}
              title={major.title}
              desc={major.desc}
              image={major.image} 
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export const InputMajorqtkds = [
  {
    title: "Mã ngành",
    desc: " 7340101",
    image: "/icon-1.png",
  },
  {
    title: "Thời gian đào tạo",
    desc: "2-4 năm",
    image: "/icon-2.png", 
  },
  {
    title: "Bằng cấp",
    desc: "Cử nhân Quản trị kinh doanh",
    image: "/icon-3.png", 
  },
  {
    title: "Tổ hợp môn xét tuyển",
    desc: "A00, A01, D01",
    image: "/icon-4.png", 
  },
  {
    title: "Cơ sở học tập",
    desc: "Trụ sở chính của UMT",
    image: "/icon-5.png", 
  },
];
export const InputMajorqtkd = () => {
  return (
    <Box>
      <Container maxW="1728px" >

        <SimpleGrid pt={"24px"} columns={{ base: 2, md: 5 }} spacing={4} paddingTop={"30px"} pb={"48px"} >
          {InputMajorqtkds.map((major, index) => (
            <Item
              key={index}
              title={major.title}
              desc={major.desc}
              image={major.image} 
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

