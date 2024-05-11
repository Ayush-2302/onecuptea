"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiCoffeeCup } from "react-icons/gi";
import { useSession, signIn, signOut } from "next-auth/react";
import { logout } from "@/utils/service/userService";
import { toast } from "react-toastify";

const Navbar = () => {
  const { data: session } = useSession();
  const [dropDown, setDropDown] = useState(false);

  const authToken = localStorage.getItem("token");

  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
    await signOut();
    localStorage.removeItem("token");
    setDropDown(!dropDown);
    toast.warning("Signout successfully !!", {
      theme: "dark",
    });
  };

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <nav className=" items-center z-10 flex sticky top-0  justify-between px-5 h-16 bg-gray-950 text-white ">
      <Link href="/">
        <div className="logo text-lg font-semibold flex gap-3  items-center">
          <span className=" animate-pulse text-4xl ">
            <GiCoffeeCup />
          </span>
          Chai Lover
        </div>
      </Link>

      <div>
        {session ||
          (authToken && (
            <div className=" flex items-center gap-4">
              <div className=" relative">
                <button
                  // onBlur={() =>
                  //   setTimeout(() => {
                  //     setDropDown(false);
                  //   }, 100)
                  // }
                  onClick={handleDropDown}
                  type="button"
                  className="flex z-50 items-center justify-center bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  {/* Welcome {session.user.name} */}
                  Welcome To One Cup CHAI
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  className={` ${
                    dropDown ? "" : "hidden"
                  }  z-50  bg-white divide-y absolute left-[44px]  divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li onClick={handleDropDown}>
                      <Link
                        href="/addmemories"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Add memories
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/viewmemories"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Memories
                      </Link>
                    </li>
                    <li onClick={handleDropDown}>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Your Page
                      </Link>
                    </li>

                    <li onClick={handleLogout}>
                      <Link
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}

        {!session ||
          (!authToken && (
            <div className="flex items-center">
              <Link href={"/login"}>
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Login
                </button>
              </Link>
              <Link href={"/signup"}>
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Signup
                </button>
              </Link>
            </div>
          ))}
      </div>
    </nav>
  );
};

export default Navbar;
