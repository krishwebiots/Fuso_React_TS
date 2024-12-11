import { Fragment } from "react";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import Testimonials from "../../../Home/Common/Testimonials";
import PrimeCar from "./PrimeCar";
import CarService from "./CarService";

const AboutUs2Container = () => {
  return (
    <Fragment>
      <Breadcrumbs title="About" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <PrimeCar />
      <CarService />
      <Testimonials type={"car_demo1"} animation={false} />
    </Fragment>
  );
};

export default AboutUs2Container;
