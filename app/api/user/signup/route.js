import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import connectToMongoDb from "@/db/connectDb";
connectToMongoDb();

export const POST = async (req) => {
  try {
    const { name, email, password } = await req.json();
    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(password, salt);
    const newUser = await new User({
      name,
      email,
      password: secPassword,
    });
    await newUser.save();
    return NextResponse.json(
      { newUser, success: true },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Not able to add user ", success: false },
      {
        status: 500,
      }
    );
  }
};
