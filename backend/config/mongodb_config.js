require("dotenv").config();

const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;

let db;

const connectToDB = async () => {
  if (db) return db;

  try {
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db("Guard_app");
    return db;
  } catch (error) {
    console.error("failed to connect to db", error);
    process.exit(1);
  }
};

module.exports = { connectToDB };
