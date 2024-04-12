import { Home } from "@/features/home";
import Head from "next/head";
import ReactHtmlParser from "html-react-parser";
import { GetServerSideProps } from "next";
import { fetchSeo } from "@/ultil/seo";
import { replaceSeoRM } from "@/ultil/seoRankMath";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const api_rm_url = process.env.API_RMS_URL || "";
  const api_url = `${api_rm_url}`;
  try {
    const res = (await fetchSeo({ url: api_url, revalidate: 3600 })) || "";
    const head = (await res.json()) || "";
    return {
      props: {
        head: head.head
      }
    };
  } catch (error) {
    console.error("Error in fetching seo", error);
    return {
      props: {
        head: null
      }
    };
  }
};
const Page = (props: any) => {
  return (
    <>
      {props.head && (
        <div>
          <Head>{ReactHtmlParser(replaceSeoRM(props.head))}</Head>
        </div>
      )}
      <Home />
    </>
  );
};

export default Page;
