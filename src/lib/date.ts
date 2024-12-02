const MESES: { [key: number]: string } = {
  0: "Ene",
  1: "Feb",
  2: "Mar",
  3: "Abr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Ago",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dic",
};

const MONTHS: { [key: number]: string } = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

export const getMonthLabel = (month: number, lang: "en" | "es") =>
  lang === "en" ? MONTHS[month] : MESES[month];
