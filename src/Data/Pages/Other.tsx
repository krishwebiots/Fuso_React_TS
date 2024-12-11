//About-Us

import { CallCalling, Global, Location, Message, MessageQuestion, ReceiptText, Sms } from "iconsax-react";
import { Navigation } from "swiper/modules";
import { RouteList } from "../../Routers/RouteList";

export const PrimeCarRentalsContent = "At Prime Car Rentals, we pride ourselves on delivering top-tier car rental services that cater to a wide range of needs, from business trips to family vacations.";

export const PrimeCarRentalsList = ["Extensive Fleet", "Convenient Locations", "Affordable Rates", "Flexible Rental Options", "Exceptional Customer Service"];

export const AboutTeamSlider = {
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: {
    nextEl: ".about-team-next",
    prevEl: ".about-team-prev",
  },
  modules: [Navigation],
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1299: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
};

//Contact-Us

export const TouchContent = "For any questions or feedback, reach out to us via phone, email, or the form below. Your satisfaction is our priority. We look forward to hearing from you!";

export const ContactBoxData = [
  { icon: <Location className="iconsax" />, title: "Our Location", text: "05 West St, Suite New York 10016" },
  { icon: <Sms className="iconsax" />, title: "Our Email Address", text: "maryjrios@rhyta.com" },
  { icon: <CallCalling className="iconsax" />, title: "Contact Number", text: "860-349-8349" },
  { icon: <Global className="iconsax" />, title: "Our Website", text: "www.fuso.com" },
];

export const ContactCards = [
  {
    title: "Chat To Sales",
    description: "See our frequently asked questions.",
    link: RouteList.Pages.Other.ContactUs1,
    linkText: "Chat to sales",
    icon: <Message className="iconsax" />,
  },
  {
    title: "Our Location",
    description: "Speak to someone from our sales team today.",
    link: "https://www.google.com/maps",
    linkText: "Visit location",
    icon: <MessageQuestion className="iconsax" />,
  },
  {
    title: "Get Help Center",
    description: "Speak to our team today and ask anything about Coast.",
    link: RouteList.Pages.Other.ContactUs1,
    linkText: "Get Answer",
    icon: <Location className="iconsax" />,
  },
  {
    title: "Call Us",
    description: "See how Coast can help your business by getting early access.",
    link: RouteList.Pages.Other.ContactUs1,
    linkText: "Call our team",
    icon: <CallCalling className="iconsax" />,
  },
  {
    title: "Press & Media",
    description: "Get in touch with our PR team today.",
    link: RouteList.Pages.Other.ContactUs1,
    linkText: "Get Answer",
    icon: <ReceiptText className="iconsax" />,
  },
];

//Services
export const ServicesContent = "Discover the appropriate property that is most acceptable for you, ranging from houses";

//Counter
export const CounterData = [
  { end: 10, label: "Years in Business" },
  { end: 98, suffix: "%", label: "Positive Reaction" },
  { end: 4, label: "Successful Projects" },
  { end: 152, label: "Satisfied Client" },
];

//Team
export const TeamContent = "Greetings from our team, which brings empathy and creativity! Our unique skill set of motivated people are linked by a common desire for success and dedication to achieving the team's goals.";

export const FounderData = [
  { image: "other/person2.png", title: "Designing Insightful Solutions for Creative Applications.", name: "Noah Evans", text: "Marketing Manager" },
  { image: "other/person.png", title: "The bridge that connects understanding with knowledge is design.", name: "Jessica Doe", text: "Design Manager" },
];

//Pricing

export const PricingPlanContent = "Discover the perfect solution for all your needs with our range of pricing packages designed to exceed your expectations.";

