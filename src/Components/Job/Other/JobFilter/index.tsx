import { Fragment } from "react";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import GridView from "../../../Property/Common/GridView";

const JobAdContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Job Listing" url={RouteList.Home.JobDemo1} mainClass="job-breadcrumbs-section" />
      <GridView type="job" sectionClass="job-list-section section-b-space" filterTagsClass="job-list-header" jobBoxStyle="job-ad" gridSize={1} carShow={8} />
    </Fragment>
  );
};

export default JobAdContainer;
