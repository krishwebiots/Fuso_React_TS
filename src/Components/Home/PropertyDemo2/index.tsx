import { Fragment, useEffect } from "react";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "../../../ReduxToolkit/Reducers/ProductReducers";
import Categories from "./Categories";
import City from "./City";
import Counter from "./Counter";
import Experience from "./Experience";
import Featured from "./Featured";
import PropertyHomeSection from "./PropertyHomeSection";
import Service from "./Service";
import Team from "./Team";
import Testimonial from "./Testimonial";
import { FeaturedProperties, RecentlyAddedProperties } from "../../../Constants/Constants";

const PropertyDemo2Container = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(fetchCategoryApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <PropertyHomeSection />
      <Categories />
      <Featured title={FeaturedProperties} data={[41, 42, 43]} label="Featured" />
      <Experience />
      <Featured title={RecentlyAddedProperties} data={[44, 45, 46]} label="New" />
      <Service />
      <City />
      <Counter />
      <Testimonial />
      <Team />
    </Fragment>
  );
};

export default PropertyDemo2Container;
