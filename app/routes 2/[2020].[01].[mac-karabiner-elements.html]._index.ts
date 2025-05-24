import { redirect } from "react-router";
import { url, status } from "../__generated__/[2020].[01].[mac-karabiner-elements.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
