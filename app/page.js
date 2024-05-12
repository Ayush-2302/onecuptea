import Image from "next/image";
import Link from "next/link";
import { GiCoffeeCup } from "react-icons/gi";

export default function Home() {
  return (
    <>
      <div className=" cover h-[44vh]  flex justify-center items-center gap-5 flex-col text-center">
        <h1 className=" flex items-center gap-4 text-3xl">
          Enjoy Your Tea 
          <span className=" text-5xl animate-bounce ">
            <GiCoffeeCup />
          </span>
        </h1>
        <p className=" w-8/12 text-lg mx-auto">
          Each sip unveils a world of flavors, from the delicate blooms of
          Darjeeling to the cozy spices of chai, each cup a journey of
          tranquility and discovery.
        </p>
        <div className="flex">
          <Link href="/addmemories">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Start Now
            </button>
          </Link>
          <Link href="https://en.wikipedia.org/wiki/Tea">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Read more
            </button>
          </Link>
        </div>
      </div>
      <hr className=" opacity-5 shadow-lg" />

      <div className=" flex flex-col py-10 justify-center items-center ">
        <h2 className="text-2xl font-bold"> Its Not About the Money !</h2>
        <p className="w-7/12 text-center">
          Ultimately, convey that it's not about the monetary value of the tea
          bill, but about the gesture and the camaraderie it fosters among
          everyone present.
        </p>
        <div className="flex my-10 p-4 items-center justify-evenly container">
          <div className="  flex flex-col items-center justify-center gap-2">
            <Image
              className="w-[8vw] h-[8vw] rounded-full"
              src="pay.svg"
              alt="funding"
            />
            <p className=" font-bold">Building Relationships</p>
          </div>
          <div className="  flex flex-col items-center justify-center gap-2">
            <Image
              className="w-[8vw] h-[8vw] rounded-full"
              src="pay1.svg"
              alt="funding"
            />
            <p className=" font-bold">Supporting Community</p>
          </div>
          <div className="  flex flex-col items-center justify-center gap-2">
            <Image
              className="w-[8vw] h-[8vw] rounded-full"
              src="pay2.svg"
              alt="funding"
            />
            <p className=" font-bold">Ease of Splitting Bills</p>
          </div>
        </div>
      </div>
      <hr className=" opacity-5 shadow-lg" />

      <div className=" flex flex-col py-10 justify-center items-center ">
        <h2 className="text-2xl font-bold"> Learn more !</h2>
        <p className="w-7/12 text-center">
          Tea cultivation is intimately connected to nature, with tea plants
          thriving in specific climates and environments.
        </p>
        <div className=" my-10 flex  container justify-center flex-wrap items-center gap-4 ">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Kv1vQyrEOyA?si=OWdrb0NsAiVn1HGa"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1hYrPBt_sQM?si=wxih5c6NiK3Kp8Dv"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </>
  );
}
