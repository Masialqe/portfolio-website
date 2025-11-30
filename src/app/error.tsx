"use client";
import { redirect } from "next/navigation";

//Redirect all errors to custom page
const Error = () => {
  redirect("/error");
};

export default Error;
