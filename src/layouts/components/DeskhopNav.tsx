import { menus } from "@/router";
import {
  Box,
  Flex,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
  Stack,
  Text,
  Input,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { useState, useEffect } from "react";
import { BtnTheme } from "@/components/BtnTheme";
import { ModalBase } from "@/components/Modal";
import { FormPoup } from "@/components/FormContact";
import { FormInputs } from "@/components/FormInputs";
import { useRouter } from "next/router";
interface INavItem {
  title: string;
  children?: Array<INavItem>;
  path?: string;
}

export const DesktopNav = () => {
  // const [active, setActive] = useState("hidden");
  const linkColor = "black";
  const linkHoverColor = "red.500";

  const popoverContentBgColor = "linear-gradient(180deg, #fff 0, #f8f9fa 100%)";
  const { onToggle, onOpen, onClose, isOpen } = useDisclosure();

  const rou = useRouter();
  const [nav, setNav] = useState<"flex" | "none">("none");

  useEffect(() => {
    switch (rou.asPath) {
      case "/":
        setNav("none");
        break;

      default:
        setNav("flex");
    }
  }, [rou.asPath]);
  return (
    <>
      {/* <Stack direction={"column"}> */}
      {/* <Stack
          direction={"row"}
          justifyContent={"end"}
          alignItems={"flex-end"}
          pb={2}
          gap={6}
        >
          <BtnTheme
            color={"black"}
            colorScheme="white"
            size={{ base: "sm", md: "lg" }}
            onClick={onToggle}
          >
            Đặt câu hỏi
          </BtnTheme>
          <BtnTheme
            color={"black"}
            colorScheme="white"
            size={{ base: "sm", md: "lg" }}
            onClick={onToggle}
          >
            Đăng ký tư vấn
          </BtnTheme>
        </Stack> */}
      <Box></Box>
      <Stack direction={"row"} alignItems={"center"}>
        {menus.map((navItem) => (
          <Box key={navItem.title}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Box
                  as={Link}
                  p={3}
                  href={navItem.path ?? "#"}
                  fontSize={{ base: "0.4rem", lg: "0.9rem" }}
                  fontWeight={{ base: "400", lg: "500" }}
                  color={linkColor}
                  _hover={{
                    color: linkHoverColor,
                  }}
                >
                  {navItem.title}
                </Box>
              </PopoverTrigger>

              {navItem.childs && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={"linear-gradient(180deg, #fff 0%, #f8f9fa 100%)"}
                  borderRadius={0}
                  // p={4}
                  minW={"2xs"}
                  maxW={200}
                  zIndex={99}
                >
                  <Stack rowGap={0}>
                    {navItem.childs.map((child) => (
                      <DesktopSubNav key={child.title} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>

      <ModalBase isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <FormPoup title="Để lại thông tin" />
      </ModalBase>
    </>
  );
};

export const DesktopSubNav = ({ title, path }: INavItem) => {
  return (
    <Box
      bg={"linear-gradient(180deg, #fff 0%, #f8f9fa 100%)"}
      className="boxtoo"
      as={Link}
      href={path}
      role={"group"}
      display={"block"}
      _hover={{ bg: "facebook.800", color: "white" }}
    >
      <Stack gap={0} direction={"row"} align={"center"} className="stacktit">
        <Box>
          <Text
            p={4}
            transition={"all .3s ease"}
            color={"#054659"}
            _groupHover={{ color: "white" }}
            fontWeight={600}
          >
            {title}
          </Text>
        </Box>
        {/* <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"#FA692E"} w={5} h={5} as={BsChevronRight} />
        </Flex> */}
      </Stack>
    </Box>
  );
};
