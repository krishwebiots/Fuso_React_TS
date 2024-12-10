import { Fragment } from "react";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import About from "../../../Home/CarDemo1/About";

const AboutUs1Container = () => {
  return (
    <Fragment>
      <Breadcrumbs title="About" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <About />
    </Fragment>
  );
};

export default AboutUs1Container;
