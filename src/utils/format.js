import moment from "moment";
import { TIME_DISPLAY } from "@/constants/format-date";
import { CURRENCY_TYPE } from "@/constants/format-currency";

export const formatDate = (date, format = TIME_DISPLAY.DATE) => {
  if (!!!date) return "";
  return moment(date).format(format);
};

export const formatCurrency = (data, type = CURRENCY_TYPE.VN) => {
  if (!!!data) return 0;
  return data.toLocaleString(type);
};
