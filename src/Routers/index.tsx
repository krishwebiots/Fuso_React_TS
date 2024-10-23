import { createBrowserRouter } from "react-router-dom";
import { RouteList } from "./RouteList";
import CarDemo1 from "../Pages/Home/CarDemo1";
import Layout from "../Layout";

const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: RouteList.Home.CarDemo1, element: <CarDemo1/>, index: true },
    ],
  },
]);

export default Router;
