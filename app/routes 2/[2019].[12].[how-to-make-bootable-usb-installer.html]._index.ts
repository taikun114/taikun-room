import { redirect } from "react-router";
import { url, status } from "../__generated__/[2019].[12].[how-to-make-bootable-usb-installer.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
