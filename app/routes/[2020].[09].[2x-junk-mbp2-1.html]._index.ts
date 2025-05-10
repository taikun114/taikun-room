import { redirect } from "react-router";
import { url, status } from "../__generated__/[2020].[09].[2x-junk-mbp2-1.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
