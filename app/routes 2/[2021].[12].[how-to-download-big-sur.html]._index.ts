import { redirect } from "react-router";
import { url, status } from "../__generated__/[2021].[12].[how-to-download-big-sur.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
