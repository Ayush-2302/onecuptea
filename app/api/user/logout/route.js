const { NextResponse } = require("next/server");

export const POST = async (req) => {
  const responce = NextResponse.json({
    message: "Logedout successfully",
    success: true,
  });
  responce.cookies.set("authToken", "", {
    expires: new Date(0),
  });
  return responce;
};
