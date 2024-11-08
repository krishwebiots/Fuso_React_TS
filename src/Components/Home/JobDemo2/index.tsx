import { Fragment, useEffect } from "react";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "../../../ReduxToolkit/Reducers/ProductReducers";
import Category from "./Category";
import Goals from "./Goals";
import JobHomeSection from "./JobHomeSection";
import JobOpenings from "./JobOpenings";
import Service from "./Service";
import TestimonialAndNewsletter from "./TestimonialAndNewsletter";

const JobDemo2Container = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(fetchCategoryApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <JobHomeSection />
      <Category />
      <JobOpenings />
      <Goals />
      <Service />
      <TestimonialAndNewsletter />
    </Fragment>
  );
};

export default JobDemo2Container;
