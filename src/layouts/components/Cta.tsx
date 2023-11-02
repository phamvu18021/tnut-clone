import {
  BtnMes,
  BtnPhone,
  BtnZalo,
  BtnEmail,
  BtnMailN,
} from "@/components/BtnCTA";
import { Box, Flex, VStack } from "@chakra-ui/react";
export const CTA = () => {
  return (
    <Box
      pos={"fixed"}
      top={{ lg: "50%", base: "80%" }}
      right={"0"}
      className="CTA"
      zIndex={5}
    >
      <Flex
        key={"e1"}
        height={"160px"}
        width={"200px"}
        alignItems={"center"}
        top={"-108%"}
        left={"-105%"}
        position={"absolute"}
      >
        <BtnEmail aria-label="email" />
      </Flex>

      <VStack gap={0} alignItems={"flex-end"}>
        <BtnMailN aria-label="mailto : " />
        <BtnMes aria-label="messenter" />
        <BtnPhone aria-label="phone" />
      </VStack>
    </Box>
  );
};
