import { Fragment, useEffect } from "react";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "../../../ReduxToolkit/Reducers/ProductReducers";
import LogoSection from "../Common/LogoSection";
import AboutAndJobOpening from "./AboutAndJobOpening";
import Company from "./Company";
import InterviewQuestion from "./InterviewQuestion";
import JobCities from "./JobCities";
import JobHomeSection from "./JobHomeSection";
import Newsletter from "../Common/Newsletter";

const JobDemo3Container = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(fetchCategoryApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <JobHomeSection />
      <LogoSection swiperClass="logo-job3-slider" title="World best companies are hiring on hireup" />
      <AboutAndJobOpening />
      <JobCities />
      <Company />
      <InterviewQuestion />
      <Newsletter type="job_demo3" />
    </Fragment>
  );
};

export default JobDemo3Container;
