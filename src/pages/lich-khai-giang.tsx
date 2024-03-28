"use client";

import { Loading } from "@/components/Loading";
import { fetchSeo } from "@/ultil/seo";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import ReactHtmlParser from "html-react-parser";
import { replaceSeoRM } from "@/ultil/seoRankMath";

const LichKg = dynamic(
  () => import("@/features/lich-khai-giang").then((mod) => mod.LichKg),
  {
    loading: () => <Loading />
  }
);

export const getServerSideProps: GetServerSideProps = async () => {
  const api_rm_url = process.env.API_RMS_URL || "";
  const api_url = `${api_rm_url}/lich-khai-giang`;

  const res = await fetchSeo({ url: api_url, revalidate: 3600 });
  const head = await res.json();
  return {
    props: {
      head: head.head || null
    }
  };
};

const Page = (props: any) => {
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
      {props.head && (
        <div>
          <Head>{ReactHtmlParser(replaceSeoRM(props.head))}</Head>
        </div>
      )}
      <LichKg list={list} isLoading={isLoading} />
    </>
  );
};

export default Page;
