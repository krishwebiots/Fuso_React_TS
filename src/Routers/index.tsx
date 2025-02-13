import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import CarClassic from "../Pages/Car/Detail/CarClassic";
import CarClassicSlider from "../Pages/Car/Detail/CarClassicSlider";
import CarExpandSlider from "../Pages/Car/Detail/CarExpandSlider";
import CarLayout1 from "../Pages/Car/Detail/CarLayout1";
import CarLayout2 from "../Pages/Car/Detail/CarLayout2";
import CarModernSlider from "../Pages/Car/Detail/CarModernSlider";
import CarScrollspy from "../Pages/Car/Detail/CarScrollspy";
import CarSlider from "../Pages/Car/Detail/CarSlider";
import CarThumbnailSlider from "../Pages/Car/Detail/CarThumbnailSlider";
import CarVideo from "../Pages/Car/Detail/CarVideo";
import Car2Grid from "../Pages/Car/Grid/Car2Grid";
import Car2RightGrid from "../Pages/Car/Grid/Car2RightGrid";
import Car3Grid from "../Pages/Car/Grid/Car3Grid";
import Car3RightGrid from "../Pages/Car/Grid/Car3RightGrid";
import CarNoSidebar from "../Pages/Car/Grid/CarNoSidebar";
import CarLeftList from "../Pages/Car/Listing/CarLeftList";
import CarRightList from "../Pages/Car/Listing/CarRightList";
import CarInfiniteScroll from "../Pages/Car/Other/CarInfiniteScroll";
import CarLeftDrawer from "../Pages/Car/Other/CarLeftDrawer";
import CarLoadMore from "../Pages/Car/Other/CarLoadMore";
import CarRightDrawer from "../Pages/Car/Other/CarRightDrawer";
import CarTopCategory from "../Pages/Car/Other/CarTopCategory";
import CarTopFilter from "../Pages/Car/Other/CarTopFilter";
import CarWithoutSlider from "../Pages/Car/Other/CarWithoutSlider";
import CarWishlist from "../Pages/Car/Wishlist";
import CarDemo1 from "../Pages/Home/CarDemo1";
import CarDemo2 from "../Pages/Home/CarDemo2";
import JobDemo1 from "../Pages/Home/JobDemo1";
import JobDemo2 from "../Pages/Home/JobDemo2";
import JobDemo3 from "../Pages/Home/JobDemo3";
import PropertyDemo1 from "../Pages/Home/PropertyDemo1";
import PropertyDemo2 from "../Pages/Home/PropertyDemo2";
import JobDetail1 from "../Pages/Job/Detail/JobDetail1";
import JobDetail2 from "../Pages/Job/Detail/JobDetail2";
import JobDetail3 from "../Pages/Job/Detail/JobDetail3";
import JobDetail4 from "../Pages/Job/Detail/JobDetail4";
import JobDetail5 from "../Pages/Job/Detail/JobDetail5";
import JobGridNoSidebar from "../Pages/Job/Grid/JobGridNoSidebar";
import JobGridProgress from "../Pages/Job/Grid/JobGridProgress";
import JobGridType2 from "../Pages/Job/Grid/JobGridType2";
import JobGridType3 from "../Pages/Job/Grid/JobGridType3";
import JobLeftSidebar from "../Pages/Job/Grid/JobLeftSidebar";
import JobRightSidebar from "../Pages/Job/Grid/JobRightSidebar";
import JobLeftList from "../Pages/Job/Listing/JobLeftList";
import JobListNoSidebar from "../Pages/Job/Listing/JobListNoSidebar";
import JobRightList from "../Pages/Job/Listing/JobRightList";
import JobAd from "../Pages/Job/Other/JobAd";
import JobBothSidebar from "../Pages/Job/Other/JobBothSidebar";
import JobFilter from "../Pages/Job/Other/JobFilter";
import JobFullList from "../Pages/Job/Other/JobFullList";
import JobInfiniteScroll from "../Pages/Job/Other/JobInfiniteScroll";
import JobLeftDrawer from "../Pages/Job/Other/JobLeftDrawer";
import JobListStyle2 from "../Pages/Job/Other/JobListStyle2";
import JobLoadMore from "../Pages/Job/Other/JobLoadMore";
import JobRightDrawer from "../Pages/Job/Other/JobRightDrawer";
import JobWishlist from "../Pages/Job/Wishlist";
import BlogAudioLayout from "../Pages/Pages/Blog/BlogDetail/BlogAudioLayout";
import BlogLeftClassic from "../Pages/Pages/Blog/BlogDetail/BlogLeftClassic";
import BlogQuoteLayout from "../Pages/Pages/Blog/BlogDetail/BlogQuoteLayout";
import BlogRightClassic from "../Pages/Pages/Blog/BlogDetail/BlogRightClassic";
import BlogSliderLayout from "../Pages/Pages/Blog/BlogDetail/BlogSliderLayout";
import BlogVideoLayout from "../Pages/Pages/Blog/BlogDetail/BlogVideoLayout";
import Blog2Grid from "../Pages/Pages/Blog/BlogPage/Blog2Grid";
import Blog2GridRight from "../Pages/Pages/Blog/BlogPage/Blog2GridRight";
import Blog3Masonry from "../Pages/Pages/Blog/BlogPage/Blog3Masonry";
import BlogInfiniteScroll from "../Pages/Pages/Blog/BlogPage/BlogInfiniteScroll";
import BlogLayout1 from "../Pages/Pages/Blog/BlogPage/BlogLayout1";
import BlogLeftList from "../Pages/Pages/Blog/BlogPage/BlogLeftList";
import BlogLeftSidebar from "../Pages/Pages/Blog/BlogPage/BlogLeftSidebar";
import BlogLoadMore from "../Pages/Pages/Blog/BlogPage/BlogLoadMore";
import BlogNoSidebar from "../Pages/Pages/Blog/BlogPage/BlogNoSidebar";
import BlogRightList from "../Pages/Pages/Blog/BlogPage/BlogRightList";
import BlogRightSidebar from "../Pages/Pages/Blog/BlogPage/BlogRightSidebar";
import BlogTitle from "../Pages/Pages/Blog/BlogPage/BlogTitle";
import BlogToSlider from "../Pages/Pages/Blog/BlogPage/BlogToSlider";
import AboutUs1 from "../Pages/Pages/Other/AboutUs1";
import AboutUs2 from "../Pages/Pages/Other/AboutUs2";
import AboutUs3 from "../Pages/Pages/Other/AboutUs3";
import Condition from "../Pages/Pages/Other/Condition";
import ContactUs1 from "../Pages/Pages/Other/ContactUs1";
import ContactUs2 from "../Pages/Pages/Other/ContactUs2";
import ContactUs3 from "../Pages/Pages/Other/ContactUs3";
import Error404 from "../Pages/Pages/Other/Error404";
import Faq from "../Pages/Pages/Other/Faq";
import Login1 from "../Pages/Pages/Other/Login1";
import Login2 from "../Pages/Pages/Other/Login2";
import Login3 from "../Pages/Pages/Other/Login3";
import Login4 from "../Pages/Pages/Other/Login4";
import Pricing from "../Pages/Pages/Other/Pricing";
import Privacy from "../Pages/Pages/Other/Privacy";
import Services from "../Pages/Pages/Other/Services";
import SignUp1 from "../Pages/Pages/Other/SignUp1";
import SignUp2 from "../Pages/Pages/Other/SignUp2";
import SignUp3 from "../Pages/Pages/Other/SignUp3";
import Team from "../Pages/Pages/Other/Team";
import Testimonial from "../Pages/Pages/Other/Testimonial";
import UserDashboard from "../Pages/Pages/Other/UserDashboard";
import PortfolioDetail1 from "../Pages/Pages/Portfolio/Detail/PortfolioDetail1";
import PortfolioDetail2 from "../Pages/Pages/Portfolio/Detail/PortfolioDetail2";
import Portfolio2Grid from "../Pages/Pages/Portfolio/PortfolioPage/Portfolio2Grid";
import Portfolio3Grid from "../Pages/Pages/Portfolio/PortfolioPage/Portfolio3Grid";
import Portfolio4Grid from "../Pages/Pages/Portfolio/PortfolioPage/Portfolio4Grid";
import PortfolioBoxSlider from "../Pages/Pages/Portfolio/PortfolioPage/PortfolioBoxSlider";
import PortfolioCreativeFull from "../Pages/Pages/Portfolio/PortfolioPage/PortfolioCreativeFull";
import PortfolioGalleryIcon from "../Pages/Pages/Portfolio/PortfolioPage/PortfolioGalleryIcon";
import PortfolioImageChange from "../Pages/Pages/Portfolio/PortfolioPage/PortfolioImageChange";
import PortfolioModern from "../Pages/Pages/Portfolio/PortfolioPage/PortfolioModern";
import PortfolioParallax from "../Pages/Pages/Portfolio/PortfolioPage/PortfolioParallax";
import PortfolioTransform from "../Pages/Pages/Portfolio/PortfolioPage/PortfolioTransform";
import PortfolioVerticalSlider from "../Pages/Pages/Portfolio/PortfolioPage/PortfolioVerticalSlider";
import PortfolioVideoModal from "../Pages/Pages/Portfolio/PortfolioPage/PortfolioVideoModal";
import PropertyAccordion from "../Pages/Property/Detail/PropertyAccordion";
import PropertyAnimatedIcon from "../Pages/Property/Detail/PropertyAnimatedIcon";
import PropertyClassic from "../Pages/Property/Detail/PropertyClassic";
import PropertyImageSlider from "../Pages/Property/Detail/PropertyImageSlider";
import PropertyScrollspy from "../Pages/Property/Detail/PropertyScrollspy";
import PropertySidebarLayout from "../Pages/Property/Detail/PropertySidebarLayout";
import PropertySticky from "../Pages/Property/Detail/PropertySticky";
import PropertyTab from "../Pages/Property/Detail/PropertyTab";
import PropertyThumbSlider from "../Pages/Property/Detail/PropertyThumbSlider";
import PropertyVideo from "../Pages/Property/Detail/PropertyVideo";
import Property2Grid from "../Pages/Property/Grid/Property2Grid";
import Property2RightGrid from "../Pages/Property/Grid/Property2RightGrid";
import Property3Grid from "../Pages/Property/Grid/Property3Grid";
import Property3RightGrid from "../Pages/Property/Grid/Property3RightGrid";
import Property4Grid from "../Pages/Property/Grid/Property4Grid";
import PropertyGridNoSidebar from "../Pages/Property/Grid/PropertyGridNoSidebar";
import PropertyLeftList from "../Pages/Property/Listing/PropertyLeftList";
import PropertyRightList from "../Pages/Property/Listing/PropertyRightList";
import PropertyThumbList from "../Pages/Property/Listing/PropertyThumbList";
import PropertyVideoList from "../Pages/Property/Listing/PropertyVideoList";
import PropertyWithoutSlider from "../Pages/Property/Listing/PropertyWithoutSlider";
import MapLeft from "../Pages/Property/Map/MapLeft";
import MapList from "../Pages/Property/Map/MapList";
import MapModal from "../Pages/Property/Map/MapModal";
import MapRight from "../Pages/Property/Map/MapRight";
import PropertyGridWithoutSlider from "../Pages/Property/Other/PropertyGridWithoutSlider";
import PropertyInfiniteScroll from "../Pages/Property/Other/PropertyInfiniteScroll";
import PropertyLeftDrawer from "../Pages/Property/Other/PropertyLeftDrawer";
import PropertyLoadMore from "../Pages/Property/Other/PropertyLoadMore";
import PropertyParallax from "../Pages/Property/Other/PropertyParallax";
import PropertyRightDrawer from "../Pages/Property/Other/PropertyRightDrawer";
import PropertyWishlist from "../Pages/Property/Wishlist";
import { RouteList } from "./RouteList";

