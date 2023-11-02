import { Button, ButtonProps } from "@chakra-ui/react";

export const BtnTheme = (props: ButtonProps) => {
  const { children, ...args } = props;
  return (
    <Button
      color={"white"}
      size={"md"}
      borderRadius={"0px"}
      {...args}
      bg={"blue.400"}
      h={"-moz-max-content"}
      transition={"all ease .4s"}
      _hover={{
        bg: "blue.700",
      }}
    >
      {children}
    </Button>
  );
};
