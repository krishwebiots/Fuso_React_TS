import { Fragment } from "react";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import GridView from "../../../Property/Common/GridView";

const JobListStyle2Container = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Job Listing" url={RouteList.Home.JobDemo1} mainClass="job-breadcrumbs-section" />
      <GridView type="job" sectionClass="job-list-section" filterTagsClass="job-list-header" jobBoxStyle="listing" side="no" gridSize={2} topFilterSidebar />
    </Fragment>
  );
};

export default JobListStyle2Container;
