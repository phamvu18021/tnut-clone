"use client";
import { FormMain } from "@/components/FormContact";

import { FcBookmark } from "react-icons/fc";
import { Box, SimpleGrid, Stack, Heading, Divider, List, ListItem, ListIcon } from "@chakra-ui/react"
export const IntroduceCntt = () => {
  const items = [
    {
      text:
        "Trong thời kỳ hội nhập, Công nghệ thông tin là một trong những ngành mũi nhọn mang đến sự phát triển vượt bậc cho khoa học kỹ thuật. Chính vì vậy, ngành Công nghệ thông tin đã trở thành một ngành học “hot” và thu hút rất nhiều bạn trẻ, đặc biệt là những bạn yêu thích máy tính và đam mê công nghệ."
    },
    {
      text:
        "Công nghệ thông tin là ngành sử dụng máy tính và phần mềm máy tính để chuyển đổi, lưu trữ, bảo vệ, xử lý, truyền và thu thập thông tin. Người làm việc trong trong ngành này thường được gọi là IT (Information Technology). Mục đích của khối khoa học tổng hợp liên ngành này là nhằm phát triển khả năng sửa chữa, tạo mới và sử dụng hệ thống các thiết bị và máy tính bao gồm phần cứng, phần mềm để cung cấp giải pháp xử lý thông tin trên nền công nghệ cá nhân, tổ chức có yêu cầu."
    }
  ];

  return (
    <Box py={{ base: "10", lg: "16" }} id="sectionIntroduce" margin={"0 auto"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        maxW={"1728px"}
        margin={"0 auto"}
      >
        <Stack bg="White" height="full" padding={"24px"} >
          <Heading fontSize={{ base: "25px", md: "25px", lg: "32px" }} color={"#B1040E"}  >
            Giới thiệu
          </Heading>
          <Divider
            borderBottomWidth={"3px"}
            borderBlockEndColor={"orange"}
            w={"200px"}
            p={{ base: "6px", lg: "15px" }}
          />
          <List
            spacing={30}
            pt={{ lg: "15px", base: "15px" }}
            fontSize={{ base: "18px", lg: "21px", md: "md" }}
          >
            {items.map((item, index) => (
              <ListItem key={index} mt={{ lg: "19px" }} maxW={{ lg: "950px", base: "auto" }}>
                <ListIcon as={FcBookmark} />
                {item.text}
              </ListItem>
            ))}
          </List>
        </Stack>
        <Box mt={{ lg: "47px" }}><FormMain title="Vui lòng điền thông tin" /></Box>
      </SimpleGrid>
    </Box>
  );
};
export const IntroduceKtdtvt = () => {
  const items = [
    {
      text:
        "Kỹ thuật điện tử viễn thông là ngành ứng dụng các công nghệ, kỹ thuật tiên tiến, hiện đại vào quá trình hình thành nên thiết bị vệ tinh, cáp, thiết bị điện tử như: điện thoại, máy tính bảng, tivi, các mạch điều khiển, mạng không dây,…Qua đó tạo nên mạng lưới kết nối thông tin liên lạc toàn cầu, giúp cho việc trao đổi giữa người với người, người với máy trở nên nhanh chóng, tiện lợi, dễ hiểu và thân thiện hơn trong nhiều hoàn cảnh không gian, thời gian khác nhau."
    },
    {
      text:
        "Bản chất của ngành này là thực hiện các hoạt động liên quan đến chế tạo, điều khiển bộ máy xử lý của các thiết bị thông minh và sử dụng các thiết bị truyền dẫn để kết nối thông tin từ đầu phát tới đầu thu."
    }
  ];

  return (
    <Box py={{ base: "10", lg: "16" }} id="sectionIntroduce" margin={"0 auto"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        maxW={"1728px"}
        margin={"0 auto"}
      >
        <Stack bg="White" height="full" padding={"24px"} >
          <Heading fontSize={{ base: "25px", md: "25px", lg: "32px" }} color={"#B1040E"}  >
            Giới thiệu
          </Heading>
          <Divider
            borderBottomWidth={"3px"}
            borderBlockEndColor={"orange"}
            w={"200px"}
            p={{ base: "6px", lg: "15px" }}
          />
          <List
            spacing={30}
            pt={{ lg: "15px", base: "15px" }}
            fontSize={{ base: "18px", lg: "21px", md: "md" }}
          >
            {items.map((item, index) => (
              <ListItem key={index} mt={{ lg: "19px" }} maxW={{ lg: "950px", base: "auto" }}>
                <ListIcon as={FcBookmark} />
                {item.text}
              </ListItem>
            ))}
          </List>
        </Stack>
        <Box mt={{ lg: "47px" }}><FormMain title="Vui lòng điền thông tin" /></Box>
      </SimpleGrid>
    </Box>
  );
};
export const IntroduceQtkd = () => {
  const items = [
    {
      text:
        "Ngành Quản trị kinh doanh là ngành học đào tạo các kiến thức và kỹ năng giám thị, giám sát hoạt động kinh doanh và những lĩnh vực liên quan như tài chính, kế toán, tiếp thị, nhân sự,…Đây là ngành học khai phá tất cả tiềm năng quản lý, kinh doanh… cho những người học năng động, yêu ngành và muốn làm giàu chính đáng."
    },
    {
      text:
        "Quản trị kinh doanh là ngành học gần như chưa bao giờ hạ nhiệt, đặc biệt là trong bối cảnh nền kinh tế ngày càng phát triển nhanh chóng như hiện nay. Ngành Quản trị kinh doanh đang trở thành lựa chọn đầy thách thức đối với bất kỳ ai muốn là “người được chọn” trong muôn vàn hồ sơ đăng ký"
    }
  ];

  return (
    <Box py={{ base: "10", lg: "16" }} id="sectionIntroduce" margin={"0 auto"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        maxW={"1728px"}
        margin={"0 auto"}
      >
        <Stack bg="White" height="full" padding={"24px"} >
          <Heading fontSize={{ base: "25px", md: "25px", lg: "32px" }} color={"#B1040E"}  >
            Giới thiệu
          </Heading>
          <Divider
            borderBottomWidth={"3px"}
            borderBlockEndColor={"orange"}
            w={"200px"}
            p={{ base: "6px", lg: "15px" }}
          />
          <List
            spacing={30}
            pt={{ lg: "15px", base: "15px" }}
            fontSize={{ base: "18px", lg: "21px", md: "md" }}
          >
            {items.map((item, index) => (
              <ListItem key={index} mt={{ lg: "19px" }} maxW={{ lg: "950px", base: "auto" }}>
                <ListIcon as={FcBookmark} />
                {item.text}
              </ListItem>
            ))}
          </List>
        </Stack>
        <Stack mt={{ lg: "47px" }} ><FormMain/></Stack>
      </SimpleGrid>
    </Box>
  );
};
