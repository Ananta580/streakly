export const secondsToFormat = (value: number): string => {
  if (value <= 0) {
    return "N/A";
  }

  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value % 3600) / 60);
  const seconds = value % 60;

  let formattedTime = "";

  const parts: string[] = [];
  if (hours) parts.push(`${hours} ${hours === 1 ? "hour" : "hours"}`);
  if (minutes) parts.push(`${minutes} ${minutes === 1 ? "minute" : "minutes"}`);
  if (seconds) parts.push(`${seconds} ${seconds === 1 ? "second" : "seconds"}`);

  formattedTime = parts.join(", ");

  return formattedTime;
};
