"use client";

import { BenefitNganh } from "@/components/BenefitNganh";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Loading } from "@/components/Loading";
import { fetchSeo } from "@/ultil/seo";
import { Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import Head from "next/head";
import ReactHtmlParser from "html-react-parser";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
const Ktcn = dynamic(
  () => import("@/features/nganh-ktcn").then((mod) => mod.Ktcn),
  {
    loading: () => <Loading />
  }
);

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const api_url = `https://nologin.tnut.vn/wp-json/rankmath/v1/getHead?url=https://nologin.tnut.vn/kinh-te-cong-nghiep`;

  const res = await fetchSeo({ url: api_url, revalidate: 3600 });
  const head = await res.json();
  return {
    props: {
      head: head.head
    }
  };
};

const Page = (props: any) => {
  console.log(props.head);
  return (
    <>
      <div>
        <Head>{ReactHtmlParser(props.head)}</Head>
      </div>
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
