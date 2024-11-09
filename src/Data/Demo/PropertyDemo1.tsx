import { Building, Location, SearchNormal1, Wallet } from "iconsax-react";
import { Autoplay, EffectFade } from "swiper/modules";
import { NavType } from "../../Types/HomeDemo";

export const PropertyHomeSliderSetting = {
  effect: "fade",
  modules: [EffectFade, Autoplay],
  freeMode: true,
  speed: 2000,
  autoplay: { delay: 1500, disableOnInteraction: false },
  loop: true,
};

export const AboutContent = "Discover the appropriate property that is most acceptable for you, ranging from houses for purpose that are minimalist to premium apartments for sale and rent with the greatest staff of our organization.";

export const AboutListData = ["45k partner has worked with us", "Professional & experienced humans resource", "Provide the best service for users", "We have more than 10 years of experience"];

export const ServicesData = [
  {
    title: "Sell Spaces",
    description: "We sell your space at the greatest market value and in a timely manner.",
  },
  {
    title: "Free Marketing",
    description: "We promote on many internet platforms to find the greatest real estate for you.",
  },
  {
    title: "Rent Spaces",
    description: "We provide free consultation to help you find a tenant for your new house.",
  },
  {
    title: "Free Evaluation",
    description: "We provide a free examination to ensure that you wish to begin selling.",
  },
  {
    title: "Tenant Services",
    description: "Provide dispute resolution services, such as coordinating the Tenancy Tribunal.",
  },
  {
    title: "Buy Spaces",
    description: "We assist you in purchasing your ideal home for you and your family at the best possible price.",
  },
];

export const OurServiceContent = "We offer the best services to help you obtain your ideal home or free apartment.";

export const ServiceList = ["24*7 hour support", "Skilled & professional workers"];

export const DiscoverySliderData = [
  { img: "1.jpg", location: "America", sale: 200, rent: 324 },
  { img: "2.jpg", location: "London", sale: 100, rent: 628 },
  { img: "3.jpg", location: "Africa", sale: 560, rent: 508 },
  { img: "4.jpg", location: "Canada", sale: 351, rent: 324 },
  { img: "5.jpg", location: "Toronto", sale: 700, rent: 824 },
  { img: "1.jpg", location: "America", sale: 200, rent: 324 },
  { img: "2.jpg", location: "London", sale: 100, rent: 628 },
  { img: "3.jpg", location: "Africa", sale: 560, rent: 508 },
  { img: "4.jpg", location: "Canada", sale: 351, rent: 324 },
  { img: "5.jpg", location: "Toronto", sale: 700, rent: 824 },
];

export const AchievementsContent = "We have over 25 years of experience. We've rented more than 250 properties and won awards for providing excellent customer service by fulfilling our customers' dreams and specifications.";

export const AchievementsCounterData = [
  { end: 20, label: "Year of Experience" },
  { end: 800, suffix: "+", label: "Home rented last year" },
  { end: 200, label: "Win An award" },
];

export const TestimonialsData = [
  {
    name: "Hannan Odeth",
    position: "Hannan Odeth",
    content: "“I recently purchased a home through this Realty and I had an amazing experience. My agent, John, was incredibly professional and knowledgeable about the market. His attention to detail was impressive.”",
  },
  {
    name: "Esther Howard",
    position: "Esther Howard",
    content: "“With the most recent sale of my house, this was vital, and I couldn't be happier with the outcome! During the process, they offered dependable counsel because they were aware about the current industry trends.”",
  },
  {
    name: "Jenny Wilson",
    position: "Jenny Wilson",
    content: "“The process of renting the apartment was very smooth and straightforward. The leasing agent, Sarah, was very professional, responsive, and helpful in answering all my questions and concerns.”",
  },
];

export const HomeTabData: NavType[] = [
  {
    id: 1,
    icon: <SearchNormal1 />,
    label: "Search",
    dropdownMenu: [
      { title: "City,Locality", icon: <i className="ri-map-pin-line" /> },
      { title: "Area (like a Salmina)", icon: <i className="ri-map-pin-4-line" /> },
      { title: "Project or Builder name", icon: <i className="ri-building-4-line" /> },
    ],
  },
  {
    id: 2,
    icon: <Location />,
    label: "Location",
    dropdownMenu: [{ title: "Apartment" }, { title: "Kansas City" }, { title: "Santiago" }, { title: "Lisbon" }, { title: "Los Angeles" }, { title: "Sydney" }, { title: "Beijing" }],
  },
  {
    id: 3,
    icon: <Building />,
    label: "Property Type",
    dropdownMenu: [{ title: "Apartment" }, { title: "House" }, { title: "Vila" }, { title: "Office" }, { title: "Farmhouse" }],
  },
  {
    id: 4,
    icon: <Wallet />,
    label: "Price",
  },
];