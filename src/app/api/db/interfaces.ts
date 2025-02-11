import type { Document } from "mongoose";

export interface INote extends Document {
  id: string
  authorName: string
  content: string
}
