export default function formattedDate(time: string | number | Date): string {
  const formatter = new Intl.DateTimeFormat("hu-HU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return formatter.format(new Date(time));
}