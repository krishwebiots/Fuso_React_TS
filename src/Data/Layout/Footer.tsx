import { Call, Location, Sms } from "iconsax-react";
import { RouteList } from "../../Routers/RouteList";
import { FooterDetailType } from "../../Types/LayoutType";

export const ContactListData = [
  { icon: <Call />, title: "Call", text: "(702) 555-0122" },
  { icon: <Sms />, title: "Email", text: "general.info@gmail.com" },
  { icon: <Location />, title: "Location", text: "4517 Washington Ave. Manchester," },
];

export const SocialMediaData = [
  { url: "https://www.instagram.com/", icon: "ri-instagram-line" },
  { url: "https://www.facebook.com/", icon: "ri-facebook-line" },
  { url: "https://x.com/", icon: "ri-twitter-x-line" },
  { url: "https://in.pinterest.com/", icon: "ri-pinterest-line" },
];

export const FooterDetailData: FooterDetailType[] = [
  {
    title: "Location",
    links: [
      { title: "New York", url: RouteList.Car.Listing.CarLeftList },
      { title: "London", url: RouteList.Car.Listing.CarLeftList },
      { title: "Prague", url: RouteList.Car.Listing.CarLeftList },
      { title: "Cape Town", url: RouteList.Car.Listing.CarLeftList },
      { title: "Singapore", url: RouteList.Car.Listing.CarLeftList },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { title: "Saved Rides", url: RouteList.Pages.Other.UserDashboard },
      { title: "Profile", url: RouteList.Pages.Other.UserDashboard },
      { title: "Post Cars", url: RouteList.Pages.Other.UserDashboard },
      { title: "Privacy", url: RouteList.Pages.Other.Privacy },
    ],
  },
  {
    title: "official info",
    contactList: true,
    links: [
      { title: "4517 Washington Ave. ManchesteR", icon: "ri-map-pin-fill" },
      { title: "(702) 555-0122", icon: "ri-phone-fill" },
      { title: "general.info@gmail.com", icon: "ri-mail-fill" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Portfolio", url: RouteList.Property.Grid.Property3Grid },
      { title: "Blog", url: RouteList.Pages.Blog.BlogLeftSidebar },
      { title: "Pricing", url: RouteList.Pages.Other.Pricing },
      { title: "Register", url: RouteList.Pages.Other.SignUp1 },
      { title: "Review", url: RouteList.Pages.Other.Testimonial },
    ],
  },
  {
    title: "About",
    links: [
      { title: "About Us", url: RouteList.Pages.Other.AboutUs1 },
      { title: "Service", url: RouteList.Pages.Other.Services },
      { title: "FAQs", url: RouteList.Pages.Other.Faq },
      { title: "Teams", url: RouteList.Pages.Other.Team },
      { title: "Contact Us", url: RouteList.Pages.Other.ContactUs1 },
    ],
  },
];
