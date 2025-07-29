import dbData from "@/api/db.json";

export const continents = dbData.continents.map(({ name }) => name); // ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export const photoPlaceholder =
  "https://t3.ftcdn.net/jpg/02/73/18/48/360_F_273184815_uOmhKYLSlx3hQWNsGciu1EfbKrf7g5bQ.jpg";

export const links =
  process.client && JSON.parse(localStorage.getItem("user"))?.idToken
    ? [
        { to: "/", title: "Home" },
        { to: "/showroom", title: "Your Showroom" },
        { to: "/dashboard", title: "Your Dashboard" },
      ]
    : [
        { to: "/", title: "Home" },
        { to: "/showroom", title: "Showroom" },
        { to: "/get-your-showroom", title: "Get Your Showroom" },
      ];

export const socialMediaLinks = [
  { link: "https://Suhaib.dev", icon: "fas fa-globe" },
  {
    link: "https://www.linkedin.com/in/SuhaibAhmadAi",
    icon: "fab fa-linkedin",
  },
  { link: "https://www.github.com/makkahwi", icon: "fab fa-github" },
  { link: "https://www.facebook.com/makkahwi", icon: "fab fa-facebook" },
  { link: "https://www.instagram.com/makkahwi", icon: "fab fa-instagram" },
  { link: "https://wasap.my/962788424973", icon: "fab fa-whatsapp" },
  { link: "mailto:SuhaibAhmadAi@hotmail.com", icon: "fa fa-envelope" },
  { link: "tel:+962788424973", icon: "fas fa-phone" },
];

export const productName = {
  full: "Currencies Archiving & Sharing Hub",
  short: "CASH",
};

export const statuses = [
  { value: true, label: "Current" },
  { value: false, label: "Discontinued" },
];
