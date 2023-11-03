"use client";

import { clean } from "@/lib/sanitizeHtml";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export const CardTestimonials = ({
  image,
  title,
  desc,
  path,
  career,
  imageH,
}: {
  image?: string;
  title: string;
  desc: string;
  path: string;
  career?: string;
  imageH?: string;
}) => {
  return (
    <Box
      as={Link}
      style={{ textDecoration: "none" }}
      href={path}
      py={4}
      px={6}
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-6px)" }}
      className="card-blog"
    >
      <HStack alignItems={"center"} pb={8}>
        <Box
          display={"flex"}
          bg={"white"}
          pos={"relative"}
          aspectRatio={70 / 70}
          justifyContent={"center"}
        >
          <Image
            width={70}
            height={70}
            src={image || `/blog.jpeg`}
            style={{ height: "100%", objectFit: "contain" }}
            alt={title}
          />
        </Box>
        <Stack>
          <Heading
            color={"facebook.800"}
            as={"h3"}
            fontSize={{ base: "md", lg: "xl" }}
            fontWeight={"600"}
            _hover={{ color: "red.500" }}
            css={{
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            dangerouslySetInnerHTML={{ __html: clean(title) }}
          />
          <Text fontSize={"12px"} mt={-2} color={"facebook.600"}>
            {career}
          </Text>
        </Stack>
      </HStack>

      <Text
        color={"gray.500"}
        fontSize={"1rem"}
        css={{
          display: "-webkit-box",
          WebkitLineClamp: "5",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    </Box>
  );
};
