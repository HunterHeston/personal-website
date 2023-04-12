import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

const listID = process.env.MAILCHIMP_LIST_ID || "";

export type SubscriptionResult = {
  success: boolean;
  status: number | string;
  message: string;
};
export async function subscribeToBlog(
  email: string
): Promise<SubscriptionResult> {
  try {
    const response = await mailchimp.lists.addListMember(listID, {
      email_address: email,
      status: "subscribed",
    });

    if (response.status !== "subscribed") {
      return {
        message: "Failed to subscribe. There was an error with mailchimp.",
        status: response.status,
        success: false,
      };
    }

    return {
      message: "Successfully subscribed user",
      status: response.status,
      success: true,
    };
  } catch (error: any) {
    return {
      message: "Failed to subscribe user: " + error.message,
      status: error.status,
      success: false,
    };
  }
}
