"use client";

import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { BenefitNganh } from "@/components/BenefitNganh";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Box } from "@chakra-ui/react";

const Dangky = dynamic(
  () => import("@/features/dang-ky").then((mod) => mod.Dangky),
  {
    loading: () => <Loading />
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Đăng ký học từ xa Đại Học Kỹ Thuật Công Nghiệp"
        description="Đăng ký học Đại học từ xa Đại Học Kỹ Thuật Công Nghiệp, tiết kiệm chi phí và thời gian"
      />
      <Dangky />
      <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
        <Box margin={"0 auto"} bg={"gray.50"}>
          <BenefitNganh />
        </Box>
      </ErrorBoundary>
    </>
  );
};

export default Page;
