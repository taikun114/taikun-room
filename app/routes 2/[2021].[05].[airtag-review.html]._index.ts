import { redirect } from "react-router";
import { url, status } from "../__generated__/[2021].[05].[airtag-review.html]._index";

export const loader = () => {
  throw redirect(url, status);
};
