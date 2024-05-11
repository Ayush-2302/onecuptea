import { NextResponse } from "next/server";
import connectToMongoDb from "@/db/connectDb";
import Payment from "@/models/Payment";

connectToMongoDb();
// getting user details
export const GET = async (req) => {
  try {
    const payment = await Payment.find({});
    if (!payment) {
      return NextResponse.json(
        { payment: "Not any payment found by user", success: false },
        { status: 200 }
      );
    }
    return NextResponse.json({ payment, success: true }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { error: "Internal server issue", success: false },
      { status: 500 }
    );
  }
};

// making payment using post method
export const POST = async (req) => {
  try {
    const { name, message, amount } = await req.json();

    // make payment from payment modules
    const payment = new Payment({
      name,
      message,
      amount,
    });

    await payment.save();
    return NextResponse.json(
      {
        payment,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
    return Response.json(
      {
        message: "fail to make payment",
        success: false,
      },
      { status: 500 }
    );
  }
};
