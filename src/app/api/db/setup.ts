import mongoose from "mongoose";
import { loadEnv } from "../config";

const MONGO_STR = loadEnv().MONGO_STR

if (!MONGO_STR) {
  throw new Error("MongoDB connection string is not provided");
}

export let connectedToDB = false

export async function connectDB() {
  try {
    await mongoose.connect(MONGO_STR);
    console.log("Connecting to MongoDB succesfull");
    connectedToDB = true
  } catch (error) {
    console.log("Error connecting to MongoDB");
    console.error(error);
  }
}
