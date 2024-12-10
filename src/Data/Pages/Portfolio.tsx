import { EffectFade, Mousewheel, Pagination } from "swiper/modules";

export const PortfolioListData = [
  { title: "Show All", type: "all" },
  { title: "Car", type: "car" },
  { title: "Property", type: "property" },
  { title: "Job", type: "job" },
];

export const PortfolioData = [
  { image: "portfolio/1.jpg", backImage: "portfolio/4.jpg", slider: ["1", "16", "11", "7"], type: "car", title: "Voltura Lightning", text: "Voltura Motors" },
  { image: "portfolio/2.jpg", backImage: "portfolio/8.jpg", slider: ["2", "14", "9", "8"], type: "job", title: "Software Developer", text: "Technology" },
  { image: "portfolio/3.jpg", backImage: "portfolio/15.jpg", slider: ["3", "15", "12", "10"], type: "property", title: "Skyline Properties", text: "Residential" },
  { image: "portfolio/4.jpg", backImage: "portfolio/1.jpg", slider: ["4", "11", "6", "16"], type: "car", title: "TerraXion Voyager", text: "TerraXion Cars" },
  { image: "portfolio/5.jpg", backImage: "portfolio/12.jpg", slider: ["5", "3", "12", "10"], type: "property", title: "Urban Nest Realty", text: "Multi-family" },
  { image: "portfolio/6.jpg", backImage: "portfolio/11.jpg", slider: ["6", "4", "13", "4"], type: "car", title: "Orion Specter", text: "Orion AutoWorks" },
  { image: "portfolio/7.jpg", backImage: "portfolio/13.jpg", slider: ["7", "11", "1", "4"], type: "car", title: "Zephyr Tempest", text: "Zephyr Drive" },
  { image: "portfolio/8.jpg", backImage: "portfolio/2.jpg", slider: ["8", "14", "9", "4"], type: "job", title: "SEO Specialist", text: "Marketing" },
  { image: "portfolio/9.jpg", backImage: "portfolio/14.jpg", slider: ["9", "4", "14", "9"], type: "job", title: "Financial Analyst", text: "Finance" },
  { image: "portfolio/10.jpg", backImage: "portfolio/15.jpg", slider: ["10", "3", "5", "15"], type: "property", title: "Pinnacle Estates", text: "Luxury Homes" },
  { image: "portfolio/11.jpg", backImage: "portfolio/6.jpg", slider: ["11", "7", "4", "13"], type: "car", title: "Quantum Pulse", text: "Quantum Rides" },
  { image: "portfolio/12.jpg", backImage: "portfolio/5.jpg", slider: ["12", "5", "3", "10"], type: "property", title: "Seaside Homes LLC", text: "Vacation Rentals" },
  { image: "portfolio/13.jpg", backImage: "portfolio/7.jpg", slider: ["13", "1", "4", "6"], type: "car", title: "Voltura Lightning", text: "Voltura Motors" },
  { image: "portfolio/14.jpg", backImage: "portfolio/9.jpg", slider: ["14", "4", "9", "14"], type: "job", title: "Software Developer", text: "Technology" },
  { image: "portfolio/15.jpg", backImage: "portfolio/3.jpg", slider: ["15", "10", "3", "5"], type: "property", title: "Skyline Properties", text: "Residential" },
  { image: "portfolio/16.jpg", backImage: "portfolio/1.jpg", slider: ["16", "4", "1", "6"], type: "car", title: "TerraXion Voyager", text: "TerraXion Cars" },
];

export const PortfolioImagesSlider = {
  pagination: { clickable: true },
  modules: [Pagination],
};

export const PortfolioVerticalSlider = {
  effect: "fade",
  speed: 1000,
  mousewheel: true,
  pagination: { clickable: true },
  modules: [Pagination, EffectFade, Mousewheel],
};

export const PortfolioItems = [
  { title: "UI/UX Designer", imgSrc: "uiux-designer.jpg" },
  { title: "Brand", imgSrc: "brand.jpg" },
  { title: "Creative", imgSrc: "creative.jpg" },
  { title: "Job", imgSrc: "job.jpg" },
  { title: "Car Rental", imgSrc: "car-rental.jpg" },
  { title: "Bungalows", imgSrc: "banglows.jpg" },
  { title: "Modern", imgSrc: "modern.jpg" },
  { title: "Web Developer", imgSrc: "web-developer.jpg" },
  { title: "Real Estate", imgSrc: "real-estate.jpg" },
];

export const ChallengeData = ["Lack of a strong digital platform and minimal visibility across online channels.", "Outdated, non-automated booking system leading to inefficiencies and errors.", "Difficulty in providing seamless and satisfying interactions for customers.", "Inefficient tracking and maintenance of the rental car fleet.", "Weak promotional efforts, resulting in poor customer reach and low brand awareness."];

export const OurApproachData = ["Designed with easy navigation and intuitive interfaces for seamless customer interactions.", "Allows customers to conveniently book services online, improving efficiency and reducing manual effort.", "Focused on delivering personalized and responsive services to ensure satisfaction.", "Streamlined vehicle tracking, maintenance, and logistics to optimize operations.", "Implemented to reach a broader audience, drive engagement, and boost conversions."];

export const SolutionData = ["Allows customers to book services instantly, providing convenience and efficiency.", "Streamlined navigation and user-friendly design minimize friction, enhancing the booking experience effortlessly.", "Utilizes data-driven strategies to engage the right audience and increase bookings effectively.", "Combining these features enables seamless operations, quick service delivery, and improved customer satisfaction."];

export const ResultsAndImpactData = ["Recent advancements have strengthened our standing in the market.", "We are delivering greater value to clients, improving overall customer satisfaction.", "Ongoing improvements and innovations in our services are key drivers of progress.", "Our commitment to innovation and enhanced services is helping us maintain a strong competitive edge."];

export const BrandFlexData = [
  { title: "Brand", text: "Mercedes-Benz" },
  { title: "Date", text: "28-08-2024" },
];

export const ChallengeContent = ["The rental car service struggled with limited online presence, a manual booking system, poor customer experience, outdated fleet management, and ineffective marketing strategies."];

export const OurApproachContent = ["We developed a user-friendly website with an automated booking system, enhanced customer experience, integrated fleet management software, and executed a comprehensive digital marketing strategy."];

export const SolutionContent = ["A modern website with real-time booking, streamlined UI, fleet management integration, and targeted marketing campaigns ensures seamless operations and enhanced customer satisfaction."];

export const ResultsAndImpactContent = ["These advancements have not only solidified our market position but also enhanced our ability to deliver exceptional value to our clients. The continuous innovation in our services is driving sustained competitive advantage."];

export const LuxuryCarsContent = "Premium interiors, advanced technology, superior performance and ideal for Special occasions, business executives, luxury travel";
