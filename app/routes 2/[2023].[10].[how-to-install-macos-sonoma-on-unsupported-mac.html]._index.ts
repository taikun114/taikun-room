import { redirect } from "react-router";
import { url, status } from "../__generated__/[2023].[10].[how-to-install-macos-sonoma-on-unsupported-mac.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
