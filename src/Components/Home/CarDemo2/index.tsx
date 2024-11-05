import { Fragment, useEffect } from "react";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "../../../ReduxToolkit/Reducers/ProductReducers";
import AboutUs from "./AboutUs";
import Blogs from "./Blogs";
import CarHomeSection from "./CarHomeSection";
import Categories from "./Category";
import FeaturedCar from "./FeaturedCar";
import LogoSection from "./LogoSection";
import Service from "./Service";
import StepBooking from "./StepBooking";
import TabSection from "./TabSection";
import Testimonials from "./Testimonials";

const CarDemo2Container = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(fetchCategoryApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <CarHomeSection />
      <TabSection />
      <LogoSection swiperClass="logo-car2-slider" sectionClass="section-t-lg-space" />
      <AboutUs />
      <Categories />
      <FeaturedCar />
      <StepBooking />
      <Service />
      <Blogs />
      <Testimonials />
    </Fragment>
  );
};

export default CarDemo2Container;
