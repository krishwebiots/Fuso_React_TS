import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import CarDemo1 from "../Pages/Home/CarDemo1";
import CarDemo2 from "../Pages/Home/CarDemo2";
import JobDemo1 from "../Pages/Home/JobDemo1";
import JobDemo2 from "../Pages/Home/JobDemo2";
import JobDemo3 from "../Pages/Home/JobDemo3";
import PropertyDemo1 from "../Pages/Home/PropertyDemo1";
import PropertyDemo2 from "../Pages/Home/PropertyDemo2";
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
import MapRight from "../Pages/Property/Map/MapRight";
import PropertyGridWithoutSlider from "../Pages/Property/Other/PropertyGridWithoutSlider";
import PropertyInfiniteScroll from "../Pages/Property/Other/PropertyInfiniteScroll";
import PropertyLeftDrawer from "../Pages/Property/Other/PropertyLeftDrawer";
import PropertyLoadMore from "../Pages/Property/Other/PropertyLoadMore";
import PropertyParallax from "../Pages/Property/Other/PropertyParallax";
import PropertyRightDrawer from "../Pages/Property/Other/PropertyRightDrawer";
import { RouteList } from "./RouteList";
import MapModal from "../Pages/Property/Map/MapModal";
import PropertyClassic from "../Pages/Property/Detail/PropertyClassic";

const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: RouteList.Home.CarDemo1, element: <CarDemo1 />, index: true },
      { path: RouteList.Home.CarDemo2, element: <CarDemo2 /> },
      { path: RouteList.Home.JobDemo1, element: <JobDemo1 /> },
      { path: RouteList.Home.JobDemo2, element: <JobDemo2 /> },
      { path: RouteList.Home.JobDemo3, element: <JobDemo3 /> },
      { path: RouteList.Home.PropertyDemo1, element: <PropertyDemo1 /> },
      { path: RouteList.Home.PropertyDemo2, element: <PropertyDemo2 /> },
      { path: RouteList.Property.Grid.Property2Grid, element: <Property2Grid /> },
      { path: RouteList.Property.Grid.Property2RightGrid, element: <Property2RightGrid /> },
      { path: RouteList.Property.Grid.Property3Grid, element: <Property3Grid /> },
      { path: RouteList.Property.Grid.Property3RightGrid, element: <Property3RightGrid /> },
      { path: RouteList.Property.Grid.Property4Grid, element: <Property4Grid /> },
      { path: RouteList.Property.Grid.PropertyGridNoSidebar, element: <PropertyGridNoSidebar /> },
      { path: RouteList.Property.Listing.PropertyLeftList, element: <PropertyLeftList /> },
      { path: RouteList.Property.Listing.PropertyRightList, element: <PropertyRightList /> },
      { path: RouteList.Property.Listing.PropertyVideoList, element: <PropertyVideoList /> },
      { path: RouteList.Property.Listing.PropertyThumbList, element: <PropertyThumbList /> },
      { path: RouteList.Property.Listing.PropertyWithoutSlider, element: <PropertyWithoutSlider /> },
      { path: RouteList.Property.Other.PropertyLeftDrawer, element: <PropertyLeftDrawer /> },
      { path: RouteList.Property.Other.PropertyRightDrawer, element: <PropertyRightDrawer /> },
      { path: RouteList.Property.Other.PropertyInfiniteScroll, element: <PropertyInfiniteScroll /> },
      { path: RouteList.Property.Other.PropertyLoadMore, element: <PropertyLoadMore /> },
      { path: RouteList.Property.Other.PropertyParallax, element: <PropertyParallax /> },
      { path: RouteList.Property.Other.PropertyGridWithoutSlider, element: <PropertyGridWithoutSlider /> },
      { path: RouteList.Property.Map.MapLeft, element: <MapLeft /> },
      { path: RouteList.Property.Map.MapRight, element: <MapRight /> },
      { path: RouteList.Property.Map.MapList, element: <MapList /> },
      { path: RouteList.Property.Map.MapModal, element: <MapModal /> },
      { path: RouteList.Property.Detail.PropertyClassic, element: <PropertyClassic /> },
    ],
  },
]);

export default Router;
