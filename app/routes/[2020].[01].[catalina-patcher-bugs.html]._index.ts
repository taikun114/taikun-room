import { redirect } from "react-router";
import { url, status } from "../__generated__/[2020].[01].[catalina-patcher-bugs.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
