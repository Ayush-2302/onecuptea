import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: "dzyf83dzu",
  api_key: "399542719614922",
  api_secret: "qlku--3njYzuBgNcwiKp9FwxFOY",
});

// cloudinary.config({
//   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
//   api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
// });

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload the file on cloudinary

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // console.log("file is uploaded on cloudinary", response.url);
    // fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.log(error);
    // removing the locally saved temp file as the upload operation got faied
    // fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };