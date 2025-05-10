import { redirect } from "react-router";
import { url, status } from "../__generated__/[2020].[08].[imac-2020-2.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
