import getInbox from "../utils/graphMails/fetchMails.js";

const extractBody = (entirePageHTML) => {
  var bodyHtml = /<body.*?>([\s\S]*)<\/body>/.exec(entirePageHTML)[1];

  return bodyHtml;
};

export const fetchMails = async (req, res, next) => {
  const mails = await getInbox();

  const mappedMails = mails?.map((m) => ({
    id: m.id,
    subject: m.subject,
    onDate: m.createdDateTime,
    receipients: m.toRecipients.map((r) => r.emailAddress.address),
    bodyPreview: m.bodyPreview,
    richTextBody: extractBody(m.body.content),
  }));

  // regular expression that match the subject with string 'Case Id' w/o case-sensitivity
  const regEx = /\b(Case Id)\b/i;

  // messages with the subject that includes the string "Case Id"
  const caseMessages = mappedMails.filter((m) => regEx.test(m.subject));

  const otherMessages = mappedMails.filter(
    (m) => !caseMessages.map((wc) => wc.id).includes(m.id)
  );

  res.status(201).json({
    status: "success",
    data: {
      caseMessages,
      otherMessages,
    },
  });
};
