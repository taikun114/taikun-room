import { redirect } from "react-router";
import { url, status } from "../__generated__/[2020].[11].[macbook-air-m1-2020-1.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
