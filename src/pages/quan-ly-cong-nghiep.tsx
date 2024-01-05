"use client";

import { Loading } from "@/components/Loading";
import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

import { BenefitNganh } from "@/components/BenefitNganh";
import ErrorBoundary from "@/components/ErrorBoundary";
const Qlcn = dynamic(
  () => import("@/features/nganh-qlcn").then((mod) => mod.Qlcn),
  {
    loading: () => <Loading />
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành quản lý công nghiệp ĐH Kỹ thuật Công nghiệp Thái Nguyên hệ đào tạo từ xa"
        description="Ngành quản lý công nghiệp ĐH Kỹ thuật Công nghiệp Thái Nguyên hệ đào tạo từ xa"
      />
      <Qlcn />
      <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
        <Box margin={"0 auto"} bg={"gray.50"}>
          <BenefitNganh />
        </Box>
      </ErrorBoundary>
    </>
  );
};

export default Page;
