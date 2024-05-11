import mongoose from "mongoose";
const { Schema, model } = mongoose;
const UserSchemaMongoose = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  username: { type: String, required: true },
  profilepic: { type: String },
  coverpic: { type: String },
  createAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.userschema ||
  model("userschema", UserSchemaMongoose);
