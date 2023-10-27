import categories1 from "./assets/icon-categories1.svg";
import categories2 from "./assets/icon-categories2.svg";
import categories3 from "./assets/icon-categories3.svg";

import destination1 from "./assets/image-destination1.png";
import destination2 from "./assets/image-destination2.png";
import destination3 from "./assets/image-destination3.png";
import icon from "./assets/icon-star.svg";

import iconfeature1 from "./assets/icon-location.svg";
import iconfeature2 from "./assets/icon-calendar.svg";
import iconfeature3 from "./assets/icon-discount.svg";
import iconTestimonial from "./assets/icon-starTestimonial.svg";
import userTestimonial from "./assets/user-testimonial.png";

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
  {
    id: 4,
    imgUrl: destination1,
    title: "Paradise Beach, Bantayan Island",
    location: "Rome, Italy",
    price: "$550.16",
    rating: "4.8",
    icon: icon,
  },
  {
    id: 5,
    imgUrl: destination2,
    title: "Ocean with full of Colors",
    location: "Maldives",
    price: "$20.99",
    rating: "4.5",
    icon: icon,
  },
  {
    id: 6,
    imgUrl: destination3,
    title: "Mountain View, Above the cloud",
    location: "United Arab Emeries ",
    price: "$150.99",
    rating: "5.0",
    icon: icon,
  },
];

export const DATA_TRAVELPOINT = [
  {
    id: 1,
    category: "Holiday Package",
    total: "500+",
  },
  {
    id: 2,
    category: "Luxury Hotel",
    total: "100",
  },
  {
    id: 3,
    category: "Premium Airlines",
    total: "7",
  },
  {
    id: 4,
    category: "Happy Customer",
    total: "2k+",
  },
];

export const DATA_FEATURES = [
  {
    id: 1,
    title: "We offer best services",
    desc: "Lorem Ipsum is not simply random text",
    iconfeature: iconfeature1,
    color: "#FF5722",
  },
  {
    id: 2,
    title: "Schedule your trip",
    desc: "It has roots in a piece of classical",
    iconfeature: iconfeature2,
    color: "#FACD49",
    border: true,
  },
  {
    id: 3,
    title: "Get discounted coupons",
    desc: "Lorem Ipsum is not simply random text",
    iconfeature: iconfeature3,
    color: "#F85E9F",
  },
];

export const DATA_TESTIMONIALS = [
  {
    id: 1,
    name: "Mark",
    work: "Travel Enthusiast",
    iconTestimonial: iconTestimonial,
    testimonial:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    imgUrl: userTestimonial,
  },
  {
    id: 2,
    name: "Ervan",
    work: "Travel Enthusiast",
    iconTestimonial: iconTestimonial,
    testimonial:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    imgUrl: destination1,
  },
  {
    id: 3,
    name: "Smith",
    work: "Travel Enthusiast",
    iconTestimonial: iconTestimonial,
    testimonial:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    imgUrl: destination2,
  },
];
