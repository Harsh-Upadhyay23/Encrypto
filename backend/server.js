// server.js

import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import cors from "cors";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = "Encrypto";
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const client = new MongoClient(MONGO_URI);
let db;

async function connectDB() {
  await client.connect();
  db = client.db(DB_NAME);
  console.log("Connected to MongoDB");
}
connectDB();

app.get("/", async (req, res) => {
  const collection = db.collection("passwords");
  const data = await collection.find({}).toArray();
  res.json(data);
});
//save a password
app.post("/", async (req, res) => {
  const password=req.body;
  const collection = db.collection("passwords");
  const data = await collection.insertOne(password);
  res.json({success :true,result:data});
});

app.delete("/", async (req, res) => {
  const password=req.body;
  const collection = db.collection("passwords");
  const data = await collection.deleteOne(password);
  res.json({success :true,result:data});
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
