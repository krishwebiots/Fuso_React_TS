import { ImportCurve, Note1, Profile, SearchNormal1 } from "iconsax-react";
import { Navigation } from "swiper/modules";
import { JobHomeImageData, JobHomeMeanClassData } from "../../Types/HomeDemo";

export const JobCounterData = [
  { end: 20, suffix: "M+", label: "Users" },
  { end: 800, suffix: "K+", label: "Jobs" },
  { end: 200, suffix: "M+", label: "Partners" },
];

export const JobHomeSectionData: (JobHomeImageData | JobHomeMeanClassData)[] = [
  { image: "job/home/7.svg", type: "svg", class: "home-job-box position-absolute" },
  {
    meanClass: "round-shape-img",
    multipleImage: [
      { image: "job/home/1.jpg", type: "jpg", class: "flip-img" },
      { image: "job/home/5.svg", type: "svg", class: "top-left-box position-absolute rounded-0" },
    ],
  },
  {
    meanClass: "round-shape round-shape-img radius-style-1",
    multipleImage: [{ image: "job/home/3.svg", type: "svg", class: "animation-img" }],
  },
  {
    meanClass: "round-shape round-shape-img radius-style-2",
    multipleImage: [
      {
        childrenClass: "zoom-img",
        childrenImage: [{ image: "job/home/2.jpg", type: "jpg" }],
      },
      { image: "job/home/6.svg", type: "svg", class: "vertical-line position-absolute rounded-0" },
      { image: "job/home/6.svg", type: "svg", class: "horizontal-line position-absolute rounded-0" },
    ],
  },
  {
    meanClass: "round-shape round-shape-img radius-style-3",
    multipleImage: [{ image: "job/home/1.svg", type: "svg", class: "animation-img" }],
  },
  {
    meanClass: "round-shape round-shape-img radius-style-3",
    multipleImage: [{ image: "job/home/3.jpg", type: "jpg", class: "flip-img" }],
  },
  {
    meanClass: "round-shape round-shape-img radius-style-4",
    multipleImage: [{ image: "job/home/2.svg", type: "svg", class: "animation-img" }],
  },
  {
    meanClass: "round-shape round-shape-img radius-style-3",
    multipleImage: [
      { image: "job/home/4.jpg", type: "jpg", class: "flip-img" },
      { image: "job/home/6.svg", type: "svg", class: "vertical-line position-absolute rounded-0" },
      { image: "job/home/6.svg", type: "svg", class: "horizontal-line position-absolute rounded-0" },
    ],
  },
  {
    meanClass: "round-shape round-shape-img radius-style-3",
    multipleImage: [{ image: "job/home/4.svg", type: "svg", class: "animation-img" }],
  },
  {
    meanClass: "round-shape-img",
    multipleImage: [
      { image: "job/home/5.jpg", type: "jpg", class: "flip-img" },
      { image: "job/home/5.svg", type: "svg", class: "bottom-right-box position-absolute rounded-0" },
    ],
  },
];

export const StepImagesData = [
  [
    { src: "job/step/1.png", alt: "s-1", className: "img-fluid w-100" },
    { src: "job/step/4.png", alt: "s-2", className: "img-fluid radius-border w-100" },
  ],
  [
    { src: "job/step/2.png", alt: "s-3", className: "img-fluid radius-border w-100" },
    { src: "job/step/3.png", alt: "s-4", className: "img-fluid w-100" },
  ],
];

export const StepsData = [
  {
    icon: <Profile className="iconsax" />,
    stepNumber: "01",
    title: "Account",
    description: "Make an account to control your application, monitor your progress, and get information for your job hunt.",
  },
  {
    icon: <ImportCurve className="iconsax" />,
    stepNumber: "02",
    title: "CV/Resume",
    description: "Upload your resume to demonstrate how your skills align with any open positions.",
  },
  {
    icon: <SearchNormal1 className="iconsax" />,
    stepNumber: "03",
    title: "Quick Jobs",
    description: "Your dream job is waiting for you. Find the best real estate opportunities in your country.",
  },
  {
    icon: <Note1 className="iconsax" />,
    stepNumber: "04",
    title: "Apply Them",
    description: "Your dream job is waiting for you. Find the best real estate opportunities in your country.",
  },
];

export const JobAboutCounterData = [
  { count: 5000, label: "Freelancer Joined" },
  { count: 10, label: "Years Experience" },
  { count: 3000, label: "Company Joined" },
];

export const AboutImagesData = [[{ src: "job/about/1.png" }, { src: "job/about/2.png" }], [{ src: "job/about/3.png" }]];

export const AboutSliderContentData = "We're Pleased To Be The Source Of The Smiles We Put On Our Customers' Faces.";

export const AboutSlidesData = [
  {
    quoteText: "“Selli has done an excellent job. She finished all of the job on schedule and with little revisions. I admire her work flow and her ability to complete tasks on schedule. The most creative designer. You must collaborate with him.”",
    profileImgSrc: "job/about-slider/1.jpg",
    profileName: "Selli Johncenas",
    profilePosition: "Invented Technology | Manager",
  },
  {
    quoteText: "“I love the flexibility this platform offers. I can explore new opportunities while traveling, and the support I receive makes the process seamless. It’s a game-changer for anyone who wants to work on their own terms.”",
    profileImgSrc: "job/about-slider/2.jpg",
    profileName: "Emily Ramon",
    profilePosition: "Aether Dynamics | Data Analyst",
  },
  {
    quoteText: "“I’ve used several job platforms, but none compare to this. The personalized support and attention to detail set it apart. I found a position that not only meets but exceeds my career aspirations.”",
    profileImgSrc: "job/about-slider/3.jpg",
    profileName: "Chris Boff",
    profilePosition: "Cognia Robotics | Sales Executive",
  },
  {
    quoteText: "“As a freelancer, finding the right gigs can be challenging, but this service has made it so much easier. The platform’s job recommendations are spot-on, and I’ve been able to build a steady stream of work.”",
    profileImgSrc: "job/about-slider/4.jpg",
    profileName: "Anna Jerold",
    profilePosition: "LumiFlux Infotech | Content Creator",
  },
];

export const AboutSliderSetting = {
  navigation: {
    prevEl: ".job-about-prev",
    nextEl: ".job-about-next",
  },
  modules: [Navigation],
  className: "about-job-slider",
};

export const NewsletterContentData = "There are just two things that are crucial. Family is most important, followed by comfort, so let's get started with those two.";

export const JobCategoryContentData = "Explore different job categories to discover roles that match your interests.";

export const JobHereContentData = "Search and connect with the right company faster.";

export const JobHiringContentData = "A job that is ideal for you can be found. 20,000+ new positions are added each day.";

export const StepToFollowContent = "Find the best match for your career goals.";
