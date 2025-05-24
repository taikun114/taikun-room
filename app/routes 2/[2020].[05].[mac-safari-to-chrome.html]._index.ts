import { redirect } from "react-router";
import { url, status } from "../__generated__/[2020].[05].[mac-safari-to-chrome.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
