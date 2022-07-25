import axios from "axios";

import getToken from "./getAuthToken.js";

const _userId = "93db7f63-122b-4c4b-b7f4-1c7170cbf664"; //user's id
const _folderId =
  "AQMkADMwNTY5MWY0LTVmM2EtNDczNC1hZjgxLWRhNjc2ZGU3ODA2NwAuAAADvwm4BnriAkaEj8ZjPdWH-AEA6beG6l4eqE6FxKAdpUagyQAAAgEMAAAA"; //user's mail folder id

var messages = [];

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

  // messages = [...messages, ...res?.data?.value];

  // if (res.data[`@odata.nextLink`])
  //   return getMessages(token, res.data[`@odata.nextLink`]);

  return res?.data.value;
};

const getInbox = async () => {
  const token = await getToken();

  try {
    // fetching mails from user's "INBOX" mail folder
    const url = `https://graph.microsoft.com/v1.0/users/${_userId}/mailFolders/${_folderId}/messages`;

    const messages = await getMessages(token, url);

    return messages;
  } catch (error) {
    console.log(error?.response?.data);
  }
};

export default getInbox;
