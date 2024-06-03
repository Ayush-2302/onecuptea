import Tea from "@/models/Tea";
import { NextResponse } from "next/server";
import connectToMongoDb from "@/db/connectDb";
import { writeFile } from "fs/promises";
import path from "path";

import { uploadOnCloudinary } from "@/utils/Cloudinary";
import { log } from "console";
import { writeFileSync } from "fs";

connectToMongoDb();

export const POST = async (req) => {
  try {
    const data = await req.formData();
    const name = data.get("name");
    const title = data.get("title");
    const description = data.get("description");
    const avatar = data.get("avatar");

    if (!avatar) {
      return NextResponse.json({ message: " Avatar not found " });
    }

    const buffer = Buffer.from(await avatar.arrayBuffer());

    const filename = avatar.name.replaceAll(" ", "_");

    const avatarLocalPath = path.join(
      process.cwd(),
      "public/assets/",
      filename
    );

    await writeFile(avatarLocalPath, buffer);

    if (!avatarLocalPath) {
      return NextResponse.json(
        { error: " Avatar path is not found " },
        { status: 404 }
      );
    }
    const avatar_image = await uploadOnCloudinary(avatarLocalPath);
    if (!avatar_image) {
      return NextResponse.json(
        { error: " Avatar not found......... " },
        { status: 404 }
      );
    }

    const tea = new Tea({ name, title, description, avatar: avatar_image.url });

    await tea.save();
    return NextResponse.json(
      { message: " Avatar added successfully ", tea },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error, message: " somthing went wrong " },
      { status: 500 }
    );
  }
};

// export const POST = async (req) => {
//   try {
//     const { name, title, description } = await req.json();
//     const tea = new Tea({
//       name,
//       title,
//       description,
//       avatar: "https://source.unsplash.com/featured/?tea",
//     });
//     await tea.save();
//     return NextResponse.json(
//       {
//         tea,
//         message: "Tea added successfully !!",
//         success: true,
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       {
//         error: error.message,
//         message: "Not able to add tea",
//         success: false,
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// };
export const GET = async (req) => {
  try {
    const user = await Tea.find();
    return NextResponse.json(
      {
        user,
        message: "Your blog fetched successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
        message: "Your blog is not fetched",
        success: false,
      },
      {
        status: 500,
      }
    );
  }
};
