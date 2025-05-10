import { redirect } from "react-router";
import { url, status } from "../__generated__/[2022].[09].[cpu-gpu-temp-check-from-menu-bar-vitalsigns.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
