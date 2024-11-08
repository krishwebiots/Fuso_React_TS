import { Fragment, useEffect } from "react";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "../../../ReduxToolkit/Reducers/ProductReducers";
import About from "./About";
import AboutSlider from "./AboutSlider";
import Category from "./Category";
import CompanyLogo from "./CompanyLogo";
import JobHere from "./JobHere";
import JobHiring from "./JobHiring";
import JobHomeSection from "./JobHomeSection";
import Newsletter from "./Newsletter";
import Step from "./Step";

const JobDemo1Container = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(fetchCategoryApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <JobHomeSection />
      <CompanyLogo />
      <JobHere />
      <Step />
      <Category />
      <JobHiring />
      <About />
      <AboutSlider />
      <Newsletter />
    </Fragment>
  );
};

export default JobDemo1Container;
