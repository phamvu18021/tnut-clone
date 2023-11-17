"server only";

import ErrorBoundary from "@/components/ErrorBoundary";
import { Post } from "@/features/post";
import { LayoutPost } from "@/layouts/layoutPost";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { ReactElement } from "react";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const api_url = process.env.API_URL || "";
  const hasSSL = process.env.NEXT_PUBLIC_HAS_SSL || "true";
  if (hasSSL === "false") process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

  try {
    const params = context.params;
    const slug = params?.slug || "";
    const res = await fetch(`${api_url}/posts?slug=${slug}`, {
      next: { revalidate: 3600 },
    });
    const posts = await res.json();
    const post = posts ? posts[0] : null;

    return {
      props: { post: post || null },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { post: null },
    };
  }
};

interface IPostPage {
  post: any;
}

const Page = (props: IPostPage) => {
  const { post } = props;
  let tit = post?.title?.rendered.replace(/(<([^>]+)>)/gi, "");
  let des = post?.excerpt?.rendered.replace(/(<([^>]+)>)/gi, "");
  return (
    <>
      <NextSeo
        title={tit || "ĐH Kỹ thuật Công nghiệp Thái Nguyên hệ đào tạo từ xa"}
        description={
          des ||
          "Tuyển sinh hệ đại học trực tuyến khối ngành kỹ thuật, học từ xa kết hợp thực hành trực tiếp. Cấp bằng Kỹ sư/ Cử nhân được Bộ GD&ĐT công nhận"
        }
      />
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
