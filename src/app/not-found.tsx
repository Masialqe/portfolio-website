import { redirect } from "next/navigation";

//Redirect all not found pages to custom error page
const NotFound = () => {
  redirect("/error");
};

export default NotFound;
