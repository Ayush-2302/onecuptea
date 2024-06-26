import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cookies } from "next/headers";
import TokenContextProvider from "@/utils/context/tokencontext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "One Cup Tea - chai lover",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className=" bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)]  text-white"
      >
        <TokenContextProvider>
          <SessionWrapper>
            <Navbar />
            <ToastContainer />
            <div className="min-h-screen  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)]  text-white">
              {children}
            </div>
            <Footer />
          </SessionWrapper>
        </TokenContextProvider>
      </body>
    </html>
  );
}
