import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "utils/sendMail";

// type Data = {
//   name: string;
// };

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method === "POST") {
    // Process a POST request
    try {
      await sendEmail({
        senderMail: req.body.email,
        subject: "Access to info",
        name: req.body.name,
        message: req.body.message,
      });
      res.status(200).json({
        success: true,
        message: "Request sent successfully.",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, message: "Bir hata olustu, lutfen daha sonra tekrar deneyiniz" });
    }
  } else if (req.method === "GET") {
    res.status(200).json({ success: true, message: "Mail url, GET" });
  } else {
    res.status(500).json({ success: false, message: "Endpoint not provided!" });
  }
};
