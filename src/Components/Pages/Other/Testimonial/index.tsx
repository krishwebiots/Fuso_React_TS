import { Fragment } from "react";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import Testimonials from "../../../Home/Common/Testimonials";
import LogoSection from "../../../Home/Common/LogoSection";

const TestimonialContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Testimonial" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <Testimonials type="testimonials" />
      <LogoSection type="testimonial_logo" title="Trusted by leading brands from around the world" />
    </Fragment>
  );
};

export default TestimonialContainer;
