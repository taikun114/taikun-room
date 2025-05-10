import { redirect } from "react-router";
import { url, status } from "../__generated__/[2021].[12].[flexclip-pros-and-cons.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
