import { Navigation } from "swiper/modules";

export const JobHomeIcon = ["1", "2", "3", "6"];

export const SelectExperienceData = ["Interneship", "Fresher", "Six Month", "One Year", "Two Year"];

export const JobCategoriesScrollData = [
  {
    class: "scroll-quote",
    scrollData: [
      { image: "5", title: "Art & Design" },
      { image: "1", title: "Programming & Tech" },
      { image: "2", title: "Customer Support" },
      { image: "3", title: "Product Management" },
      { image: "7", title: "Video Editing" },
      { image: "8", title: "Writing & Translation" },
      { image: "4", title: "Finance & Accounting" },
    ],
  },
  {
    class: "scroll-quote reverse-quote",
    scrollData: [
      { image: "7", title: "Video Editing" },
      { image: "3", title: "Product Management" },
      { image: "2", title: "Customer Support" },
      { image: "1", title: "Programming & Tech" },
      { image: "4", title: "Finance & Accounting" },
      { image: "8", title: "Writing & Translation" },
      { image: "5", title: "Art & Design" },
    ],
  },
];

export const AboutImageData = [{ image: "about.png" }, { image: "objects.png", class: "object-dot position-absolute" }, { image: "text-object1.png", class: "text-object1 position-absolute" }, { image: "text-object2.png", class: "text-object2 position-absolute" }];

export const AboutList = ["Verified Job Listings", "Personalized Recommendations", "Comprehensive Resources", "Trusted Community"];

export const JobCitiesData = [
  { image: "1.jpg", title: "Canada" },
  { image: "2.jpg", title: "New York" },
  { image: "3.jpg", title: "Sydney" },
  { image: "4.jpg", title: "London" },
  { image: "1.jpg", title: "Canada" },
  { image: "2.jpg", title: "New York" },
  { image: "3.jpg", title: "Sydney" },
  { image: "4.jpg", title: "London" },
];

export const JobCitiesSwiperSetting = {
  navigation: {
    prevEl: ".job-category-prev",
    nextEl: ".job-category-next",
  },
  modules: [Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  className: "job3-category-slider",
};

export const InterviewQuestionContent = "where users can find sample interview questions tailored to specific industries or job roles. Here's how you might describe it:";

export const FaqData = [{ image: "faq-object.png", class: "faq-top-object position-absolute" }, { image: "objects.png", class: "faq-bottom-object position-absolute" }, { image: "faq.png" }];

export const QuestionListData = [
  { title: "Software Engineer", question: "100k+ Questions" },
  { title: "Graphic Designer", question: "90k+ Questions" },
  { title: "Web Developer", question: "10.10k+ Questions" },
  { title: "Data Analytics", question: "7.5k+ Questions" },
  { title: "Hr Manager", question: "50.2k+ Questions" },
];

export const PaymentData = [
  { image: "gpay.png", utl: "https://play.google.com/store/games?utm_source=apac_med&hl=en-IN&utm_medium=hasem&utm_content=Jan0324&utm_campaign=Evergreen&pcampaignid=MKT-EDR-apac-in-1707570-med-hasem-py-Evergreen-Jan0324-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700080171622579_creativeid_694609712127_device_c&gad_source=1&gclid=CjwKCAjw8fu1BhBsEiwAwDrsjAWRsKs1pKLHt1bBX6bjz9PJ3IdJtTcOVvH0HT4U7dqtG6W7yuH_MxoCaZ8QAvD_BwE&gclsrc=aw.ds" },
  { image: "app-store.png", utl: "https://www.apple.com/in/app-store/" },
];

export const RatedJobData = [
  { image: "job/o-1.svg", class: "object-1 position-absolute" },
  { image: "job/o-2.svg", class: "object-2 position-absolute" },
  { image: "job-3/about/objects.png", type: "png", class: "object-dots position-absolute" },
];

export const TopRatedCompanyContent = "Are you ready to take the next step in your career with a top-rated employer? . We're committed to excellence in every aspect of our business, and that starts with our talented team.";
