import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ success: true, message: "dogukaanyilmaz.com/api" });
};
