import { validEmail } from "@/lib/email";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // only allow POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
    return;
  }

  const contactName: string = req.body["name"];

  // get the email and validate it
  const contactEmail: string = req.body["email"];
  if (!validEmail(contactEmail)) {
    res.status(400).json({ error: "Invalid email address provided" });
    return;
  }

  const contactMessage: string = req.body["message"];
  if (contactEmail.length === 0) {
    res.status(400).json({ error: "Message cannot be empty" });
  }

  console.log(`contactName: ${contactName}`);
  console.log(`contactEmail: ${contactEmail}`);
  console.log(`contactMessage: ${contactMessage}`);

  res.status(200).json({ message: "successfully sent message" });
}
