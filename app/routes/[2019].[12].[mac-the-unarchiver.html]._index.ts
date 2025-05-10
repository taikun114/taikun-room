import { redirect } from "react-router";
import { url, status } from "../__generated__/[2019].[12].[mac-the-unarchiver.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
