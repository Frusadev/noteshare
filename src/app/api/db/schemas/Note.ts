import { model, Schema } from "mongoose";
import type { Model } from "mongoose";

export interface INote {
  authorName: string
  id: string;
  content: string;
  date: Date;
}

const noteSchema = new Schema({
  authorName: String,
  id: String,
  content: String,
  date: Date,
});

export const Note = model("Note", noteSchema)
