import { Fragment, useEffect } from "react";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "../../../ReduxToolkit/Reducers/ProductReducers";
import AboutUs from "./AboutUs";
import Blogs from "./Blogs";
import CarHomeSection from "./CarHomeSection";
import FeaturedCar from "./FeaturedCar";
import LogoSection from "../Common/LogoSection";
import Service from "./Service";
import StepBooking from "./StepBooking";
import TabSection from "./TabSection";
import Categories from "../Common/Categories";
import Testimonials from "../Common/Testimonials";
import InstagramSlider from "./InstagramSlider";

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
      <Categories type={"car_demo2"} />
      <FeaturedCar />
      <StepBooking />
      <Service />
      <Blogs />
      <Testimonials type={"car_demo2"} />
      <InstagramSlider />
    </Fragment>
  );
};

export default CarDemo2Container;
