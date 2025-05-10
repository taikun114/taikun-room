import { redirect } from "react-router";
import { url, status } from "../__generated__/[2020].[01].[mbp-2008-os.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
