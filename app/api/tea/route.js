import Tea from "@/models/Tea";
import { NextResponse } from "next/server";
import connectToMongoDb from "@/db/connectDb";
import { writeFile } from "fs/promises";
import multer from "multer";
import { log } from "console";
import { uploadOnCloudinary } from "@/utils/Cloudinary";

connectToMongoDb();

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public"); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use original filename for the uploaded file
  },
});

const upload = multer({ storage: storage }).single("avatar");

// export const POST = async (req) => {
//   try {
//     const data = await req.formData();
//     const name = data.get("name");
//     const title = data.get("title");
//     const description = data.get("description");
//     // const avatar = data.get("avatar");
//     // console.log({ name, title, description, avatar });
//     // if (!avatar) {
//     //   return NextResponse.json({ message: " Avatar not found " });
//     // }

//     // const byteData = await avatar.arrayBuffer();
//     // const buffer = Buffer.from(byteData);
//     // const path = `./public/images`;
//     // await writeFile(path, buffer);
//     // console.log(avatar.name);

//     // const avatarLocalPath = await data.get("avatar");
//     const avatarLocalPath = req.file ? req.file.path : null;
//     console.log(avatarLocalPath);
//     if (!avatarLocalPath) {
//       return NextResponse.json(
//         { error: " Avatar path is not found " },
//         { status: 404 }
//       );
//     }
//     console.log(avatarLocalPath.name);
//     const avatar = await uploadOnCloudinary(avatarLocalPath.name);
//     console.log(avatar, "avatar");

//     if (!avatar) {
//       return NextResponse.json(
//         { error: " Avatar not found......... " },
//         { status: 404 }
//       );
//     }

//     // const tea = new Tea({
//     //   name,
//     //   title,
//     //   description,
//     //   avatar: avatar.name,
//     // });

//     // await tea.save();
//     console.log("checking error");
//     return NextResponse.json(
//       { message: " Avatar added successfully " },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       { error, message: " somthing went wrong " },
//       { status: 500 }
//     );
//   }
// };

export const POST = async (req) => {
  try {
    const { name, title, description } = await req.json();
    const tea = new Tea({
      name,
      title,
      description,
      avatar: "https://source.unsplash.com/featured/?tea",
    });
    await tea.save();
    return NextResponse.json(
      {
        tea,
        message: "Tea added successfully !!",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
        message: "Not able to add tea",
        success: false,
      },
      {
        status: 500,
      }
    );
  }
};
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
