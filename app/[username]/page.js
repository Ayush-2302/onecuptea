"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, {  useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa6";

const Username = ({ params }) => {
  const { data: session } = useSession();


  const route = useRouter();

  if (!session) {
    route.push("/login");
    console.log("hello baby");
  }

  const [pay, setPay] = useState({
    name: "",
    message: "",
    amount: "",
  });
  const initalaData = [];
  const [data, setData] = useState(initalaData);

  const onChange = (e) => {
    setPay({ ...pay, [e.target.name]: e.target.value });
    console.log(pay);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/payment`, pay);
      setPay({
        name: "",
        message: "",
        amount: "",
      });
      fetchPayment();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPayment = async () => {
    try {
      const response = await axios.get(`/api/payment`);
      setData(response.data.payment);
      // console.log(response.data.payment);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPayment();
  }, []);

  return (
    <>
      <div className=" h-[400px] w-full object-cover relative ">
        <img
          className=" h-[400px] w-full object-cover object-center"
          src="tealove.avif"
          alt="teacover"
        />

        <div className=" absolute md:left-[45%] left-[42%] -bottom-20 border-2 rounded-full">
          <img
            className="rounded-full w-[150px] h-[150px] object-cover object-top"
            src={
              session
                ? session.user.image
                : "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
            }
            alt="profile"
          />
        </div>
        <div className=" flex justify-center  capitalize flex-col gap-2 items-center mt-24 my-10 ">
          <div className="  text-xl font-bold">
            {session ? session.user.name : params.username}
            {/* {params.username} */}
          </div>
          <div className="text-slate-400">
            The beauty of tea lies in its ability to bring people together
          </div>
          <div className="text-slate-400">tikri,street-1,haryana</div>
        </div>
      </div>
      <div className="payment mx-auto mt-52  grid md:grid-cols-2 grid-cols-1 my-10 w-5/6  gap-4  ">
        <div className=" bg-slate-900 p-5 overflow-y-auto  rounded-lg h-[430px]  ">
          <h2 className="font-bold text-lg my-5">Supporters :-</h2>
          <ul className=" bottom-0 flex flex-col gap-3 mt-4 mx-5  ">
            {data.length > 0 ? (
              data
                .sort((a, b) => b.createAt.localeCompare(a.createAt))
                .map((ele) => (
                  <div
                    key={ele._id}
                    className=" flex items-center gap-4 text-lg"
                  >
                    <FaRegUser className=" animate-pulse text-2xl" />
                    <li className="  font-semibold capitalize ">
                      <span>{ele.name}</span> - Donated ${ele.amount} -
                      {ele.message} !
                    </li>
                  </div>
                ))
            ) : (
              <div className=" text-lg font-semibold">No data to display</div>
            )}
          </ul>
        </div>
        <div className=" bg-slate-900 px-5 py-2  rounded-lg   h-[430px]">
          <h2 className="font-bold text-lg mt-2">Payments :-</h2>
          <div className=" flex gap-2  flex-col items-center ">
            <div>
              <img src="QR.jpg" className="w-28 h-28" alt="" />
            </div>
            {/* input for name and message  */}
            <form className=" flex flex-col w-full items-center gap-3">
              <input
                name="name"
                type="text"
                value={pay.name}
                onChange={onChange}
                className="appearance-none border bg-slate-800 rounded w-full py-2 p-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Name"
                required
              />

              <textarea
                name="message"
                onChange={onChange}
                value={pay.message}
                className="appearance-none border bg-slate-800 rounded w-full py-2 p-3 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
                placeholder="Your message..."
                required
              />

              <input
                type="text"
                onChange={onChange}
                value={pay.amount}
                name="amount"
                className=" rounded-lg bg-slate-800 p-3 w-full"
                placeholder="Enter Amount"
                required
              />
              <button
                onClick={onSubmit}
                type="submit"
                className="text-white w-1/2  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Pay
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
