"use client";

import { Box, Button, HStack, Input } from "@chakra-ui/react";

import { useState } from "react";

import { useRouter } from "next/router";
export const FormInputs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery || "");
    router.push(`/tim-kiem?s=${encodedSearchQuery}`);
  };
  return (
    <Box zIndex={"100"}>
      <form onSubmit={onSearch}>
        <HStack>
          <Input
            bg={"white"}
            value={searchQuery}
            type="Text"
            border={"1px solid #BFBFBF "}
            borderRadius={0}
            px={4}
            placeholder="Tìm kiếm..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />{" "}
          {/* <Button borderRadius={0} onClick={onSearch}>
            Tìm kiếm
          </Button> */}
        </HStack>
      </form>
    </Box>
  );
};
