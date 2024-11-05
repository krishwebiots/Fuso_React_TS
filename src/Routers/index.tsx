import { createBrowserRouter } from "react-router-dom";
import { RouteList } from "./RouteList";
import CarDemo1 from "../Pages/Home/CarDemo1";
import Layout from "../Layout";
import CarDemo2 from "../Pages/Home/CarDemo2";
import JobDemo1 from "../Pages/Home/JobDemo1";
import JobDemo2 from "../Pages/Home/JobDemo2";
import JobDemo3 from "../Pages/Home/JobDemo3";

const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: RouteList.Home.CarDemo1, element: <CarDemo1 />, index: true },
      { path: RouteList.Home.CarDemo2, element: <CarDemo2 /> },
      { path: RouteList.Home.JobDemo1, element: <JobDemo1 /> },
      { path: RouteList.Home.JobDemo2, element: <JobDemo2 /> },
      { path: RouteList.Home.JobDemo3, element: <JobDemo3 /> },
      { path: RouteList.Home.PropertyDemo1, element: <JobDemo1 /> },
      { path: RouteList.Home.PropertyDemo2, element: <JobDemo1 /> },
    ],
  },
]);

export default Router;
