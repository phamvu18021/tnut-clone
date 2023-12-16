"use client";

import { Box, HStack, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const FormInputs = ({ type }: { type: string }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const [checkInput, setCheckInput] = useState(false)

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const str = searchQuery.replace(/([^0-9a-z-%!?\s])/g, '');
    if (str != "") {
      router.push(`/tim-kiem?keyword=${str}`);
    }
    setSearchQuery("")

  };

  useEffect(() => {
    const str = searchQuery.replace(/([^0-9a-z-%!\s])/g, '');
    if (searchQuery != "" && str == "") {
      setCheckInput(true)
    } else {
      setCheckInput(false)
    }
  }, [searchQuery])
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
      {checkInput &&
        <Box pt={2} display={"flex"} color={"#f5222d"} justifyContent={"center"}>
          <Text>Từ khóa tìm kiếm không hợp lệ</Text>
        </Box>
      }
    </Box>
  );
};
