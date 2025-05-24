import { redirect } from "react-router";
import { url, status } from "../__generated__/[2021].[11].[oclp-with-big-sur-and-monterey-bugs-and-how-to-fix.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
