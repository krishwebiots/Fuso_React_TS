import { Fragment, useEffect } from "react";
import AboutUsAndPropertyFeature from "./AboutUsAndPropertyFeature";
import DiscoveryAndAchievements from "./DiscoveryAndAchievements";
import PropertyHomeSection from "./PropertyHomeSection";
import ServicesAndCategories from "./ServicesAndCategories";
import TestimonialsAndNewsletter from "./TestimonialsAndNewsletter";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "../../../ReduxToolkit/Reducers/ProductReducers";

const PropertyDemo1Container = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(fetchCategoryApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <PropertyHomeSection />
      <AboutUsAndPropertyFeature />
      <ServicesAndCategories />
      <DiscoveryAndAchievements />
      <TestimonialsAndNewsletter />
    </Fragment>
  );
};

export default PropertyDemo1Container;
