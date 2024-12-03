import { Fragment } from "react";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import { RouteList } from "../../../../Routers/RouteList";
import GridView from "../../../Property/Common/GridView";

const JobGridType2Container = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Job Listing" url={RouteList.Home.JobDemo1} mainClass="job-breadcrumbs-section" />
      <GridView type="job" sectionClass="job-grid-section section-b-space" filterTagsClass="job-list-header" jobBoxStyle="type-2" gridSize={3} carShow={12} />
    </Fragment>
  );
};

export default JobGridType2Container;
