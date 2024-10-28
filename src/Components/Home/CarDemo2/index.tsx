import { Fragment, useEffect } from "react";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "../../../ReduxToolkit/Reducers/ProductReducers";
import AboutUs from "./AboutUs";
import Blogs from "./Blogs";
import CarHomeSection from "./CarHomeSection";
import Categories from "./Categories";
import LogoSection from "./LogoSection";
import Service from "./Service";
import StepBooking from "./StepBooking";
import TabSection from "./TabSection";

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
      <LogoSection />
      <AboutUs />
      <Categories />
      <StepBooking />
      <Service />
      <Blogs />
    </Fragment>
  );
};

export default CarDemo2Container;
