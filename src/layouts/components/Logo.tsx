import { Heading, VStack, Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Logo = () => {
  return (
    <Link
      href="/"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        justifyContent: "flex-start",
      }}
    >
      <Image
        priority
        width={70}
        height={70}
        src={`/logo-tnut.png`}
        alt="logo Trường Đại học Kỹ thuật Công nghiệp
        "
      />

      <Box>
        <Heading
          as="h4"
          size={{ lg: "sm", base: "xs" }}
          justifyContent={"center"}
        >
          Đại học Kỹ thuật Công nghiệp
        </Heading>
      </Box>
    </Link>
  );
};
