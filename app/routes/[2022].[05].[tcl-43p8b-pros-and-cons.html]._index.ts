import { redirect } from "react-router";
import { url, status } from "../__generated__/[2022].[05].[tcl-43p8b-pros-and-cons.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
