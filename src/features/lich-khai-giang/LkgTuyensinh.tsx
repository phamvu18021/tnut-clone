"use client";
import { MotionTop } from "@/components/MotionTop";
import { FormMain } from "@/components/FormContact";

import {
  Box,
  List,
  SimpleGrid,
  Stack,
  Container,
  GridItem,
  Text,
  ListIcon,
} from "@chakra-ui/react";
export const LkgTuyensinh = () => {
  const [info, setInfo] = useState<{ title: string; detail: any }[]>(infoInit);

  return (
    <Container maxW={"7xl"}>
      <Box>
        <Text
          fontSize={{ base: "25px", md: "25px", lg: "40px" }}
          color={"blue.800"}
          fontWeight={600}
          textAlign={"center"}
        >
          THÔNG TIN TUYỂN SINH
        </Text>
      </Box>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        maxW={"7xl"}
        py={{ base: 12, lg: 12 }}
        gap={{ base: 12, lg: 32 }}
        margin={"0 auto"}
      >
        <GridItem>
          <Accs accs={info} />
        </GridItem>

        <GridItem colSpan={1}>
          <Text color={'blue.700'} fontSize={'20px'} fontWeight={600} textAlign={'center'}>ĐĂNG KÝ NHẬN TƯ VẤN MIỄN PHÍ</Text>
          <Box pt={{ base: "18px", lg: "0px" }}>
            <FormMain />
          </Box>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  HStack,
  Icon,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import { useEffect, useState } from "react";
import { CheckIcon } from "@chakra-ui/icons";

export const Accs = ({
  accs,
}: {
  accs: {
    title: string;
    detail: {
      title: string;
      list: string[];
    }[];
  }[];
}) => {
  return (
    <Accordion defaultIndex={[0, 1, 2, 3, 4, 5]} allowMultiple>
      {accs.map((acc, index) => (
        <AccordionItem border={"none"} key={index} py={"8px"} rounded={"sm"}>
          <AccordionButton
            pointerEvents={"none"}
            cursor={"not-allowed"}
            bg={"gray.50"}
            py="8px"
            rounded={"sm"}
          >
            <Box flex="1" textAlign="left">
              <HStack>
                <Heading fontSize={{ base: "sm", md: "md" }}>
                  {acc.title}
                </Heading>
              </HStack>
            </Box>
          </AccordionButton>
          <AccordionPanel pb={2} color={"gray.900"}>
            {acc?.detail?.map((item, index) => (
              <Box key={index}>
                <Heading as={"h4"} size={"sm"}>
                  {item?.title}
                </Heading>
                <List>
                  {item?.list?.map((item, i) => (
                    
                    <ListItem key={i}> <ListIcon as={CheckIcon} color='green.500' />  {item}</ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

const infoInit = [
  {
    title: "Đối tượng tuyển sinh",
    detail: [
      {
        title: "",
        list: ["Tốt nghiệp THPT hoặc tương đương trở lên"],
      },
    ],
  },
  {
    title: "Hình thức tuyển sinh",
    detail: [
      {
        title: "",
        list: [" Chỉ xét tuyển hồ sơ đầu vào."],
      },
    ],
  },
  {
    title: "Thời gian học",
    detail: [
      {
        title: "",
        list: ["Từ 2 - 4 năm tùy thuộc đầu vào của sinh viên"],
      },
    ],
  },
  {
    title: "Danh sách ngành học",
    detail: [
      {
        title: "",
        list: [
          "Kỹ Thuật Xây Dựng",
          "Quản Lý Công Nghiệp",
          " Kinh Tế Công Nghiệp",
        ],
      },
    ],
  },
  {
    title: "Khu vực tuyển sinh",
    detail: [
      {
        title: "",
        list: ["Có trạm tuyển sinh tại Hà Nội và Tp. HCM"],
      },
    ],
  },
  {
    title: "Hotline",
    detail: [
      {
        title: "",
        list: ["081.567.4848"],
      },
    ],
  },
];
