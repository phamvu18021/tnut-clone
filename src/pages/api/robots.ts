import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", "public, max-age=86400"); // Cache for 1 day (optional)
  res.end(`
      User-agent: *
      Disallow: /admin
      `);
}
