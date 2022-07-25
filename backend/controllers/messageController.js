import { Message } from "../models/messsageModel.js";
import getInbox from "../utils/graphMails/fetchMails.js";

const extractBody = (entirePageHTML) => {
  var bodyHtml = /<body.*?>([\s\S]*)<\/body>/.exec(entirePageHTML)[1];
  return bodyHtml;
};

export const fetchMessages = async (req, res, next) => {
  const mails = await getInbox();

  // regular expression that match the subject with string 'Case Id' w/o case-sensitivity
  const regEx = /\b(Case Id)\b/i;
  // messages with the subject that includes the string "Case Id"
  const caseMessages = mails.filter((m) => regEx.test(m.subject));

  const mappedMails = mails?.map((m) => ({
    from: m.from.emailAddress,
    subject: m.subject,
    toReceipients: m.toRecipients.map((r) => r.emailAddress),
    bodyPreview: m.bodyPreview,
    richBodyText: extractBody(m.body.content),
    // richBodyText: m.body.content,
    receivedAt: m.receivedDateTime,
    hasAttachments: m.hasAttachments,
  }));

  await Message.insertMany(mappedMails);

  res.status(201).json({
    status: "success",
    message: "successfully fetched",
    mappedMails,
  });
};

export const getAllMessages = async (req, res, next) => {
  const messages = await Message.find();

  res.status(200).json({
    messages,
  });
};

export const getMessageDetail = async (req, res, next) => {
  const message = await Message.findById(req.params.id);

  res.status(200).json({
    message,
  });
};
