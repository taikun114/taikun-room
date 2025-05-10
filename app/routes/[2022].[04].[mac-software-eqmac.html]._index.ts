import { redirect } from "react-router";
import { url, status } from "../__generated__/[2022].[04].[mac-software-eqmac.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
