import { Fragment } from "react";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import Testimonials from "../../../Home/Common/Testimonials";
import Service from "../../../Home/CarDemo2/Service";
import StepBooking from "../../../Home/CarDemo2/StepBooking";
import Team from "../../../Home/Common/Team";

const AboutUs3Container = () => {
  return (
    <Fragment>
      <Breadcrumbs title="About" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <Service about />
      <StepBooking />
      <Testimonials type={"about3"} animation={false} />
      <Team type="about3" />
    </Fragment>
  );
};

export default AboutUs3Container;
