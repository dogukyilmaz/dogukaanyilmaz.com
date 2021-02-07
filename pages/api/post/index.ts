import { PrismaClient, Post } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method === "GET") {
    try {
      const posts = await prisma.post.findMany({
        where: {
          // published: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      res.status(200).json({
        success: true,
        data: posts,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, message: "Bir hata olustu, lutfen daha sonra tekrar deneyiniz" });
    }
  } else {
    res.status(500).json({ success: false, message: "Endpoint not provided!" });
  }
};
