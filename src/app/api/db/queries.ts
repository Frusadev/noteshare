import { Note } from "@/app/api/db/schemas/Note";
import type { INote } from "@/app/api/db/schemas/Note";
import { connectDB, connectedToDB } from "./setup";

export async function getNoteById(id: string) {
  if (!connectedToDB) {
    connectDB();
  }
  const note = Note.findOne({ id: id });
  return note;
}

export async function addNote(note: INote) {
  const newNote = new Note({
    authorName: note.authorName,
    id: note.id,
    content: note.content,
    date: note.date,
  });

  return newNote.save();
}
