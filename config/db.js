const mongoose = require("mongoose");
require("dotenv").env;
require("colors");
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
