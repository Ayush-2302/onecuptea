import React from "react";
import { FaRegUser  } from "react-icons/fa6";

const Username = ({ params }) => {
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
            src="https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
            alt="profile"
          />
        </div>
        <div className=" flex justify-center  flex-col gap-2 items-center mt-24 my-10 ">
          <div className=" text-xl font-bold">{params.username}</div>
          <div className="text-slate-400">
            The beauty of tea lies in its ability to bring people together
          </div>
          <div className="text-slate-400">tikri,street-1,haryana</div>
        </div>
      </div>
      <div className="payment mx-auto mt-52  grid md:grid-cols-2 grid-cols-1 my-10 w-5/6  gap-4  ">
        <div className=" bg-slate-900 p-5  rounded-md  ">
          <h2 className="font-bold text-lg my-5">Supporters :-</h2>
          <ul className=" bottom-0 flex flex-col gap-3 mt-4 mx-5  ">
            <div className=" flex items-center gap-3 text-lg">
              <FaRegUser className=" animate-pulse" />
              <li>
                <span className=" font-semibold ">John Doe</span> - "Thanks for
                the support!"
              </li>
            </div>
            <div className=" flex items-center gap-3 text-lg">
              <FaRegUser className="animate-pulse" />
              <li>
                <span className=" font-semibold ">John Doe</span> - "Thanks for
                the support!"
              </li>
            </div>
            <div className=" flex items-center gap-3 text-lg">
              <FaRegUser className="animate-pulse" />
              <li>
                <span className=" font-semibold ">Jane Smith</span> - "You're
                the best!"
              </li>
            </div>
            <div className=" flex items-center gap-3 text-lg">
              <FaRegUser className="animate-pulse" />
              <li>
                <span className=" font-semibold ">Bob Johnson</span> - "Keep up
                the good work!"
              </li>
            </div>
            <div className=" flex items-center gap-3 text-lg">
              <FaRegUser className="animate-pulse" />
              <li>
                <span className=" font-semibold ">Alice Brown </span> - "Thanks
                for everything!"
              </li>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <FaRegUser className="animate-pulse" />
              <li>
                <span className=" font-semibold ">Mike Davis </span> - "You're
                amazing!"
              </li>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <FaRegUser className="animate-pulse" />
              <li>
                <span className=" font-semibold ">Emily Taylor </span> - "Thanks
                for the help!"
              </li>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <FaRegUser className="animate-pulse" />
              <li>
                <span className=" font-semibold ">Sarah Lee </span>- "You're the
                best!"
              </li>
            </div>
          </ul>
        </div>
        <div className=" bg-slate-900 p-5  rounded-md ">
          <h2 className="font-bold text-lg my-5">Payments :-</h2>
          <div className=" flex gap-2 flex-col items-center ">
            {/* input for name and message  */}
            <input
              id="name"
              type="text"
              class="appearance-none border bg-slate-800 rounded w-full py-2 p-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Name"
            />

            <textarea
              id="message"
              class="appearance-none border bg-slate-800 rounded w-full py-2 p-3 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              placeholder="Your message..."
            />

            <input
              type="text"
              className=" rounded-lg bg-slate-800 p-3 w-full"
              placeholder="Enter Amount"
            />
            <button
              type="button"
              className="text-white w-1/2  bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Pay{" "}
            </button>
          </div>

          <div className=" bottom-0 flex gap-3 mt-4 mx-5  ">
            <button className=" bg-slate-800 p-3 rounded-lg">Pay $10</button>
            <button className=" bg-slate-800 p-3 rounded-lg">Pay $10</button>
            <button className=" bg-slate-800 p-3 rounded-lg">Pay $10</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
