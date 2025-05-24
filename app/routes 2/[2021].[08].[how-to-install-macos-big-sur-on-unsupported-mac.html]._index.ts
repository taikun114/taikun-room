import { redirect } from "react-router";
import { url, status } from "../__generated__/[2021].[08].[how-to-install-macos-big-sur-on-unsupported-mac.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
