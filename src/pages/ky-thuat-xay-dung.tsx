"use client";

import { BenefitNganh } from "@/components/BenefitNganh";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Loading } from "@/components/Loading";
import { Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { fetchSeo } from "@/ultil/seo";
import ReactHtmlParser from "html-react-parser";
import dynamic from "next/dynamic";
import Head from "next/head";
import { replaceSeoRM } from "@/ultil/seoRankMath";
const Ktxd = dynamic(
  () => import("@/features/nganh-ktxd").then((mod) => mod.Ktxd),
  {
    loading: () => <Loading />
  }
);

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const api_url = `https://nologin.tnut.vn/wp-json/rankmath/v1/getHead?url=https://nologin.tnut.vn/ky-thuat-xay-dung`;

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
      {props.head && (
        <div>
          <Head>{ReactHtmlParser(replaceSeoRM(props.head))}</Head>
        </div>
      )}
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
