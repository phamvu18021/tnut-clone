import Image from 'next/image';
import {
  Box,
  ListItem,
  OrderedList,
  SimpleGrid,
  Stack,
  Heading
} from "@chakra-ui/react";

export const CardOpportunityCntt = () => {
  const jobOpportunities = [
    "Kỹ sư Thiết kế phần mềm",
    "Kỹ sư Thiết kế và quản trị cơ sở dữ liệu",
    "Chuyên viên quản trị dự án",
    "Chuyên viên quản trị chất lượng phần mềm",
    "Kỹ sư Thiết kế phần mềm",
    "Kỹ sư Triển khai giải pháp phần mềm",
    "Kỹ sư phát triển Web",
    "Kỹ sư lập trình ứng dụng chi thiết bị di động (IOS, Android)",
    "Lập trình games",
    "Chuyên viên Quản trị hệ thống",
    "Chuyên biên Nghiên cứu công nghệ"
  ];
  return (
    <Box py={{ base: "10", lg: "16" }} id="sectionVieclam" margin={"0 auto"}>
      <Box
        bgRepeat={"no-repeat"}
        bgSize="cover"
        w={"100%"}
        position="relative"
        maxW={"1728px"}
        margin={"0 auto"}
      >
        <Image
          priority
          alt=""
          src={"/bgPtit.png"}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: "-1",
          }}
        />
        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 2 }}
          maxW={"1728px"}
          margin={"0 auto"}
          py={10}
        >
          <Stack height="full" padding={"24px"} pl={{ lg: "247px", md: "auto", base: "auto" }}>
            <Heading fontWeight={"bold"} color={"white"} fontStyle={"italic"} fontSize={{ base: "25px" }}>
              CÔNG NGHỆ THÔNG TIN
            </Heading>
            <OrderedList color={"White"}>
              {jobOpportunities.map((opportunity, index) => (
                <ListItem key={index}>{opportunity}</ListItem>
              ))}
            </OrderedList>
          </Stack>
          <Box w={"350px"} h={"362px"} margin={"0 auto"} mr={{ lg: "439px" }}>
            <Image
              priority
              src="/program.jpg"
              alt='ptit'
              width={500}
              height={200}
              style={{ height: "auto", width: "100%", objectFit: 'cover', borderRadius: "20px" }}
            />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
