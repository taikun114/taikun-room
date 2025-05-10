import { redirect } from "react-router";
import { url, status } from "../__generated__/[2022].[03].[nanoleaf-essentials-a19-bulb-review.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
