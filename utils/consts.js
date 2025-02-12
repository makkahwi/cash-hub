import dbData from "@/api/db.json";

export const continents = dbData.continents.map(({ name }) => name); // ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export const photoPlaceholder =
  "https://t3.ftcdn.net/jpg/02/73/18/48/360_F_273184815_uOmhKYLSlx3hQWNsGciu1EfbKrf7g5bQ.jpg";
