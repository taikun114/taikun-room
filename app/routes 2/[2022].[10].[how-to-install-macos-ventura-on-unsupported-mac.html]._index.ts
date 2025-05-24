import { redirect } from "react-router";
import { url, status } from "../__generated__/[2022].[10].[how-to-install-macos-ventura-on-unsupported-mac.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
