import { createBrowserRouter } from "react-router-dom";
import { RouteList } from "./RouteList";
import CarDemo1 from "../Pages/Home/CarDemo1";
import Layout from "../Layout";
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
    ],
  },
]);

export default Router;
