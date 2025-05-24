import { redirect } from "react-router";
import { url, status } from "../__generated__/[2022].[10].[macos-ventura-with-oclp-bugs-and-how-to-fix.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
