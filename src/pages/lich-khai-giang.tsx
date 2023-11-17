"use client";

import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LichKg = dynamic(
  () => import("@/features/lich-khai-giang").then((mod) => mod.LichKg),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  const [list, setList] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getLichKg = async () => {
      try {
        const res = await fetch("/api/data-lichKg");
        const data = await res.json();
        const list: string[] = data?.list || [];
        list?.length > 0 && setList(list);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getLichKg();
  }, []);

  return (
    <>
      <NextSeo
        title="Lịch khải Giảng - ĐH Kỹ thuật Công nghiệp Thái Nguyên hệ đào tạo từ xa"
        description="Lịch khải giảng - ĐH Kỹ thuật Công nghiệp Thái Nguyên hệ đào tạo từ xa"
      />
      <LichKg list={list} isLoading={isLoading} />
    </>
  );
};

export default Page;
