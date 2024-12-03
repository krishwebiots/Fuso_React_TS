import { Fragment } from "react";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import { RouteList } from "../../../../Routers/RouteList";
import GridView from "../../../Property/Common/GridView";

const JobGridNoSidebarContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Job Listing" url={RouteList.Home.JobDemo1} mainClass="job-breadcrumbs-section" />
      <GridView type="job" sectionClass="job-grid-section section-b-space" filterTagsClass="job-list-header" side="no" gridSize={3} topFilterSidebar />
    </Fragment>
  );
};

export default JobGridNoSidebarContainer;
