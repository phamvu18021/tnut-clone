"use client";
import { MotionTop } from "@/components/MotionTop";
import Image from "next/image";
import {
  AspectRatio,
  Box,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Container,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { FcBookmark } from "react-icons/fc";
import { BtnTheme } from "@/components/BtnTheme";
import { useModal } from "@/components/ModalContext";
export const IntroduceAbout = () => {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        maxW={"7xl"}
        py={16}
        gap={{ base: 20, lg: 32 }}
        margin={"0 auto"}
      >
        <GridItem colSpan={1}>
          <Box pt={"24px"}>
            <Image
              objectFit="cover"
              width={600}
              height={400}
              src={"/introAbout.jpg"}
              alt={"gioi-thieu-tnut"}
            />
          </Box>
        </GridItem>

        <GridItem colSpan={{ base: 1, lg: 1 }}>
          <Stack bg="White" height="full">
            <MotionTop>
              <Text
                fontSize={{ base: "25px", md: "25px", lg: "32px" }}
                color={"blue.800"}
              >
                ĐÔI NÉT VỀ ĐẠI HỌC KỸ THUẬT CÔNG NGHIỆP
              </Text>
            </MotionTop>
            <MotionTop>
              <Divider
                borderBottomWidth={"3px"}
                borderBlockEndColor={"orange"}
                w={"200px"}
                p={{ base: "6px", lg: "15px" }}
              />
            </MotionTop>
            <List
              spacing={4}
              pt={"8px"}
              fontSize={{ base: "18px", lg: "18px", md: "md" }}
            >
              <MotionTop>
                <ListItem mt={{ lg: "19px" }}>
                  <ListIcon as={FcBookmark} />
                  Trường Đại học Kỹ Thuật Công Nghiệp (TNUT) là trường công lập,
                  được thành lập ngày 19/8/1965 theo quyết định số 164/CP Hội
                  đồng Chính phủ là một trong những trường đại học uy tín tại
                  Việt Nam, Nổi tiếng với chất lượng đào tạo và đội ngũ giảng
                  viên giàu kinh nghiệm trong lĩnh vực kỹ thuật công nghiệp.
                  Chương trình liên thông đại học từ xa của Đại học Kỹ Thuật
                  Công Nghiệp được thiết kế nhằm đáp ứng nhu cầu học tập và phát
                  triển nghề nghiệp của những người đã có kiến thức và kinh
                  nghiệm trong lĩnh vực kỹ thuật.
                </ListItem>
              </MotionTop>

              <MotionTop>
                <ListItem>
                  <ListIcon as={FcBookmark} />
                  Liên thông đại học từ xa tại Đại học Kỹ thuật Công nghiệp là
                  một chương trình giáo dục dành cho các sinh viên đã tốt nghiệp
                  từ các trường trung cấp, cao đẳng hoặc có kinh nghiệm làm
                  việc, nhằm nâng cao trình độ chuyên môn và nhận được bằng cấp
                  đại học trong lĩnh vực kỹ thuật công nghiệp…
                </ListItem>
              </MotionTop>

              <BtnTheme
                color={"white"}
                colorScheme="white"
                size={{ base: "sm", md: "lg" }}
                onClick={() => !isOpen && onOpen && onOpen()}
                w={{ base: "200px", md: "240px", lg: "280px" }}
              >
                Nhận thông tin lộ trình học
              </BtnTheme>
            </List>
          </Stack>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
