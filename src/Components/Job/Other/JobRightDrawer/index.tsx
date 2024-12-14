import { Fragment } from "react";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import GridView from "../../../Property/Common/GridView";

const JobRightDrawerContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Job Listing" url={RouteList.Home.JobDemo1} mainClass="job-breadcrumbs-section" />
      <GridView type="job" sectionClass="job-grid-section" filterTagsClass="job-list-header" side="no" offcanvasSide="right" gridSize={3} carShow={9} />
    </Fragment>
  );
};

export default JobRightDrawerContainer;
