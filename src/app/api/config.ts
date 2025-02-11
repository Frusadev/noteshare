import dotenv from "dotenv"

export function loadEnv() {
  dotenv.config()
  return {
    MONGO_STR: process.env.DB_STRING || "",
    URL: process.env.URL || "https://localhost:3000"
  }
}

