"server only";

import ErrorBoundary from "@/components/ErrorBoundary";
import { Post } from "@/features/post";
import { LayoutPost } from "@/layouts/layoutPost";
import { GetServerSideProps } from "next";
import { ReactElement, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSeo } from "@/ultil/seo";
import Head from "next/head";
import ReactHtmlParser from "html-react-parser";
import { replaceSeoRM } from "@/ultil/seoRankMath";
import { fetchGraphQL } from "@/ultil/fetchAuth";
import { useRouter } from "next/router";
import { graphqlPostQuery } from "@/graphQLQuery";
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const url = process.env.API_RMS_URL || "";

  try {
    const params = context.params;
    const slug = params?.slug || "";
    const resSeo = await fetchSeo({
      url: `${url}/${slug}`,
      revalidate: 3600
    });
    const head = await resSeo.json();

    return {
      props: { head: head.head }
    };
  } catch (error) {
    console.error(error);
    return {
      props: { head: null }
    };
  }
};

interface IPostPage {
  post: any;
  head: string;
}

const Page = (props: IPostPage) => {
  const { head } = props;
  const router = useRouter();
  const slugQuery = graphqlPostQuery({ slug: router.query.slug as string });
  const { data, isLoading } = useQuery({
    queryKey: ["graphqlPostQuery"],
    queryFn: () => fetchGraphQL({ query: slugQuery })
  });
  return (
    <>
      {head && (
        <div>
          <Head>{ReactHtmlParser(replaceSeoRM(head))}</Head>
        </div>
      )}
      <ErrorBoundary fallback={<h1>Lỗi phía máy chủ</h1>}>
        {!isLoading && <Post post={data?.postBy} />}
      </ErrorBoundary>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <LayoutPost>{page}</LayoutPost>;
};

export default Page;
