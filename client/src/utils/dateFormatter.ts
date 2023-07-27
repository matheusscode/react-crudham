import { format } from "date-fns";

export const convertDateTime = (dateTimeString: string): string => {
  const dateTime = new Date(dateTimeString);

  const formattedDateTime = format(dateTime, "dd/MM/yyyy HH:mm");

  return formattedDateTime;
};
