import mongoose from "mongoose";

const emailAddress = mongoose.Schema({
  name: String,
  address: String,
});

const messageSchema = mongoose.Schema({
  from: emailAddress,
  toReceipients: [emailAddress],
  subject: {
    type: String,
    required: true,
  },
  hasAttachments: Boolean,
  bodyPreview: String,
  richBodyText: String,
  receivedAt: Date,
  case: {
    type: mongoose.Types.ObjectId,
    ref: "Case",
  },
});

export const Message = mongoose.model("Message", messageSchema);
