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
import client from "@/apollo/apolloClient";
import { getPostBySlug } from "@/apollo/queries/homeQueries";
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const url = process.env.API_RMS_URL || "";
  try {
    const params = context.params;
    const slug = params?.slug || "";
    const GET_POST = getPostBySlug({ slug });
    const { data } = await client.query({
      query: GET_POST
    });
    const resSeo = await fetchSeo({
      url: `${url}/${slug}`,
      revalidate: 3600
    });
    const head = await resSeo.json();

    return {
      props: { post: data.postBy, head: head.head }
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
  const { post, head } = props;
  console.log(post);
  const router = useRouter();
  const slug = router.query.slug as string;
  const slugQuery = graphqlPostQuery({ slug: router.query.slug as string });
  // const { data, isLoading } = useQuery({
  //   queryKey: ["graphqlPostQuery"],
  //   queryFn: () => fetchGraphQL({ query: slugQuery })
  // });
  const [postz, setPostz] = useState<any>();
  const [loading, setLoading] = useState(true);
  const queryApolo = getPostBySlug({ slug: slug });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await client.query({
          query: queryApolo
        });
        setPostz(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching post:", err);
        setLoading(false);
      }
    };

    if (slugQuery) {
      fetchData();
    }
  }, []);
  // console.log(!loading && postz);

  return (
    <>
      {head && (
        <div>
          <Head>{ReactHtmlParser(replaceSeoRM(head))}</Head>
        </div>
      )}
      <ErrorBoundary fallback={<h1>Lỗi phía máy chủ</h1>}>
        {!loading && <Post post={postz.postBy} />}
      </ErrorBoundary>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <LayoutPost>{page}</LayoutPost>;
};

export default Page;
