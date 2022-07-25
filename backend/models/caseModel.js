import mongoose from "mongoose";

const caseSchema = mongoose.Schema({});

export const Case = mongoose.model("Case", caseSchema);
