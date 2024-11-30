import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
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
import CarWithoutSlider from "../Pages/Car/Other/CarWithoutSlider";
import CarDemo1 from "../Pages/Home/CarDemo1";
import CarDemo2 from "../Pages/Home/CarDemo2";
import JobDemo1 from "../Pages/Home/JobDemo1";
import JobDemo2 from "../Pages/Home/JobDemo2";
import JobDemo3 from "../Pages/Home/JobDemo3";
import PropertyDemo1 from "../Pages/Home/PropertyDemo1";
import PropertyDemo2 from "../Pages/Home/PropertyDemo2";
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
import CarTopFilter from "../Pages/Car/Other/CarTopFilter";
import CarClassic from "../Pages/Car/Detail/CarClassic";
import CarLayout1 from "../Pages/Car/Detail/CarLayout1";
import CarLayout2 from "../Pages/Car/Detail/CarLayout2";
import CarSlider from "../Pages/Car/Detail/CarSlider";

const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
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
    ],
  },
]);

export default Router;
