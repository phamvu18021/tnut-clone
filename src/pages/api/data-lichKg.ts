// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  list: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //lấy dữ liệu form từ wordpress
  const api_url = process.env.API_URL || "";
  const hasSSL = process.env.NEXT_PUBLIC_HAS_SSL || "true";
  if (hasSSL === "false") process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

  let filteredLines: string[] = [];
  try {
    const responeWordpress = await fetch(
      `${api_url}/posts`,
      //?slug=lich-khai-giang
      {
        next: { revalidate: 10 },
      }
    );
    const data: any[] = await responeWordpress.json();

    //lấy ra chuỗi formHTML
    const htmlString = data?.length > 0 ? data[0]?.content?.rendered : ``;

    // Loại bỏ các thẻ HTML từ chuỗi
    const textContent = htmlString.replace(/(&#8211;|<[^>]*>)/g, "");

    // Tách các chuỗi bằng dấu xuống dòng
    const lines = textContent.split("\n");

    // Loại bỏ các chuỗi trống và khoảng trắng
    filteredLines = lines?.filter((line: string) => line.trim() !== "");
    filteredLines = filteredLines?.map((line: string) => line?.trim());
  } catch (error) {
    console.log(error);
  }

  if (req.method === "GET") {
    res.status(200).json({
      list: filteredLines || [],
    });
  }
}
