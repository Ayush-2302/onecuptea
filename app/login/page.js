"use client";
import React, { useState } from "react";
import {
  FaApple,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { login } from "@/utils/service/userService";
import { toast } from "react-toastify";

const page = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(credential);
      const name = response.data.user.name;

      setCredential({
        email: "",
        password: "",
      });
      toast.success("Login successfully !!", {
        autoClose: 3000,
        theme: "dark",
      });

      router.push(`/${name}`);
    } catch (error) {
      console.log(error);
      toast.error("Login failed !!", {
        autoClose: 2000,
        theme: "dark",
      });
    }
  };

  if (session) {
    router.push("/");
  }

  return (
    <div className=" container mx-auto flex  flex-col items-center">
      <h1 className=" text-2xl mt-10 font-semibold ">
        Unlock a world of possibilities - Login or sign up now!
      </h1>
      {/* <div>
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
      </div> */}

      <form onSubmit={handleLogin} className="w-1/2 mx-auto  p-4 mt-20">
        <div className="relative z-0 w-full mb-8 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={onChange}
            value={credential.email}
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-8 group">
          <input
            type="password"
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            onChange={onChange}
            value={credential.password}
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>

        <div className=" flex flex-col items-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
      <div>
        <button
          onClick={() => {
            signIn("github");
          }}
          className="w-full bg-gray-800 text-white font-semibold rounded-md  py-2 px-4 flex items-center   gap-2 mb-4 hover:bg-gray-900 focus:outline-none focus:bg-gray-900 transition duration-300"
        >
          <FaGithub className=" text-2xl " />
          Continue with GitHub
        </button>
      </div>
    </div>
  );
};

export default page;
