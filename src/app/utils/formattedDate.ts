export default function formattedDate(time: string | number | Date): string {
    return new Date(time).toLocaleDateString("hu-HU", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }