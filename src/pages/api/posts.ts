// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  posts: any[];
  totalPosts: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //lấy dữ liệu form từ wordpress
  const type = req?.query?.type || "";
  const page = req?.query?.page || "";
  const api_url = process.env.API_URL || "";
  const hasSSL = process.env.NEXT_PUBLIC_HAS_SSL || "true";
  if (hasSSL === "false") process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

  let posts: any[] = [];
  let totalPosts: string = "0";

  try {
    //get all categories
    // const resCats = await fetch(`${api_url}/categories`, {
    //   next: { revalidate: 1800 },
    // });
    // const cats: any[] = (await resCats.json()) || [];
    // const newCat = cats?.find((cat) => cat.name === "Tin Tức");
    const idNew = 84;
    // const notifiCat = cats?.find((cat) => cat.name === "Thông báo");
    const idNotifi = 82;
    const id = type === "news" ? idNew : type === "notifis" ? idNotifi : null;
    const endPoint = id
      ? `${api_url}/posts?_embed&per_page=8&status=publish&page=${page}&categories=${id}`
      : //&categories=${id}
        `${api_url}/posts?_embed&per_page=8&status=publish&page=${page}`;

    //get posts category==='tin-tuc'
    const res = await fetch(endPoint, {
      next: { revalidate: 1 },
    });
    let ttp = Number(res.headers?.get("X-WP-Total") || "0");
    if (ttp > 4) {
      totalPosts = String(ttp - 4);
    } else {
      totalPosts = String(ttp);
    }

    const postsNotFeatureImage: any[] = (await res?.json()) || [];
    posts =
      postsNotFeatureImage?.length > 0
        ? postsNotFeatureImage?.map((post: any) => {
            const featured_image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

            return {
              ...post,
              featured_image,
            };
          })
        : [];
  } catch (error) {
    console.log(error);
  }

  if (req.method === "GET") {
    res.status(200).json({
      posts,
      totalPosts,
    });
  }
}
