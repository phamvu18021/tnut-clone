"use client";

import { Loading } from "@/components/Loading";
import { fetchSeo } from "@/ultil/seo";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import Head from "next/head";
import ReactHtmlParser from "html-react-parser";

const DangkyTc = dynamic(
  () => import("@/features/dang-ky-thanh-cong").then((mod) => mod.DangkyTc),
  {
    loading: () => <Loading />
  }
);

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const api_url = `https://nologin.tnut.vn/wp-json/rankmath/v1/getHead?url=https://nologin.tnut.vn/cam-on`;

  const res = await fetchSeo({ url: api_url, revalidate: 3600 });
  const head = await res.json();
  return {
    props: {
      head: head.head
    }
  };
};

const Page = (props: any) => {
  return (
    <>
      <div>
        <Head>{ReactHtmlParser(props.head)}</Head>
      </div>
      <DangkyTc />
    </>
  );
};

export default Page;
