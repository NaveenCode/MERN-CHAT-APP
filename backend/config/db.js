const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("colors");
dotenv.config();
// console.log(process.env.MONGO_URI);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`database connected:${conn.connection.host}`.blue);
  } catch (error) {
    console.log(`Error:${error.message}`.red.bold);
    process.exit();
  }
};
module.exports = connectDB;
