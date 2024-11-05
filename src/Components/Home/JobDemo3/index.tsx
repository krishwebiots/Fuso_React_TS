import { Fragment } from "react";
import JobHomeSection from "./JobHomeSection";
import LogoSection from "../CarDemo2/LogoSection";

const JobDemo3Container = () => {
  return (
    <Fragment>
      <JobHomeSection />
      <LogoSection swiperClass="logo-job3-slider" title="World best companies are hiring on hireup" />
    </Fragment>
  );
};

export default JobDemo3Container;
