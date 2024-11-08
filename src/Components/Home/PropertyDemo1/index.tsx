import { Fragment, useEffect } from "react";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "../../../ReduxToolkit/Reducers/ProductReducers";
import AboutUs from "./AboutUs";
import Achievements from "./Achievements";
import Categories from "./Categories";
import Discovery from "./Discovery";
import Newsletter from "./Newsletter";
import PropertyFeature from "./PropertyFeature";
import PropertyHomeSection from "./PropertyHomeSection";
import Services from "./Services";
import Testimonials from "./Testimonials";

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
      <Categories />
      <Discovery />
      <Achievements />
      <Testimonials />
      <Newsletter />
    </Fragment>
  );
};

export default PropertyDemo1Container;
