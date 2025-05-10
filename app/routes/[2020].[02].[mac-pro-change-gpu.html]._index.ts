import { redirect } from "react-router";
import { url, status } from "../__generated__/[2020].[02].[mac-pro-change-gpu.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
