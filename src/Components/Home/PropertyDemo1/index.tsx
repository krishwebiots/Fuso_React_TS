import { Fragment, useEffect } from "react";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "../../../ReduxToolkit/Reducers/ProductReducers";
import AboutUs from "./AboutUs";
import Achievements from "./Achievements";
import Discovery from "./Discovery";
import PropertyFeature from "./PropertyFeature";
import PropertyHomeSection from "./PropertyHomeSection";
import Services from "./Services";
import Categories from "../Common/Categories";
import Testimonials from "../Common/Testimonials";
import Newsletter from "../Common/Newsletter";

const PropertyDemo1Container = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(fetchCategoryApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <PropertyHomeSection />
      <AboutUs />
      <PropertyFeature />
      <Services />
      <Categories type="property_demo1" />
      <Discovery />
      <Achievements />
      <Testimonials type="property_demo1" />
      <Newsletter type="property_demo1" />
    </Fragment>
  );
};

export default PropertyDemo1Container;
