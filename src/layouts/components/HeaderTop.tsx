import { BtnTheme } from "@/components/BtnTheme";
import { FormPoup } from "@/components/FormContact";
import { ModalBase } from "@/components/Modal";
import { useModal } from "@/components/ModalContext";
import { Box, HStack, Icon, Link, Tag, TagLabel } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { LuPhone } from "react-icons/lu";
import { Logo } from "./Logo";

export const Tags = ({
  label,
  path,
  children
}: {
  label: string;
  path: string;
  children: ReactNode;
}) => {
  return (
    <Tag
      color="gray.500"
      borderRadius="full"
      variant="solid"
      bg={"transparent"}
      py="8px"
      px="8px"
      as={Link}
      href={path}
    >
      {children}
      <TagLabel fontSize={{ base: "4rem", md: "md" }}>{label}</TagLabel>
    </Tag>
  );
};

export const HeaderTop = () => {
  const [id, setId] = useState("");
  const [href, setHref] = useState("");

  const { onOpen, onClose, isOpen, onToggle } = useModal();

  useEffect(() => {
    const getForm = async () => {
      try {
        const res = await fetch(`/api/data-form/?type=form-poup`);
        const data = await res.json();
        const id = data?.id || "";
        id && setId(id);
        const href = data?.href || "";
        href && setHref(href);
      } catch (error) {
        console.log(error);
      }
    };
    getForm();
  }, [id, href, isOpen]);
  return (
    <>
      <HStack align={"center"} justify={"space-between"} py={2}>
        <Box flex={1} display={{ base: "none", lg: "flex" }}>
          <Logo />
        </Box>

        <Box
          w={{ base: "-moz-min-content" }}
          display="flex"
          justifyContent={{ base: "space-between", lg: "flex-end" }}
        >
          <Tags path="tel:0815674848" label="081.567.4848">
            <Icon w={"1.3em"} h={"1.2em"} as={LuPhone} pr={0.2} />
          </Tags>

          <BtnTheme
            color={"white"}
            size={{ base: "sm", md: "lg" }}
            onClick={onToggle}
            w={"200px"}
          >
            ĐĂNG KÝ
          </BtnTheme>
        </Box>
      </HStack>
      <ModalBase
        isOpen={isOpen || false}
        onClose={() => onClose && onClose()}
        onOpen={() => onOpen && onOpen()}
      >
        <FormPoup id={id} href={href} title="Để lại thông tin" />
      </ModalBase>
    </>
  );
};
