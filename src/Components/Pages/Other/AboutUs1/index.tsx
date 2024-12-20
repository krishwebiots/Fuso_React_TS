import { Fragment } from "react";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import About from "../../../Home/CarDemo1/About";
import AboutSlider from "../../../Home/JobDemo1/AboutSlider";
import CarService from "./CarService";

const AboutUs1Container = () => {
  return (
    <Fragment>
      <Breadcrumbs title="About" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <About />
      <CarService />
      <AboutSlider />
    </Fragment>
  );
};

export default AboutUs1Container;
