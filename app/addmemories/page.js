"use client";
import React, { useContext, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { addMemories } from "@/utils/service/teaService";
import { toast } from "react-toastify";
import { GiCoffeeCup } from "react-icons/gi";
import { TokenCont } from "@/utils/context/tokencontext";
const Addmemories = () => {
  const { data: session } = useSession();
  const { userData } = useContext(TokenCont);

  const router = useRouter();
  if (!session && !userData) {
    router.push("/login");
  }
  // State to manage form inputs
  const [credentials, setCredentials] = useState({
    name: "",
    title: "",
    description: "",
    avtar: "",
  });

  // Handle form input changes
  const onChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addMemories(credentials);
      setCredentials({
        name: "",
        title: "",
        description: "",
        avtar: "",
      });
      if (response.status === 200) {
        return toast.success("Memories added successfully", {
          theme: "dark",
          delay: 2000,
        });
      }
    } catch (error) {
      return toast.error(error.message, {
        theme: "dark",
        delay: 2000,
      });
    }
  };

  return (
    <div className="md:w-1/2 w-11/12  mx-auto mt-8">
      <h1 className=" text-3xl font-semibold text-center py-10 flex flex-col items-center gap-2 ">
        Savoring Serenity: Crafting Memories, One Sip at a Time - A Tea Lovers
        Chronicle
        <span className="\ animate-pulse text-6xl ">
          <GiCoffeeCup />
        </span>
      </h1>
      {session || userData ? (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 flex flex-col items-center shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-800 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder=" Name"
              value={credentials.name}
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-800 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              name="title"
              type="title"
              placeholder="Title "
              value={credentials.title}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-6 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-800 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              rows={5}
              placeholder="Description"
              value={credentials.description}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-6 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="avtar"
            >
              Add Your Picture
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-slate-800 leading-tight focus:outline-none focus:shadow-outline"
              id="avtar"
              name="avtar"
              type="file"
              placeholder=" Choose Avtar "
              value={credentials.avtar}
              onChange={onChange}
              required
            />
          </div>
          <div className=" w-full flex justify-center">
            <button
              type="submit"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        "Page Not Found"
      )}
    </div>
  );
};

export default Addmemories;
