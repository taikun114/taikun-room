import { redirect } from "react-router";
import { url, status } from "../__generated__/[2021].[10].[history-of-iphone-and-differences.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
