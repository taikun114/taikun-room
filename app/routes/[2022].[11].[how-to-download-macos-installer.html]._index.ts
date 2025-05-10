import { redirect } from "react-router";
import { url, status } from "../__generated__/[2022].[11].[how-to-download-macos-installer.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
