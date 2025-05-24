import { redirect } from "react-router";
import { url, status } from "../__generated__/[2020].[02].[mba-2009-os.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
