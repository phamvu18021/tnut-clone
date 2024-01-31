"use client";

import { Loading } from "@/components/Loading";
import { fetchSeo } from "@/ultil/seo";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import ReactHtmlParser from "html-react-parser";

const LichKg = dynamic(
  () => import("@/features/lich-khai-giang").then((mod) => mod.LichKg),
  {
    loading: () => <Loading />
  }
);

export const getServerSideProps: GetServerSideProps = async () => {
  const api_url = `https://nologin.tnut.vn/wp-json/rankmath/v1/getHead?url=https://nologin.tnut.vn/lich-khai-giang`;

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
      <div>
        <Head>{ReactHtmlParser(props.head)}</Head>
      </div>
      <LichKg list={list} isLoading={isLoading} />
    </>
  );
};

export default Page;
