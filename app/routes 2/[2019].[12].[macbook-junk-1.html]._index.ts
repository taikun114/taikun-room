import { redirect } from "react-router";
import { url, status } from "../__generated__/[2019].[12].[macbook-junk-1.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
