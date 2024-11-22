import { Navigation } from "swiper/modules";

export const PropertyTypeData = [
  { id: "status-one", label: "All", type: "all" },
  { id: "status-two", label: "Apartment", type: "apartment" },
  { id: "status-three", label: "House", type: "house" },
  { id: "status-four", label: "Villa", type: "villa" },
  { id: "status-five", label: "Office", type: "office" },
  { id: "status-six", label: "Farmhouse", type: "farmhouse" },
];

export const BhkOptions = [
  { id: "bed-1", label: "1 BHK", type: "1 BHK" },
  { id: "bed-2", label: "2 BHK", type: "2 BHK" },
  { id: "bed-3", label: "3 BHK", type: "3 BHK" },
  { id: "bed-4", label: "4 BHK", type: "4 BHK" },
  { id: "bed-5", label: "5 BHK", type: "5 BHK" },
];

export const Amenities = [
  { id: "amenity-1", label: "Air Conditioning", type: "Air Conditioning" },
  { id: "amenity-2", label: "Doorman", type: "Doorman" },
  { id: "amenity-3", label: "Family Room", type: "Family Room" },
  { id: "amenity-4", label: "Parking", type: "Parking" },
  { id: "amenity-5", label: "Waterfront", type: "Waterfront" },
  { id: "amenity-6", label: "Onsite Parking", type: "Onsite Parking" },
  { id: "amenity-7", label: "Fireplace", type: "Fireplace" },
  { id: "amenity-8", label: "Hardwood Floors", type: "Hardwood Floors" },
  { id: "amenity-9", label: "Dishwasher", type: "Dishwasher" },
  { id: "amenity-10", label: "Dining Room", type: "Dining Room" },
  { id: "amenity-11", label: "Cleaning Service", type: "Cleaning Service" },
  { id: "amenity-12", label: "Central Heating", type: "Central Heating" },
  { id: "amenity-13", label: "Unit Washer/Dryer", type: "Unit Washer/Dryer" },
  { id: "amenity-14", label: "Wifi", type: "Wifi" },
  { id: "amenity-15", label: "TV Cable", type: "TV Cable" },
  { id: "amenity-16", label: "Microwave", type: "Microwave" },
  { id: "amenity-17", label: "Refrigerator", type: "Refrigerator" },
  { id: "amenity-18", label: "Gym", type: "Gym" },
];

export const SliderFor = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  focusOnSelect: true,
  infinite: true,
};

export const SliderNav = {
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  focusOnSelect: true,
};

export const DetailPropertySlider = {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};

export const ModalShareListData = [
  { url: "https://www.facebook.com/", icon: "facebook" },
  { url: "https://x.com/", icon: "twitter" },
  { url: "https://in.linkedin.com/", icon: "linkedin" },
  { url: "https://web.whatsapp.com/", icon: "whatsapp" },
  { url: "https://mail.google.com/", icon: "mail" },
];

export const OverviewData = [
  { svg: "house", title: "Property Type", text: "House" },
  { svg: "bed", title: "Bedroom", text: "2" },
  { svg: "shower", title: "Bathroom", text: "2" },
  { svg: "garage", title: "Garage", text: "1" },
  { svg: "expand-arrows", title: "Sqft", text: "1400" },
  { svg: "calendar", title: "Year Built", text: "2020" },
];

export const AmenitiesData = [
  { image: "amenities/garden", title: "Garden" },
  { image: "amenities/air", title: "AC" },
  { image: "detail-main/8", title: "Balcony" },
  { image: "amenities/basement", title: "Basement" },
  { image: "amenities/gym", title: "GYM" },
  { image: "amenities/hall", title: "Hall" },
  { image: "amenities/microwave", title: "Microwave" },
  { image: "amenities/refrigerator", title: "Refrigerator" },
  { image: "amenities/sauna", title: "Sauna" },
  { image: "amenities/security", title: "Gard" },
  { image: "amenities/swimming-pool", title: "Swimming-pool" },
  { image: "amenities/washing", title: "Dryer" },
  { image: "amenities/wifi", title: "Wifi" },
  { image: "amenities/window", title: "Window covering" },
  { image: "amenities/tv", title: "TV" },
];

export const AmenitiesSlider = {
  slidesPerView: 4,
  spaceBetween: 10,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
};

export const PropertyDescriptionData = "Take the very height of luxury in this brand-new, ultra-modern masterpiece located on a one-third-acre site in the center of Arlington. It has six bedrooms, eight bathrooms, a three-car garage, and a private swimming pool included. MCLEAN CUSTOM BUILDERS offers a custom-designed home that blends seamlessly into the surrounding landscape. It provides the ultimate in seclusion and tranquility. Is a late spring or early summer 2024 delivery date anticipated? From the impressive al-fresco areas to the grand main doorway, every little detail has been meticulously thought out. The two-story living area with volume ceilings and a wall of Marvin windows welcomes you via 10-foot glass doors.";

export const PropertyDetailsData = [
  { label: "property ID", value: "RN26" },
  { label: "price", value: "$25,200" },
  { label: "property Size", value: "1500 Sqft" },
  { label: "Garage Size", value: "400 Sqft" },
  { label: "Bedroom", value: "2" },
  { label: "Garage", value: "1" },
  { label: "Bathroom", value: "2" },
  { label: "Year Built", value: "2020" },
  { label: "Property Type", value: "Flat" },
  { label: "Property status", value: "For Sale" },
];

export const FloorPlansContentData = "A walk-in closet and a bathroom with a vanity, toilet, and walk-in shower are also included in the attached bedroom. A walk-in closet and a bathroom with a vanity, toilet, and walk-in";

export const FloorPlansData = ["bed", "shower", "expand-arrows"];

export const ReviewsData = [
  {
    img: "property/detail/1.jpg",
    name: "Erika Smith",
    date: "25 July 2018",
    likes: 5,
    stars: 4,
    text: "This is a Nice Locality. Well maintained, peaceful location, neighborhoods are civilized and beauracrates. Airport and hotel, hospital, school, nearby the location.",
  },
  {
    img: "property/detail/2.jpg",
    name: "Zachary Fields",
    date: "25 July 2018",
    likes: 3,
    stars: 4,
    text: "Vasant Kunj is the neighbourhood of the elite, residing with numerous diplomats of foreign countries and multiple embassies. The area is surrounded by the best schools, hospitals, shopping malls, movie theatres, clubs, restaurants and 5-star hotels which are nearby, which makes this home listing in South Delhi an exemplary choice for any family.",
  },
  {
    img: "property/detail/3.jpg",
    name: "Michele Parker",
    date: "25 July 2018",
    likes: 8,
    stars: 4,
    text: "Vasant Kunj Farms is a super prime Farm house community located closest to South Delhi. Many industrialists have their farm houses here. Located close to Gurgaon and other prime areas of South Delhi and Airport.",
  },
];

export const ScheduleSlider = {
  slidesPerView: 7,
  spaceBetween: 20,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  modules: [Navigation],
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    470: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
  },
};

export const Days = Array.from({ length: 31 }, (_, i) => {
  const date = new Date(2024, 2, i + 1);
  return {
    day: date.toLocaleString("en-US", { weekday: "short" }),
    date: date.getDate(),
    month: "mar",
  };
});

export const Time = Array.from({ length: 15 }, (_, i) => {
  const hour = Math.floor(i / 2) + 12;
  const minute = i % 2 === 0 ? "00" : "30";
  return {
    hour: hour,
    minute: minute,
  };
});
