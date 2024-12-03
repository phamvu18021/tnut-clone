// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: any;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const graphqlEndpoint = process.env.API_GRAPHQL_URL || "";
  const token = process.env.TOKEN || ""; // Nếu có xác thực token

  if (req.method !== "POST") {
    return res.status(405).json({
      data: null,
      error: "Only POST requests are allowed."
    });
  }

  const { query, variables } = req.body; // Lấy query và variables từ body request

  if (!query) {
    return res.status(400).json({
      data: null,
      error: "Missing GraphQL query in request body."
    });
  }

  try {
    // Gửi request đến GraphQL endpoint
    const response = await fetch(`${graphqlEndpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }) // Nếu cần token
      },
      body: JSON.stringify({ query, variables })
    });

    const result = await response.json();

    // Trả dữ liệu về client
    res.status(200).json({
      data: result.data
    });
  } catch (error: any) {
    console.error("GraphQL API Error:", error);
    res.status(500).json({
      data: null,
      error: error.message || "Internal server error."
    });
  }
}
