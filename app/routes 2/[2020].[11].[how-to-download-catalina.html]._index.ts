import { redirect } from "react-router";
import { url, status } from "../__generated__/[2020].[11].[how-to-download-catalina.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
