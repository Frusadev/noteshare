import mongoose, { Schema } from "mongoose";
import type { INote } from "./interfaces";

const NoteSchema: Schema = new Schema(
  {
    id: { type: String, required: true },
    authorName: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.model<INote>("Note", NoteSchema);
