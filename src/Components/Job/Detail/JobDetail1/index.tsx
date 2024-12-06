import { Fragment } from "react";
import JobBreadcrumb from "../../../CommonComponents/Breadcrumbs/JobBreadcrumb";
import JobDetail from "../../../Property/Common/ProductDetail/JobDetail";

const JobDetail1Container = () => {
  return (
    <Fragment>
      <JobBreadcrumb />
      <JobDetail />
    </Fragment>
  );
};

export default JobDetail1Container;
