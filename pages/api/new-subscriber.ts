import { validEmail } from "@/lib/email";
import { SubscriptionResult, subscribeToBlog } from "@/lib/mailchimp";
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

  // get the email and validate it
  const subscriberEmail: string = req.body["email"];
  if (!validEmail(subscriberEmail)) {
    res.status(400).json({ error: "Invalid email address provided" });
    return;
  }

  // subscribe the user to the list using mailchimp API
  const result: SubscriptionResult = await subscribeToBlog(subscriberEmail);
  if (result.success === false) {
    console.error("Failed to subscribe user: ", result);
    res.status(500).json({ error: result.message });
    return;
  }

  res.status(200).json({ message: "successfully subscribed to email list" });
}
