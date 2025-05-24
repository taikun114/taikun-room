import { redirect } from "react-router";
import { url, status } from "../__generated__/[2020].[01].[nvidia-gpu-mac-pro-mojave.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
