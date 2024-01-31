import { Home } from "@/features/home";
import Head from "next/head";
import ReactHtmlParser from "html-react-parser";
import { GetServerSideProps } from "next";
import { fetchSeo } from "@/ultil/seo";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const api_url = `https://nologin.tnut.vn/wp-json/rankmath/v1/getHead?url=https://nologin.tnut.vn/`;

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
      <Home />
    </>
  );
};

export default Page;
