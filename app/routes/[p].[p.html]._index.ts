import { redirect } from "react-router";
import { url, status } from "../__generated__/[p].[p.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
