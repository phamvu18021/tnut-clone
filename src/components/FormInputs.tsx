"use client";

import { Box, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

export const FormInputs = ({ type }: { type: string }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/tim-kiem?keyword=${searchQuery}`);

    setSearchQuery("")

  };
  return (
    <Box zIndex={"100"}>
      <form onSubmit={onSearch}>
        <HStack>
          <Input
            required            
            bg={"white"}
            value={searchQuery}
            type="Text"
            border={"1px solid #BFBFBF "}
            borderRadius={0}
            px={4}
            placeholder="Tìm kiếm..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </HStack>
      </form>
    </Box>
  );
};
