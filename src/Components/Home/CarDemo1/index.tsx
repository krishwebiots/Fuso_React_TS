import { Fragment, useEffect } from "react";
import About from "./About";
import CarHomeSection from "./CarHomeSection";
import Experience from "./Experience";
import Offer from "./Offer";
import Product from "./Product";
import Service from "./Service";
import Testimonials from "../Common/Testimonials";
import Work from "./Work";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "../../../ReduxToolkit/Reducers/ProductReducers";
import Categories from "../Common/Categories";

const CarDemo1Container = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(fetchCategoryApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <CarHomeSection />
      <Categories type={"car_demo1"} />
      <Product />
      <Service />
      <Offer />
      <Work />
      <Experience />
      <About header />
      <Testimonials type={"car_demo1"} animation />
    </Fragment>
  );
};

export default CarDemo1Container;
