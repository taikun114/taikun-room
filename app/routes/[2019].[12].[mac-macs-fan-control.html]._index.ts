import { redirect } from "react-router";
import { url, status } from "../__generated__/[2019].[12].[mac-macs-fan-control.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
