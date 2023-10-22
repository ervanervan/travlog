import categories1 from "./assets/icon-categories1.svg";
import categories2 from "./assets/icon-categories2.svg";
import categories3 from "./assets/icon-categories3.svg";

import destination1 from "./assets/image-destination1.png";
import destination2 from "./assets/image-destination2.png";
import destination3 from "./assets/image-destination3.png";
import icon from "./assets/icon-star.svg";

export const DATA_CATEGORIES = [
  {
    id: 1,
    title: "Best Tour Guide",
    desc: "What looked like a small patch of purple grass, above five feet.",
    imgUrl: categories1,
  },
  {
    id: 2,
    title: "Easy Booking",
    desc: "Square, was moving across the sand in their direction.",
    imgUrl: categories2,
  },
  {
    id: 3,
    title: "Weather Forecast",
    desc: "What looked like a small patch of purple grass, above five feet.",
    imgUrl: categories3,
  },
];

export const DATA_DESTINATIONS = [
  {
    id: 1,
    imgUrl: destination1,
    title: "Paradise Beach, Bantayan Island",
    location: "Rome, Italy",
    price: "$550.16",
    rating: "4.8",
    icon: icon,
  },
  {
    id: 2,
    imgUrl: destination2,
    title: "Ocean with full of Colors",
    location: "Maldives",
    price: "$20.99",
    rating: "4.5",
    icon: icon,
  },
  {
    id: 3,
    imgUrl: destination3,
    title: "Mountain View, Above the cloud",
    location: "United Arab Emeries ",
    price: "$150.99",
    rating: "5.0",
    icon: icon,
  },
];
