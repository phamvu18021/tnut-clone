"use client";

import { Loading } from "@/components/Loading";
import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import ErrorBoundary from "@/components/ErrorBoundary";
import { BenefitNganh } from "@/components/BenefitNganh";
const Ktxd = dynamic(
  () => import("@/features/nganh-ktxd").then((mod) => mod.Ktxd),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành kỹ thuật xây dựng ĐH Kỹ thuật Công nghiệp Thái Nguyên hệ đào tạo từ xa"
        description="Ngành kỹ thuật xây dựng ĐH Kỹ thuật Công nghiệp Thái Nguyên hệ đào tạo từ xa"
      />
      <Ktxd />
      <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
        <Box margin={"0 auto"} bg={"gray.50"}>
          <BenefitNganh />
        </Box>
      </ErrorBoundary>
    </>
  );
};

export default Page;
