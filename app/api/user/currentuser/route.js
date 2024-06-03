import User from "@/models/User";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
const JWT_SECRET = "skdflaskjdflksjdf";

export const GET = async (req) => {
  try {
    const authToken = req.cookies.get("authToken")?.value;
    console.log(authToken, "current user");
    const data = jwt.verify(authToken, JWT_SECRET);
    const user = await User.findById(data.id).select("-password");

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
};
