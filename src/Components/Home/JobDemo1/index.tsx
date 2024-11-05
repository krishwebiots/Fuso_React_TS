import { Fragment, useEffect } from "react";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "../../../ReduxToolkit/Reducers/ProductReducers";
import AboutAndAboutSlider from "./AboutAndAboutSlider";
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
      <AboutAndAboutSlider />
      <Newsletter />
    </Fragment>
  );
};

export default JobDemo1Container;
