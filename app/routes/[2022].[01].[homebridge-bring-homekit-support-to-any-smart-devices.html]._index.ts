import { redirect } from "react-router";
import { url, status } from "../__generated__/[2022].[01].[homebridge-bring-homekit-support-to-any-smart-devices.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
