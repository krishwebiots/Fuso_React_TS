import { Fragment } from "react";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import { RouteList } from "../../../../Routers/RouteList";
import GridView from "../../../Property/Common/GridView";

const JobGridProgressContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Job Grid" url={RouteList.Home.JobDemo1} mainClass="job-breadcrumbs-section" />
      <GridView type="job" sectionClass="job-grid-section section-b-space" filterTagsClass="job-list-header" />
    </Fragment>
  );
};

export default JobGridProgressContainer;
