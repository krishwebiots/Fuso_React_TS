import { ImportCurve, Note1, Profile, SearchNormal1 } from "iconsax-react";
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
    icon: <Profile />,
    stepNumber: "01",
    title: "Account",
    description: "Make an account to control your application, monitor your progress, and get information for your job hunt.",
  },
  {
    icon: <ImportCurve />,
    stepNumber: "02",
    title: "CV/Resume",
    description: "Upload your resume to demonstrate how your skills align with any open positions.",
  },
  {
    icon: <SearchNormal1 />,
    stepNumber: "03",
    title: "Quick Jobs",
    description: "Your dream job is waiting for you. Find the best real estate opportunities in your country.",
  },
  {
    icon: <Note1 />,
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
