import { redirect } from "react-router";
import { url, status } from "../__generated__/[2019].[12].[mac-benchmark-software.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
