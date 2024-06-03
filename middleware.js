import { NextResponse } from "next/server";
import { tokenFromMiddle } from "./utils/service/userService";

export function middleware(request) {
  // console.log("hello i am midleware");
  const token = request.cookies.get("authToken")?.value;
  // console.log(token, " token middleware");
  // tokenFromMiddle(token);
  // if (request.nextUrl.pathname.startsWith("/viewmemories")) {
  //   if (!token) {
  //     return NextResponse.rewrite(new URL("/login", request.url));
  //   }
  // }
}
