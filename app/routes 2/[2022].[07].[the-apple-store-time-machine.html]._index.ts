import { redirect } from "react-router";
import { url, status } from "../__generated__/[2022].[07].[the-apple-store-time-machine.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
