import { Fragment } from "react";
import About from "./About";
import CompanyLogo from "./CompanyLogo";
import JobHomeSection from "./JobHomeSection";
import Step from "./Step";

const JobDemo1Container = () => {
  return (
    <Fragment>
      <JobHomeSection />
      <CompanyLogo />
      <Step />
      <About />
    </Fragment>
  );
};

export default JobDemo1Container;
