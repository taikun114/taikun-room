import { redirect } from "react-router";
import { url, status } from "../__generated__/[2020].[09].[mac-software-mos.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
