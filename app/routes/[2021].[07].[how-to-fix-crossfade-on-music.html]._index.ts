import { redirect } from "react-router";
import { url, status } from "../__generated__/[2021].[07].[how-to-fix-crossfade-on-music.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
