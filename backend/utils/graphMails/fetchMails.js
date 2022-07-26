import axios from "axios";

import getToken from "./getAuthToken.js";

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

export default getInbox;
