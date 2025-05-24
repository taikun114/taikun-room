import { redirect } from "react-router";
import { url, status } from "../__generated__/[2020].[07].[catalina-patcher-with-no-usb.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
