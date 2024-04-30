"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiCoffeeCup } from "react-icons/gi";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <nav className=" items-center z-10 flex sticky top-0  justify-between px-5 h-16 bg-gray-950 text-white ">
      <Link href="/">
        <div className="logo text-lg font-semibold flex gap-3  items-center">
          <span className=" animate-pulse text-4xl">
            <GiCoffeeCup />
          </span>
          Chai Lover
        </div>
      </Link>

      <div>
        {session ? (
          <div className=" flex items-center gap-4">
            <div className=" relative">
              <button
                onClick={handleDropDown}
                onBlur={() =>
                  setTimeout(() => {
                    setDropDown(false);
                  }, 100)
                }
                type="button"
                className=" flex z-50 items-center justify-center bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Welcome {session.user.email}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* dropdownmanu */}
              <div
                className={` ${
                  dropDown ? "" : "hidden"
                }  z-10  bg-white divide-y absolute left-40  divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Your Page
                    </Link>
                  </li>

                  <li onClick={() => signOut()}>
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

            {/* <button
              onClick={() => {
                signOut();
              }}
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Logout
            </button> */}
          </div>
        ) : (
          <Link href={"/login"}>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
