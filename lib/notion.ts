import { Client } from "@notionhq/client";

if (!process.env.NOTION_API_KEY) {
  throw new Error("NOTION_API_KEY is not defined");
}

if (!process.env.NOTION_CONTACT_DATABASE_ID) {
  throw new Error("NOTION_CONTACT_DATABASE_ID is not defined");
}

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_CONTACT_DATABASE_ID;

export type Contact = {
  name: string;
  email: string;
  message: string;
};

type UpdateDatabaseResult = {
  error: Error | null;
  message: string;
};

export async function addContactToDatabase(
  contact: Contact
): Promise<UpdateDatabaseResult> {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: contact.name,
              },
            },
          ],
        },
        Email: {
          email: contact.email,
        },
        Message: {
          rich_text: [
            {
              text: {
                content: contact.message,
              },
            },
          ],
        },
        Status: {
          select: {
            name: "New",
          },
        },
      },
    });
    console.log(response);
  } catch (error: any) {
    console.error(error);
    return {
      error: error,
      message: "Failed to add contact to database",
    };
  }

  return {
    error: null,
    message: "Contact added to database",
  };
}
