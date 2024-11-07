import { Fragment } from "react";
import Experience from "./Experience";
import PropertyHomeSection from "./PropertyHomeSection";
import Service from "./Service";
import City from "./City";

const PropertyDemo2Container = () => {
  return (
    <Fragment>
      <PropertyHomeSection />
      <Experience />
      <Service />
      <City />
    </Fragment>
  );
};

export default PropertyDemo2Container;
