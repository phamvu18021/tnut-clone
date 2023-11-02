"use client";

import { Loading } from "@/components/Loading";
import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

import ErrorBoundary from "@/components/ErrorBoundary";
import { BenefitNganh } from "@/components/BenefitNganh";
const Qlcn = dynamic(
  () => import("@/features/nganh-qlcn").then((mod) => mod.Qlcn),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành kỹ thuật điện tử viễn thông "
        description="Ngành kỹ thuật điện tử viễn thông"
      /> 
      <Qlcn />
      <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
        <Box margin={"0 auto"} bg={'gray.50'}>
          <BenefitNganh />
        </Box>
      </ErrorBoundary>
    </>
  );
};

export default Page;
