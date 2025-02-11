import type { INote } from "./interfaces";
import Note from "./models";
import { dbConnected, setupMongo } from "./setup";
export async function addNote(note: INote) {
  if (!dbConnected) {
    await setupMongo()
  }
  const newNote = new Note(note);
  newNote.save();
}

export async function getNoteById(id: string) {
  if (!dbConnected) {
    await setupMongo()
  }
  return Note.findOne({ id });
}
