import mongoose from "mongoose";
const uri = "mongodb://localhost:27017/onecupchai";

const connectToMongoDb = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected:", conn.connection.host);
  } catch (error) {
    console.error(error);
    // process.exit(1);
  }
};

module.exports = connectToMongoDb;
