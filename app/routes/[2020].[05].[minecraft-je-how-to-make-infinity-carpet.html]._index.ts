import { redirect } from "react-router";
import { url, status } from "../__generated__/[2020].[05].[minecraft-je-how-to-make-infinity-carpet.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
