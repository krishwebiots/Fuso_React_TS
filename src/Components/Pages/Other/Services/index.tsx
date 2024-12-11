import { Fragment } from "react";
import { OurHappyClients } from "../../../../Constants/Constants";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import Testimonials from "../../../Home/Common/Testimonials";
import BestService from "./BestService";
import Counter from "./Counter";

const ServicesContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Services" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <BestService />
      <Counter />
      <Testimonials type={"car_demo1"} animation={false} title={OurHappyClients} />
    </Fragment>
  );
};

export default ServicesContainer;
