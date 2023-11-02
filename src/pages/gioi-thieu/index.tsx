"use client";


import { NextSeo } from "next-seo";
import { About } from "@/features/about";

const Page = () => {
  return (
    <>
      <NextSeo
        title="Giới thiệu về Học viện Công nghệ Bưu chính Viễn thông"
        description="Trường Học viện Công nghệ Bưu chính Viễn thông (Posts and Telecommunications Institute of Technology – PTIT) được thành lập năm 1953, hiện nay  là một tổ chức Nghiên cứu - Giáo dục Đào tạo với thế mạnh về Nghiên cứu và đào tạo Đại học, sau Đại học trong lĩnh vực – Công nghệ Thông tin và Truyền thông hàng đầu Việt Nam"
      />
      <About />
    </>
  );
};

export default Page;