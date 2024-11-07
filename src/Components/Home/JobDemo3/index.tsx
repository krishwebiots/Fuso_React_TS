import { Fragment, useEffect } from "react";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "../../../ReduxToolkit/Reducers/ProductReducers";
import LogoSection from "../Common/LogoSection";
import AboutAndJobOpening from "./AboutAndJobOpening";
import InterviewQuestion from "./InterviewQuestion";
import JobCitiesAndCompany from "./JobCitiesAndCompany";
import JobHomeSection from "./JobHomeSection";

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
      <JobCitiesAndCompany />
      <InterviewQuestion />
    </Fragment>
  );
};

export default JobDemo3Container;
