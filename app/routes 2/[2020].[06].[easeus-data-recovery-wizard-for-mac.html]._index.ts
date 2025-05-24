import { redirect } from "react-router";
import { url, status } from "../__generated__/[2020].[06].[easeus-data-recovery-wizard-for-mac.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
