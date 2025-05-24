import { redirect } from "react-router";
import { url, status } from "../__generated__/[2022].[02].[best-web-browser-brave.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
