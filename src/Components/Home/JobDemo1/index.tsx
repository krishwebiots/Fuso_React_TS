import { Fragment, useEffect } from "react";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "../../../ReduxToolkit/Reducers/ProductReducers";
import About from "./About";
import AboutSlider from "./AboutSlider";
import JobHere from "./JobHere";
import JobHiring from "./JobHiring";
import JobHomeSection from "./JobHomeSection";
import Newsletter from "../Common/Newsletter";
import Step from "./Step";
import Categories from "../Common/Categories";
import LogoSection from "../Common/LogoSection";

const JobDemo1Container = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(fetchCategoryApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <JobHomeSection />
      <LogoSection type="job_demo1" />
      <JobHere />
      <Step />
      <Categories type="job_demo1" />
      <JobHiring />
      <About />
      <AboutSlider />
      <Newsletter type="job_demo1" />
    </Fragment>
  );
};

export default JobDemo1Container;
