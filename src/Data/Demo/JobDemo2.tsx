import { Navigation } from "swiper/modules";

export const Cities = [
  ["Amsterdam", "Ankara", "Athens", "Atlantic", "Baltimore", "Bangkok", "Beijing", "Berlin", "Berne", "Brussels", "Budapest", "Buenos Aires", "Cairo", "Canberra", "Cannes", "Cape Town", "Chicago", "Cologne", "Copenhagen", "Damascus", "Delhi", "Dubai", "Dublin", "Florence", "Hague", "Havana", "Helsinki", "Hong Kong"],
  ["Honolulu", "Istanbul", "Jakarta", "Jerusalem", "Kansas City", "Kathmandu", "Kuala Lumpur", "Lisbon", "London", "Los Angeles", "Luxembourg", "Madrid", "Manila", "Melbourne", "Milan", "Montreal", "Moscow", "Munich", "Nazareth", "New York", "Nice", "Osaka", "Ottawa", "Paris", "Philadelphia", "Phnom Penh", "Prague"],
  ["Quito", "Reykjavik", "Rio de Janeiro", "San Francisco", "Santa Fe", "Santiago", "Shanghai", "Singapore City", "Stockholm", "Saint Petersburg", "Seoul", "Sydney", "Taipei", "Toronto", "Venice", "Vienna", "Washington", "Armenia", "Argentina", "Australia", "Aruba", "Belize", "Burundi", "Cape Verde", "Wokha", "Chile", "Ethiopia", "Zunheboto"],
];

export const BrowseByCategoryContent = "Explore different job categories to discover roles that match your interests.";

export const Job2CategorySetting = {
  navigation: {
    prevEl: ".dark-category-prev",
    nextEl: ".dark-category-next",
  },
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  modules: [Navigation],
  className: "about-job-slider",
};

export const StepsGoalData = [
  {
    number: "01",
    title: "Account",
    description: "Make an account to control your application, monitor your progress, and get information for your job hunt.",
  },
  {
    number: "02",
    title: "CV / Resume",
    description: "The next step is to upload your resume and employ it to demonstrate how your skills align with any open positions.",
  },
  {
    number: "03",
    title: "Quick Job",
    description: "Your dream job is waiting for you. Find the best real estate in your country.",
  },
  {
    number: "04",
    title: "Apply Them",
    description: "Apply to your dream job easily. Find the best real estate in your country and start your career.",
  },
];

export const ServiceIconData = ["job/category/1.svg", "job/category/5.svg", "job/category/7.svg"];

export const ServiceListData = ["Say goodbye to endless scrolling through unreliable job postings.", "Receive personalized job suggestions that match your criteria.", "We're more than just a job board."];

export const ServiceCounterListData = [
  { end: 135, label: "Freelancer Joined" },
  { end: 8, prefix: "0", label: "Years of Experience" },
  { end: 35, suffix: "K", label: "Company Joined" },
];

export const TestimonialsContent = "Discover why job seekers everywhere are raving about fuso. Here's what they have to say!";

export const TestimonialsData = [
  {
    name: "Sarah M.",
    role: "UI/UX Designer",
    text: "I found my dream job within weeks! The personalized recommendations and comprehensive resources made all the difference in my job search journey.",
  },
  {
    name: "Sarah M.",
    role: "Marketing Specialist",
    text: "I landed my ideal role in weeks thanks to personalized job recommendations, extensive resources, and tailored support.",
  },
  {
    name: "James P.",
    role: "Graphic Designer",
    text: "Tailored tools and job suggestions were game-changers in my search, helping me find my dream job quickly and efficiently.",
  },
  {
    name: "Olivia M.",
    role: "Human Resources Manager",
    text: "Rich resources and tailored job suggestions were useful to me in this search. I'm happy to have fast found a role that matches my goals and skill set.",
  },
  {
    name: "Emma W.",
    role: "Data Analyst",
    text: "Targeted job recommendations and resources helped me quickly secure my ideal position with invaluable support.",
  },
  {
    name: "Lucas G.",
    role: "UI/UX Designer",
    text: "Customized recommendations and resources helped me find a fantastic opportunity within weeks. I’m thrilled!",
  },
];

export const LatestJobOpeningsContent = "Stay updated with the newest job opportunities across industries, tailored to match your skills and career goals.";
