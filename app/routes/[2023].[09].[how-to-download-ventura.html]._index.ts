import { redirect } from "react-router";
import { url, status } from "../__generated__/[2023].[09].[how-to-download-ventura.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
