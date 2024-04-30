"use client";
import Link from "next/link";
import React from "react";
import { MdEmail } from "react-icons/md";
import {
  FaApple,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

const Login = () => {
  const { data: session } = useSession();
  if (session) {
    redirect("/dashboard")
  }
 
  const handleSignin = () => {
    try {
      console.log("hello");
      signIn("gitHub");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" container mx-auto flex justify-center  flex-col items-center">
      <h1 className=" text-2xl mt-10 font-semibold ">
        Unlock a world of possibilities - Login or sign up now!
      </h1>
      <form className=" my-10">
        <button className="w-full bg-blue-500 text-white font-semibold rounded-md py-2   px-4 mb-4 hover:bg-blue-600 focus:outline-none flex items-center gap-2 focus:bg-blue-600 transition duration-300">
          <MdEmail className=" text-2xl" />
          Continue with Email
        </button>

        <div onClick={handleSignin}>
          <button className="w-full bg-gray-800 text-white font-semibold rounded-md  py-2 px-4 flex items-center   gap-2 mb-4 hover:bg-gray-900 focus:outline-none focus:bg-gray-900 transition duration-300">
            <FaGithub className=" text-2xl " />
            Continue with GitHub
          </button>
        </div>

        <Link href="#">
          <button className="w-full bg-gray-800 text-white font-semibold rounded-md  py-2 px-4 flex items-center   gap-2 mb-4 hover:bg-gray-900 focus:outline-none focus:bg-gray-900 transition duration-300">
            <FaFacebook className=" text-2xl " />
            Continue with Facebook
          </button>
        </Link>
        <Link href="#">
          <button className="w-full bg-gray-800 text-white font-semibold rounded-md  py-2 px-4 flex items-center   gap-2 mb-4 hover:bg-gray-900 focus:outline-none focus:bg-gray-900 transition duration-300">
            <FaTwitter className=" text-2xl " />
            Continue with Twitter
          </button>
        </Link>
        <Link href="#">
          <button className="w-full bg-gray-800 text-white font-semibold rounded-md  py-2 px-4 flex items-center   gap-2 mb-4 hover:bg-gray-900 focus:outline-none focus:bg-gray-900 transition duration-300">
            <FaLinkedin className=" text-2xl " />
            Continue with Linkdin
          </button>
        </Link>
        <Link href="#">
          <button className="w-full bg-gray-800 text-white font-semibold rounded-md  py-2 px-4 flex items-center   gap-2 mb-4 hover:bg-gray-900 focus:outline-none focus:bg-gray-900 transition duration-300">
            <FaApple className=" text-2xl " />
            Continue with Apple
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
