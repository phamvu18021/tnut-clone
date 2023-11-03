"use client";

import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
export const CardReg = ({
  image,
  desc,
  title,
}: {
  image?: string;
  desc: string;
  title: string;
}) => {
  return (
    <Box>
      <Center
        m={2}
        style={{ textDecoration: "none" }}
        pos={"relative"}
        transition={"all ease .4s"}
        className="card-blog"
        h={"100%"}
        paddingTop={{ base: "10px" }}
      >
        <Flex
          flexDir={"column"}
          justify={"space-between"}
          maxW={"700px"}
          w={"full"}
          overflow={"hidden"}
          h={"100%"}
        >
          <Box>
            <Box pos={"relative"} aspectRatio={431 / 288}>
              <Image
                width={431}
                height={288}
                src={image || `/blog.jpg`}
                priority
                alt={""}
                style={{ height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Stack>
              <Text
                color={"gray.800"}
                fontSize={{ lg: "20px", base: "sm" }}
                fontWeight={"500"}
                lineHeight={"1.6"}
                mt={"15px"}
                dangerouslySetInnerHTML={{ __html: desc }}
              />
              <Text>{title}</Text>
            </Stack>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};
