import { Fragment, useEffect } from "react";
import About from "./About";
import CarHomeSection from "./CarHomeSection";
import Categories from "./Categories";
import Experience from "./Experience";
import Offer from "./Offer";
import Product from "./Product";
import Service from "./Service";
import Testimonials from "./Testimonials";
import Work from "./Work";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "../../../ReduxToolkit/Reducers/ProductReducers";

const CarDemo1Container = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(fetchCategoryApiData());
  }, [dispatch]);
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
