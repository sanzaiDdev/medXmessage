import axios from "axios";
import { generateEmailTemplate } from "../utils/generateMailTemplate.js";

import getToken from "./getAuthToken.js";

export const getMessageAttachments = async (mailId) => {
  const url = `https://graph.microsoft.com/v1.0/users/${process.env.USER_ID}/messages/${mailId}/attachments`;
  const res = await authenticatedGraphGetRequest(url);

  return res.data.value.map((a) => ({
    messageId: mailId,
    attachmentId: a.id,
    name: a.name,
    type: a.contentType,
  }));
};

export const getAttachmentRawData = async (messageId, attachmentId) => {
  const url = `https://graph.microsoft.com/v1.0/users/${process.env.USER_ID}/messages/${messageId}/attachments/${attachmentId}`;
  const res = await authenticatedGraphGetRequest(url);

  console.log(res);

  return res.data;
};

const authenticatedGraphGetRequest = async (url) => {
  const token = await getToken();

  const res = await axios({
    method: "GET",
    url,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });

  return res;
};

const getMessages = async (token, url) => {
  console.log("Fetching mails from:", url);

  const res = await axios({
    method: "GET",
    url,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });

  return res?.data.value;
};

const getInbox = async () => {
  const token = await getToken();

  try {
    // fetching top 20 mails from user's "INBOX" mail folder
    const url = `https://graph.microsoft.com/v1.0/users/${process.env.USER_ID}/mailFolders/${process.env.MAIL_FOLDER_ID}/messages?$top=20`;

    const messages = await getMessages(token, url);

    return messages;
  } catch (error) {
    console.log(error?.response?.data);
  }
};

export const sendMessage = async (subject, toReceipient, messageContent) => {
  const mailData = {
    message: {
      subject,
      body: {
        contentType: "HTML",
        content: generateEmailTemplate(messageContent),
      },
      toRecipients: [
        {
          emailAddress: {
            address: toReceipient,
          },
        },
      ],
    },
    saveToSentItems: "true",
  };

  const token = await getToken();

  const mailUrl = `https://graph.microsoft.com/v1.0/users/${process.env.USER_ID}/sendMail`;

  const res = await axios({
    method: "POST",
    url: mailUrl,
    data: mailData,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });

  return res;
};

export default getInbox;