export const PricingPlanData = [
  {
    name: "Free",
    price: "$0",
    subtext: "per editor / per month",
    buttonLabel: "Current Plan",
    features: ["Basic access to core features", "Limited usage or access restrictions", "Community support"],
  },
  {
    name: "Team",
    price: "$15",
    subtext: "per editor / per month",
    buttonLabel: "Upgrade",
    features: ["All Free plan features", "Enhanced collaboration tools", "Increased usage limits", "Priority support"],
    isActive: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    subtext: "",
    buttonLabel: "Contact Us",
    features: ["All Team plan features", "Advanced security and compliance options", "Custom integrations and solutions", "Dedicated account manager", "24/7 premium support"],
  },
];

//FAQ
export const QuestionContent = "If our FAQ does not include the answer to your query. You can reach out to us at any time. We'll get back to you right away!";

export const FrequentlyQuestionsContent = "This is an overview of the product; it will talk about the project's aim, purpose, or goal as well as additional information similar to overview:";

export const FaqNavList = [
  { title: "General", type: "general" },
  { title: "Service", type: "service" },
  { title: "Payment", type: "payment" },
  { title: "Vehicles", type: "vehicles" },
  { title: "Refund", type: "refund" },
];

export const AccordionData = [
  {
    type: "general",
    accordion: [
      {
        id: 1,
        title: "What is the best type of car for me?",
        content: "The best car for you depends on your needs, such as budget, fuel efficiency, space requirements, and driving conditions. Consider whether you need a sedan, SUV, truck, or electric vehicle.",
      },
      {
        id: 2,
        title: "How often should I get my car serviced?",
        content: "Regular maintenance typically includes oil changes every 3,000 to 7,500 miles, tire rotations every 6,000 to 8,000 miles, and annual check-ups. Always refer to your car's owner manual for specific recommendations.",
      },
      {
        id: 3,
        title: "What is the difference between leasing and buying a car?",
        content: "Leasing means paying for the car's depreciation and returning it at the end, while buying means owning the car outright once the loan is paid off. Leasing often has lower monthly payments, but buying ismore cost-effective in the long run.",
      },
      {
        id: 4,
        title: "How can I improve my car’s fuel efficiency?",
        content: "Regular maintenance, maintaining proper tire pressure, using high-quality fuel, and driving smoothly can help improve fuel efficiency. Avoiding heavy acceleration and excessive idling also contributes.",
      },
      {
        id: 5,
        title: "What should I check before buying a used car?",
        content: "Inspect the car’s history report, check for any signs of damage or wear, test drive the vehicle, and have it inspected by a trusted mechanic. Ensure that the vehicle has a clean title and no outstanding recalls.",
      },
      {
        id: 6,
        title: "How can I tell if my car needs new tires?",
        content: "Check the tread depth using a tread gauge or the penny test (insert a penny into the tread; if you can see the top of Lincoln’s head, it’s time for new tires). Also, look for uneven wear or any bulges and cracks.",
      },
      {
        id: 7,
        title: "How do I choose the right car battery?",
        content: "Choose a battery with the correct size, type, and specifications for your vehicle as indicated in the owner’s manual. Consider factors like cold-cranking amps (CCA) and reserve capacity (RC) for your driving conditions.",
      },
    ],
  },
  {
    type: "service",
    accordion: [
      {
        id: 1,
        title: "What should I check before a long road trip?",
        content: "Before a long trip, check your tire pressure, oil level, coolant, brakes, lights, and windshield wipers. Make sure your spare tire and jack are in good condition. Also, ensure your car's battery is fully charged and that you have a full tank of gas.",
      },
      {
        id: 2,
        title: "How often should I change my oil?",
        content: "Generally, you should change your oil every 3,000 to 5,000 miles, but it’s best to check your vehicle’s owner’s manual for the manufacturer’s recommendation. Modern cars with synthetic oil can often go up to 7,500 miles between changes.",
      },
      {
        id: 3,
        title: "Why is my car’s check engine light on?",
        content: "The check engine light can indicate a variety of issues, from a loose gas cap to more serious problems like engine misfires or emissions system failures. It's important to have your car diagnosed by a professional to identify the exact issue.",
      },
      {
        id: 4,
        title: "How can I improve my car’s fuel efficiency?",
        content: "To improve fuel efficiency, maintain proper tire pressure, avoid aggressive driving, reduce excess weight in the car, use cruise control on highways, and keep up with regular maintenance such as oil changes and air filter replacements.",
      },
      {
        id: 5,
        title: "What should I do if my car overheats?",
        content: "If your car overheats, pull over safely and turn off the engine. Allow the car to cool before opening the hood. Check the coolant level and top it up if necessary. If the problem persists, contact a tow service to get your car to a mechanic.",
      },
      {
        id: 6,
        title: "What’s the importance of regular brake maintenance?",
        content: "Regular brake maintenance is crucial for safety. Worn brake pads or other issues can reduce braking efficiency and increase stopping distances, which can lead to accidents. Have your brakes inspected regularly and replace components as needed.",
      },
      {
        id: 7,
        title: "How can I keep my car’s interior clean?",
        content: "Regularly vacuum and wipe down surfaces with appropriate cleaners. Use seat covers and floor mats to protect the upholstery and carpets. Keep a trash bag in your car to avoid clutter, and clean spills promptly to prevent stains.",
      },
    ],
  },
  {
    type: "payment",
    accordion: [
      {
        id: 1,
        title: "What is a down payment, and how much should I put down?",
        content: "A down payment is an upfront payment made when purchasing a car. It reduces the amount you need to finance. It is generally recommended to put down at least 20% of the car's purchase price to reduce monthly payments and interest charges.",
      },
      {
        id: 2,
        title: "How is my monthly car payment calculated?",
        content: "Your monthly car payment is calculated based on the loan amount, interest rate, and loan term. It also includes any fees and taxes that are financed.",
      },
      {
        id: 3,
        title: "Can I pay off my car loan early?",
        content: "Yes, you can typically pay off your car loan early. However, some lenders may charge a prepayment penalty. Check your loan agreement for specific terms.",
      },
      {
        id: 4,
        title: "What happens if I miss a car payment?",
        content: "Missing a car payment can result in late fees, higher interest charges, and potential damage to your credit score. Repeated missed payments can lead to repossession of the vehicle.",
      },
      {
        id: 5,
        title: "What is GAP insurance, and do I need it?",
        content: "Guaranteed Asset Protection (GAP) insurance covers the difference between the car's value and the amount you owe on the loan if the car is totaled or stolen. It is beneficial if you owe more than the car's current value.",
      },
      {
        id: 6,
        title: "What is a balloon payment?",
        content: "A balloon payment is a large, lump-sum payment due at the end of a loan term. It is common in some financing arrangements where lower monthly payments are made with a large final payment.",
      },
      {
        id: 7,
        title: "Is leasing cheaper than buying?",
        content: "Leasing can have lower monthly payments compared to buying because you're only paying for the car's depreciation during the lease term. However, you do not own the car at the end of the lease, which can lead to additional costs if you decide to lease or buy another car.",
      },
    ],
  },
  {
    type: "vehicles",
    accordion: [
      {
        id: 1,
        title: "What are the key factors to consider when buying a new car?",
        content: "When buying a car, consider your budget, fuel efficiency, safety features, reliability, and maintenance costs. Match the vehicle to your lifestyle—compact for city driving, SUV for family trips, or truck for heavy-duty tasks. Research resale value, warranty, and financing options to make an informed decision.",
      },
      {
        id: 2,
        title: "What should I do if my car breaks down on the road?",
        content: "If your car breaks down on the road, the first step is to safely pull over to the side of the road, preferably away from traffic. Turn on your hazard lights to alert other drivers. If possible, place a warning triangle or flares behind your car to increase visibility.",
      },
      {
        id: 3,
        title: "What are the benefits of electric cars compared to traditional gasoline cars?",
        content: "Electric cars offer several advantages over traditional gasoline cars. They are more environmentally friendly as they produce zero tailpipe emissions, reducing your carbon footprint. Electric vehicles (EVs) also have lower operating costs since electricity is cheaper than gasoline and they require less maintenance due to fewer moving parts.",
      },
      {
        id: 4,
        title: "What are some common car maintenance tasks that I should perform regularly?",
        content: "Regular car maintenance is crucial to extend the life of your vehicle and ensure your safety on the road. Regular tasks include checking oil levels, tire pressure, and brake pads. You should also replace your air filter, wiper blades, and spark plugs as needed. Don't forget to schedule regular tune-ups and inspections with a trusted mechanic.",
      },
      {
        id: 5,
        title: "What are some common car safety features that I should look for when buying a new car?",
        content: "When shopping for a new car, look for safety features such as airbags, anti-lock brakes (ABS), electronic stability control (ESC), and a rearview camera. You should also consider features like lane departure warning, blind spot monitoring, and forward collision warning. Additionally, check the car's safety ratings from reputable organizations like the National Highway Traffic Safety Administration (NHTSA) and the Insurance Institute for Highway Safety (IIHS).",
      },
      {
        id: 6,
        title: "What are some common car insurance options that I should consider?",
        content: "When choosing car insurance, consider options like liability coverage, collision coverage, comprehensive coverage, and personal injury protection (PIP). You should also think about additional features like roadside assistance, rental car coverage, and gap insurance.",
      },
      {
        id: 7,
        title: "What are the signs that my car battery needs to be replaced?",
        content: "If your car's battery is struggling, you might notice signs like slow engine cranking, dim headlights, or electrical issues such as faulty power windows. A clicking sound when turning the key or a warning light on the dashboard can also indicate battery trouble. If the battery is over three years old, testing it regularly is a good idea.",
      },
    ],
  },
  {
    type: "refund",
    accordion: [
      {
        id: 1,
        title: "How do I request a refund for my car purchase?",
        content: "To request a refund for your car purchase, please contact our customer service team within 30 days of your purchase. Include your order number, a brief issue description, and any supporting documents.",
      },
      {
        id: 2,
        title: "What is the refund policy for a car purchase?",
        content: "Our refund policy allows for returns within 30 days of purchase. The vehicle must be in its original condition with no modifications or damages. Refunds will be processed after a thorough inspection.",
      },
      {
        id: 3,
        title: "Can I get a refund if I’ve used the car?",
        content: "Refunds are typically only available if the car has not been used. If you have used the car, please contact customer service to discuss potential options, such as a trade-in or exchange.",
      },
      {
        id: 4,
        title: "How long does it take to process a refund?",
        content: "Refunds are usually processed within 7-10 business days after the return has been inspected and approved. The time may vary depending on your payment method.",
      },
      {
        id: 5,
        title: "Are there any fees associated with a refund?",
        content: "Depending on the return policy, there may be a restocking fee or other charges. Please review our policy or contact customer service for detailed information about potential fees.",
      },
      {
        id: 6,
        title: "Can I return a car that was purchased as a special order?",
        content: "Special orders are generally non-refundable. Please refer to the terms provided at the time of purchase or contact our customer service for specific details regarding your order.",
      },
      {
        id: 7,
        title: "What should I do if I receive a defective car?",
        content: "If you receive a defective car, contact our customer service immediately to report the issue. We will arrange for a return or repair and guide you through the process based on our warranty and return policies.",
      },
    ],
  },
];

//User Dashboard
export const DashboardList = [
  { title: "Dashboard", type: "dashboard" },
  { title: "My Properties", type: "properties" },
  { title: "Create Property", type: "create_property" },
  { title: "My Profile", type: "profile" },
  { title: "Favorites", type: "favorites" },
  { title: "Privacy", type: "privacy" },
];
