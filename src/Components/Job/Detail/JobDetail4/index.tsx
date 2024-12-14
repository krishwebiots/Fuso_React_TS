import { Fragment } from "react";
import JobBreadcrumb from "../../../CommonComponents/Breadcrumbs/JobBreadcrumb";
import JobDetail from "../../../CommonComponents/ProductDetail/JobDetail";

const JobDetail4Container = () => {
  return (
    <Fragment>
      <JobBreadcrumb type="style_4" />
      <JobDetail detailType="style_4" />
    </Fragment>
  );
};

export default JobDetail4Container;
