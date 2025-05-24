import { redirect } from "react-router";
import { url, status } from "../__generated__/[2020].[04].[imac-2011-junk-os-1.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
