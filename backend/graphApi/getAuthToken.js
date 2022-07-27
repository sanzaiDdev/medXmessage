import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const headers = {
  "User-Agent": "Mozilla/5.0",
  "content-type": "application/x-www-form-urlencoded",
};

var urlencoded = new URLSearchParams();
urlencoded.append("grant_type", "client_credentials");
urlencoded.append("client_id", process.env.CLIENT_ID);
urlencoded.append("client_secret", process.env.CLIENT_SECRET);
urlencoded.append("resource", "https://graph.microsoft.com");

const getToken = async () => {
  try {
    const { data } = await axios({
      url: `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/token`,
      method: "post",
      headers: headers,
      data: urlencoded,
    });

    return data.access_token;
  } catch (error) {
    console.log(error);
  }
};

export default getToken;
