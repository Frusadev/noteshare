import mongoose from "mongoose";
import { loadEnv } from "../config";

export let dbConnected = false

export const setupMongo = async () => {
  try {
    await mongoose.connect(loadEnv().MONGO_STR);
    dbConnected = true
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
