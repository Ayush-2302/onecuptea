"use client";
import { addedMemories } from "@/utils/service/teaService";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const route = useRouter();
  const initial = [];
  const [memories, setMemories] = useState(initial);
  const fetchMemories = async () => {
    const response = await addedMemories();
    setMemories(response.data.user);
    console.log(response.data.user, " response");
  };

  const authToken = localStorage.getItem("token");
  if (!authToken) {
    route.push("/login");
  }

  useEffect(() => {
    fetchMemories();
  }, []);
  return (
    <div className="  grid grid-cols-3 gap-4 py-10 p-5">
      {memories &&
        memories.map((ele) => (
          <div key={ele._id} className="  bg-gray-900 rounded-lg shadow-md ">
            <img
              src={ele.avatar}
              alt={ele.title}
              className="mb-4 h-[375px] w-full object-cover  rounded-lg"
            />
            <div className=" px-4 py-2 capitalize">
              <h3 className="text-2xl  font-semibold mb-2">{ele.name}</h3>
              <h3 className="text-xl font-semibold mb-2">{ele.title}</h3>
              <p className="text-gray-500 mb-4">{ele.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default page;
