import { Fragment, useEffect } from "react";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "../../../ReduxToolkit/Reducers/ProductReducers";
import Category from "./Category";
import GoalsAndService from "./GoalsAndService";
import JobHomeSection from "./JobHomeSection";
import JobOpenings from "./JobOpenings";
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
      <GoalsAndService />
      <TestimonialAndNewsletter />
    </Fragment>
  );
};

export default JobDemo2Container;
