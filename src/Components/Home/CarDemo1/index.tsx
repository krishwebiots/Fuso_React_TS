import { Fragment } from "react";
import About from "./About";
import CarHomeSection from "./CarHomeSection";
import Categories from "./Categories";
import Experience from "./Experience";
import Offer from "./Offer";
import Product from "./Product";
import Service from "./Service";
import Testimonials from "./Testimonials";
import Work from "./Work";

const CarDemo1Container = () => {
  return (
    <Fragment>
      <CarHomeSection />
      <Categories />
      <Product />
      <Service />
      <Offer />
      <Work />
      <Experience />
      <About />
      <Testimonials />
    </Fragment>
  );
};

export default CarDemo1Container;
