"server only";

import ErrorBoundary from "@/components/ErrorBoundary";
import { Post } from "@/features/post";
import { LayoutPost } from "@/layouts/layoutPost";
import { GetServerSideProps } from "next";
import { ReactElement } from "react";
import { fetchAuth } from "@/ultil/fetchAuth";
import { fetchSeo } from "@/ultil/seo";
import Head from "next/head";
import ReactHtmlParser from "html-react-parser";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const api_url = process.env.API_URL || "";
  const url = `https://nologin.tnut.vn/wp-json/rankmath/v1/getHead?url=https://nologin.tnut.vn/`;

  try {
    const params = context.params;
    const slug = params?.slug || "";
    const res = await fetchAuth({
      url: `${api_url}/posts?slug=${slug}`,
      revalidate: 3600
    });
    const resSeo = await fetchSeo({
      url: `${url}/${slug}`,
      revalidate: 3600
    });
    const head = await resSeo.json();

    const posts = await res.json();
    const post = posts ? posts[0] : null;

    return {
      props: { post: post || null, head: head.head }
    };
  } catch (error) {
    console.log(error);
    return {
      props: { post: null, head: null }
    };
  }
};

interface IPostPage {
  post: any;
  head: any;
}

const Page = (props: IPostPage) => {
  const { post, head } = props;
  let tit = post?.title?.rendered.replace(/(<([^>]+)>)/gi, "");
  let des = post?.excerpt?.rendered.replace(/(<([^>]+)>)/gi, "");
  return (
    <>
      <div>
        <Head>{ReactHtmlParser(head)}</Head>
      </div>
      <ErrorBoundary fallback={<h1>Lỗi phía máy chủ</h1>}>
        <Post post={post} />
      </ErrorBoundary>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <LayoutPost>{page}</LayoutPost>;
};

export default Page;
