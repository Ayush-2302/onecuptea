"use client"
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
const Dashboard = () => {
  const { data: session } = useSession();
  if (!session) {
    redirect("/login");
  }
  return (<div></div>);
};

export default Dashboard;
