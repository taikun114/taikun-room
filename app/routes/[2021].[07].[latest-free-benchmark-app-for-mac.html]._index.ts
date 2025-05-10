import { redirect } from "react-router";
import { url, status } from "../__generated__/[2021].[07].[latest-free-benchmark-app-for-mac.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
