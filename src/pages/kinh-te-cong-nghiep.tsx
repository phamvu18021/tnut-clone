"use client";

import { Loading } from "@/components/Loading";
import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import ErrorBoundary from "@/components/ErrorBoundary";
import { BenefitNganh } from "@/components/BenefitNganh";
const Ktcn = dynamic(
  () => import("@/features/nganh-ktcn").then((mod) => mod.Ktcn),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành kinh tế công nghiệp "
        description="Ngành kinh tế công nghiệp"
      />
      <Ktcn />
      <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
        <Box margin={"0 auto"} bg={"gray.50"}>
          <BenefitNganh />
        </Box>
      </ErrorBoundary>
    </>
  );
};

export default Page;
