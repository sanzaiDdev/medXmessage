import { Message } from "../models/messsageModel.js";
import { emitEvent } from "../socket/socket.service.js";

import getInbox, {
  getAttachmentRawData,
  getMessageAttachments,
} from "../graphApi/fetchMails.js";
import getToken from "../graphApi/getAuthToken.js";

const extractBody = (entirePageHTML) => {
  var bodyHtml = /<body.*?>([\s\S]*)<\/body>/.exec(entirePageHTML)[1];
  return bodyHtml;
};

const getMessageAttachment = async (mail) => {
  return await getMessageAttachments(mail.mId);
};

export const fetchMessages = async (req, res, next) => {
  const mails = await getInbox();

  const existingMessages = await Message.find();

  // regular expression that match the subject with string 'Case Id' w/o case-sensitivity
  const regEx = /\b(Case Id)\b/i;
  // messages with the subject that includes the string "Case Id"
  const caseMessages = mails.filter((m) => regEx.test(m.subject));

  var mappedMails = caseMessages?.map((m) => ({
    mId: m.id, //graph api uuid for message
    from: m.from.emailAddress,
    subject: m.subject,
    toReceipients: m.toRecipients.map((r) => r.emailAddress),
    bodyPreview: m.bodyPreview,
    richBodyText: extractBody(m.body.content),
    receivedAt: m.receivedDateTime,
    hasAttachments: m.hasAttachments,
  }));

  mappedMails = await Promise.all(
    mappedMails.map(async (mail) => {
      if (!mail.hasAttachments) return mail;
      return { ...mail, attachments: await getMessageAttachment(mail) };
    })
  );

  //exclude already exisiting news based on subject
  const nonDuplicatedMessages = [];
  mappedMails.forEach((m) => {
    if (!existingMessages.find((em) => em.subject === m.subject))
      nonDuplicatedMessages.push(m);
  });

  nonDuplicatedMessages.length > 0 &&
    emitEvent(
      "MESSAGE_FETCHED",
      `${nonDuplicatedMessages.length} new messages`
    );

  await Message.insertMany(nonDuplicatedMessages);

  res.status(201).json({
    status: "success",
    message: "successfully fetched",
    mappedMails,
  });
};

export const getAttachment = async (req, res, next) => {
  const rawRes = await getAttachmentRawData(
    req.query.messageId,
    req.query.attachmentId
  );

  res.json({ rawData: rawRes.data });
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

export const sendMessage = async (req, res, next) => {
  const { message, subject, toReceipients } = req.body;

  res.status(201).json({
    message,
    subject,
    toReceipients,
  });
};