const Router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: "*", element: <Error404 /> },

        //Home
        { path: RouteList.Home.CarDemo1, element: <CarDemo1 />, index: true },
        { path: RouteList.Home.CarDemo2, element: <CarDemo2 /> },
        { path: RouteList.Home.JobDemo1, element: <JobDemo1 /> },
        { path: RouteList.Home.JobDemo2, element: <JobDemo2 /> },
        { path: RouteList.Home.JobDemo3, element: <JobDemo3 /> },
        { path: RouteList.Home.PropertyDemo1, element: <PropertyDemo1 /> },
        { path: RouteList.Home.PropertyDemo2, element: <PropertyDemo2 /> },

        //Property-Grid
        { path: RouteList.Property.Grid.Property2Grid, element: <Property2Grid /> },
        { path: RouteList.Property.Grid.Property2RightGrid, element: <Property2RightGrid /> },
        { path: RouteList.Property.Grid.Property3Grid, element: <Property3Grid /> },
        { path: RouteList.Property.Grid.Property3RightGrid, element: <Property3RightGrid /> },
        { path: RouteList.Property.Grid.Property4Grid, element: <Property4Grid /> },
        { path: RouteList.Property.Grid.PropertyGridNoSidebar, element: <PropertyGridNoSidebar /> },

        //Property-Listing
        { path: RouteList.Property.Listing.PropertyLeftList, element: <PropertyLeftList /> },
        { path: RouteList.Property.Listing.PropertyRightList, element: <PropertyRightList /> },
        { path: RouteList.Property.Listing.PropertyVideoList, element: <PropertyVideoList /> },
        { path: RouteList.Property.Listing.PropertyThumbList, element: <PropertyThumbList /> },
        { path: RouteList.Property.Listing.PropertyWithoutSlider, element: <PropertyWithoutSlider /> },

        //Property-Other
        { path: RouteList.Property.Other.PropertyLeftDrawer, element: <PropertyLeftDrawer /> },
        { path: RouteList.Property.Other.PropertyRightDrawer, element: <PropertyRightDrawer /> },
        { path: RouteList.Property.Other.PropertyInfiniteScroll, element: <PropertyInfiniteScroll /> },
        { path: RouteList.Property.Other.PropertyLoadMore, element: <PropertyLoadMore /> },
        { path: RouteList.Property.Other.PropertyParallax, element: <PropertyParallax /> },
        { path: RouteList.Property.Other.PropertyGridWithoutSlider, element: <PropertyGridWithoutSlider /> },

        //Property-Map
        { path: RouteList.Property.Map.MapLeft, element: <MapLeft /> },
        { path: RouteList.Property.Map.MapRight, element: <MapRight /> },
        { path: RouteList.Property.Map.MapList, element: <MapList /> },
        { path: RouteList.Property.Map.MapModal, element: <MapModal /> },

        //Property-Detail
        { path: RouteList.Property.Detail.PropertyClassic, element: <PropertyClassic /> },
        { path: RouteList.Property.Detail.PropertyScrollspy, element: <PropertyScrollspy /> },
        { path: RouteList.Property.Detail.PropertyTab, element: <PropertyTab /> },
        { path: RouteList.Property.Detail.PropertyAccordion, element: <PropertyAccordion /> },
        { path: RouteList.Property.Detail.PropertyImageSlider, element: <PropertyImageSlider /> },
        { path: RouteList.Property.Detail.PropertySticky, element: <PropertySticky /> },
        { path: RouteList.Property.Detail.PropertySidebarLayout, element: <PropertySidebarLayout /> },
        { path: RouteList.Property.Detail.PropertyVideo, element: <PropertyVideo /> },
        { path: RouteList.Property.Detail.PropertyThumbSlider, element: <PropertyThumbSlider /> },
        { path: RouteList.Property.Detail.PropertyAnimatedIcon, element: <PropertyAnimatedIcon /> },

        //Property-Wishlist
        { path: RouteList.Property.PropertyWishlist, element: <PropertyWishlist /> },

        //Car-Grid
        { path: RouteList.Car.Grid.Car2Grid, element: <Car2Grid /> },
        { path: RouteList.Car.Grid.Car2RightGrid, element: <Car2RightGrid /> },
        { path: RouteList.Car.Grid.Car3Grid, element: <Car3Grid /> },
        { path: RouteList.Car.Grid.Car3RightGrid, element: <Car3RightGrid /> },
        { path: RouteList.Car.Grid.CarNoSidebar, element: <CarNoSidebar /> },

        //Car-Listing
        { path: RouteList.Car.Listing.CarLeftList, element: <CarLeftList /> },
        { path: RouteList.Car.Listing.CarRightList, element: <CarRightList /> },

        //Car-Other
        { path: RouteList.Car.Other.CarLeftDrawer, element: <CarLeftDrawer /> },
        { path: RouteList.Car.Other.CarRightDrawer, element: <CarRightDrawer /> },
        { path: RouteList.Car.Other.CarInfiniteScroll, element: <CarInfiniteScroll /> },
        { path: RouteList.Car.Other.CarLoadMore, element: <CarLoadMore /> },
        { path: RouteList.Car.Other.CarTopCategory, element: <CarTopCategory /> },
        { path: RouteList.Car.Other.CarTopFilter, element: <CarTopFilter /> },
        { path: RouteList.Car.Other.CarWithoutSlider, element: <CarWithoutSlider /> },

        //Car-Detail
        { path: RouteList.Car.Detail.CarClassic, element: <CarClassic /> },
        { path: RouteList.Car.Detail.CarLayout1, element: <CarLayout1 /> },
        { path: RouteList.Car.Detail.CarLayout2, element: <CarLayout2 /> },
        { path: RouteList.Car.Detail.CarSlider, element: <CarSlider /> },
        { path: RouteList.Car.Detail.CarExpandSlider, element: <CarExpandSlider /> },
        { path: RouteList.Car.Detail.CarModernSlider, element: <CarModernSlider /> },
        { path: RouteList.Car.Detail.CarScrollspy, element: <CarScrollspy /> },
        { path: RouteList.Car.Detail.CarVideo, element: <CarVideo /> },
        { path: RouteList.Car.Detail.CarClassicSlider, element: <CarClassicSlider /> },
        { path: RouteList.Car.Detail.CarThumbnailSlider, element: <CarThumbnailSlider /> },

        //Car-Wishlist
        { path: RouteList.Car.CarWishlist, element: <CarWishlist /> },

        //Job-Grid
        { path: RouteList.Job.Grid.JobGridProgress, element: <JobGridProgress /> },
        { path: RouteList.Job.Grid.JobGridType2, element: <JobGridType2 /> },
        { path: RouteList.Job.Grid.JobGridType3, element: <JobGridType3 /> },
        { path: RouteList.Job.Grid.JobLeftSidebar, element: <JobLeftSidebar /> },
        { path: RouteList.Job.Grid.JobRightSidebar, element: <JobRightSidebar /> },
        { path: RouteList.Job.Grid.JobGridNoSidebar, element: <JobGridNoSidebar /> },

        //Job-Listing
        { path: RouteList.Job.Listing.JobLeftList, element: <JobLeftList /> },
        { path: RouteList.Job.Listing.JobRightList, element: <JobRightList /> },
        { path: RouteList.Job.Listing.JobListNoSidebar, element: <JobListNoSidebar /> },

        //Job-Other
        { path: RouteList.Job.Other.JobLeftDrawer, element: <JobLeftDrawer /> },
        { path: RouteList.Job.Other.JobRightDrawer, element: <JobRightDrawer /> },
        { path: RouteList.Job.Other.JobInfiniteScroll, element: <JobInfiniteScroll /> },
        { path: RouteList.Job.Other.JobLoadMore, element: <JobLoadMore /> },
        { path: RouteList.Job.Other.JobAd, element: <JobAd /> },
        { path: RouteList.Job.Other.JobFilter, element: <JobFilter /> },
        { path: RouteList.Job.Other.JobFullList, element: <JobFullList /> },
        { path: RouteList.Job.Other.JobBothSidebar, element: <JobBothSidebar /> },
        { path: RouteList.Job.Other.JobListStyle2, element: <JobListStyle2 /> },

        //Job-Detail
        { path: RouteList.Job.Detail.JobDetail1, element: <JobDetail1 /> },
        { path: RouteList.Job.Detail.JobDetail2, element: <JobDetail2 /> },
        { path: RouteList.Job.Detail.JobDetail3, element: <JobDetail3 /> },
        { path: RouteList.Job.Detail.JobDetail4, element: <JobDetail4 /> },
        { path: RouteList.Job.Detail.JobDetail5, element: <JobDetail5 /> },

        //Job-Wishlist
        { path: RouteList.Job.JobWishlist, element: <JobWishlist /> },

        //Blog-Pages
        { path: RouteList.Pages.Blog.BlogLeftSidebar, element: <BlogLeftSidebar /> },
        { path: RouteList.Pages.Blog.BlogRightSidebar, element: <BlogRightSidebar /> },
        { path: RouteList.Pages.Blog.Blog2Grid, element: <Blog2Grid /> },
        { path: RouteList.Pages.Blog.Blog2GridRight, element: <Blog2GridRight /> },
        { path: RouteList.Pages.Blog.BlogTitle, element: <BlogTitle /> },
        { path: RouteList.Pages.Blog.BlogLayout1, element: <BlogLayout1 /> },
        { path: RouteList.Pages.Blog.BlogNoSidebar, element: <BlogNoSidebar /> },
        { path: RouteList.Pages.Blog.BlogToSlider, element: <BlogToSlider /> },
        { path: RouteList.Pages.Blog.Blog3Masonry, element: <Blog3Masonry /> },
        { path: RouteList.Pages.Blog.BlogLoadMore, element: <BlogLoadMore /> },
        { path: RouteList.Pages.Blog.BlogLeftList, element: <BlogLeftList /> },
        { path: RouteList.Pages.Blog.BlogRightList, element: <BlogRightList /> },
        { path: RouteList.Pages.Blog.BlogInfiniteScroll, element: <BlogInfiniteScroll /> },

        //Blog-Detail
        { path: RouteList.Pages.Blog.Detail.BlogLeftClassic, element: <BlogLeftClassic /> },
        { path: RouteList.Pages.Blog.Detail.BlogRightClassic, element: <BlogRightClassic /> },
        { path: RouteList.Pages.Blog.Detail.BlogVideoLayout, element: <BlogVideoLayout /> },
        { path: RouteList.Pages.Blog.Detail.BlogAudioLayout, element: <BlogAudioLayout /> },
        { path: RouteList.Pages.Blog.Detail.BlogSliderLayout, element: <BlogSliderLayout /> },
        { path: RouteList.Pages.Blog.Detail.BlogQuoteLayout, element: <BlogQuoteLayout /> },

        //Portfolio-Page
        { path: RouteList.Pages.Portfolio.Portfolio2Grid, element: <Portfolio2Grid /> },
        { path: RouteList.Pages.Portfolio.Portfolio3Grid, element: <Portfolio3Grid /> },
        { path: RouteList.Pages.Portfolio.Portfolio4Grid, element: <Portfolio4Grid /> },
        { path: RouteList.Pages.Portfolio.PortfolioTransform, element: <PortfolioTransform /> },
        { path: RouteList.Pages.Portfolio.PortfolioVideoModal, element: <PortfolioVideoModal /> },
        { path: RouteList.Pages.Portfolio.PortfolioGalleryIcon, element: <PortfolioGalleryIcon /> },
        { path: RouteList.Pages.Portfolio.PortfolioImageChange, element: <PortfolioImageChange /> },
        { path: RouteList.Pages.Portfolio.PortfolioBoxSlider, element: <PortfolioBoxSlider /> },
        { path: RouteList.Pages.Portfolio.PortfolioParallax, element: <PortfolioParallax /> },
        { path: RouteList.Pages.Portfolio.PortfolioVerticalSlider, element: <PortfolioVerticalSlider /> },
        { path: RouteList.Pages.Portfolio.PortfolioCreativeFull, element: <PortfolioCreativeFull /> },
        { path: RouteList.Pages.Portfolio.PortfolioModern, element: <PortfolioModern /> },

        //Portfolio-Detail
        { path: RouteList.Pages.Portfolio.Detail.PortfolioDetail1, element: <PortfolioDetail1 /> },
        { path: RouteList.Pages.Portfolio.Detail.PortfolioDetail2, element: <PortfolioDetail2 /> },

        //Other-Pages
        { path: RouteList.Pages.Other.AboutUs1, element: <AboutUs1 /> },
        { path: RouteList.Pages.Other.AboutUs2, element: <AboutUs2 /> },
        { path: RouteList.Pages.Other.AboutUs3, element: <AboutUs3 /> },
        { path: RouteList.Pages.Other.ContactUs1, element: <ContactUs1 /> },
        { path: RouteList.Pages.Other.ContactUs2, element: <ContactUs2 /> },
        { path: RouteList.Pages.Other.ContactUs3, element: <ContactUs3 /> },
        { path: RouteList.Pages.Other.Services, element: <Services /> },
        { path: RouteList.Pages.Other.Team, element: <Team /> },
        { path: RouteList.Pages.Other.Pricing, element: <Pricing /> },
        { path: RouteList.Pages.Other.Testimonial, element: <Testimonial /> },
        { path: RouteList.Pages.Other.Faq, element: <Faq /> },
        { path: RouteList.Pages.Other.UserDashboard, element: <UserDashboard /> },
        { path: RouteList.Pages.Other.Privacy, element: <Privacy /> },
        { path: RouteList.Pages.Other.Condition, element: <Condition /> },
        { path: RouteList.Pages.Other.Error404, element: <Error404 /> },
        { path: RouteList.Pages.Other.Login1, element: <Login1 /> },
        { path: RouteList.Pages.Other.Login2, element: <Login2 /> },
        { path: RouteList.Pages.Other.Login3, element: <Login3 /> },
        { path: RouteList.Pages.Other.Login4, element: <Login4 /> },
        { path: RouteList.Pages.Other.SignUp1, element: <SignUp1 /> },
        { path: RouteList.Pages.Other.SignUp2, element: <SignUp2 /> },
        { path: RouteList.Pages.Other.SignUp3, element: <SignUp3 /> },
      ],
    },
  ]
  // {
  //   basename: "/fuso",
  // }
);

export default Router;
