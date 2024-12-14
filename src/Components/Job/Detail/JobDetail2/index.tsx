import { Fragment } from "react";
import JobBreadcrumb from "../../../CommonComponents/Breadcrumbs/JobBreadcrumb";
import JobDetail from "../../../CommonComponents/ProductDetail/JobDetail";

const JobDetail2Container = () => {
  return (
    <Fragment>
      <JobBreadcrumb type="style_2" />
      <JobDetail detailType="style_2" />
    </Fragment>
  );
};

export default JobDetail2Container;
