import { NextApiRequest, NextApiResponse } from "next";

const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
    return;
  }

  const subscriberEmail: string = req.body["email"];

  if (!expression.test(subscriberEmail)) {
    console.warn(`Invalid email address provided to signup form.`);
    res.status(400).json({ error: "Invalid email address provided" });
    return;
  }

  res.status(200).json({ name: subscriberEmail });
}
