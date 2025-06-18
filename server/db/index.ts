import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.DATABASE_URL;
console.log("DATABASE_URL:", uri);
if (!uri) {
  throw new Error('DATABASE_URL is not defined in the environment variables');
}


export const db = new MongoClient(uri).db();