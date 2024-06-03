"use client";
import { addedMemories } from "@/utils/service/teaService";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GiCoffeeCup } from "react-icons/gi";

const ViewMemories = () => {
  const { data: session } = useSession();

  const route = useRouter();

  const initial = [];
  const [memories, setMemories] = useState(initial);

  const fetchMemories = async () => {
    const response = await addedMemories();
    setMemories(response.data.user);
    console.log(response.data.user, " response");
  };

  if (!session) {
    // route.push("/login");
  }

  useEffect(() => {
    fetchMemories();
  }, []);

  return (
    <>
      <h1 className=" text-3xl font-semibold md:w-1/2 mx-auto text-center py-10 flex flex-col items-center gap-2 ">
        Sip by Sip: Reliving Memories Through the Aroma of Tea - A Tea Lovers
        Reflection
        <span className="\ animate-pulse text-6xl ">
          <GiCoffeeCup />
        </span>
      </h1>
      <div className="  grid grid-cols-3 gap-4 py-10 p-5">
        {memories &&
          memories.map((ele) => (
            <div key={ele._id} className="  bg-gray-900 rounded-lg shadow-md ">
              <img
                src={ele.avatar}
                alt={ele.title}
                className="mb-4 h-[300px] w-full object-cover object-center  rounded-lg"
              />
              <div className=" px-4 py-2 capitalize">
                <h3 className="text-2xl  font-semibold mb-2">{ele.name}</h3>
                <h3 className="text-xl font-semibold mb-2">{ele.title}</h3>
                <p className="text-gray-500 mb-4">{ele.description}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ViewMemories;
