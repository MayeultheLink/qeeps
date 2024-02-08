const { MongoClient } = require('mongodb');
require('dotenv').config();

let dbInstance;

const connectToDatabase = async () => {
  try {
    const client = await MongoClient.connect(`mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0.4ybu9ra.mongodb.net/`);

    const database = client.db('Qeeps');
    console.log('Mongo DB connection successful');

    return database;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};

const getDatabase = async () => {
  if (!dbInstance) {
    dbInstance = await connectToDatabase();
  }
  return dbInstance;
};

module.exports = { getDatabase };
