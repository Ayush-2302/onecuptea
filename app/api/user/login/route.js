import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import connectToMongoDb from "@/db/connectDb";
import Jwt from "jsonwebtoken";
connectToMongoDb();
const JWT_SECRET = "skdflaskjdflksjdf";

export const POST = async (req) => {
  try {
    const { email, password } = await req.json();
    const user = await User.findOne({ email: email });
    if (!user) {
      return NextResponse.json(
        { error: "User with This email not found ", success: false },
        {
          status: 404,
        }
      );
    }
    const comPassword = bcrypt.compareSync(password, user.password);
    if (!comPassword) {
      return NextResponse.json(
        { error: "Invalid credentials !!", success: false },
        {
          status: 404,
        }
      );
    }
    console.log("hellow ayush");
    const authToken = Jwt.sign({ id: user.id }, JWT_SECRET);
    // console.log(authToken);

    const response = NextResponse.json(
      { authToken, user, success: true },
      {
        status: 200,
      }
    );
    response.cookies.set("authToken", authToken, {
      expiresIn: "1d",
      httpOnly: true,
    });

    return response;
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
