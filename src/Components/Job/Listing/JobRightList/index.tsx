import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import { RouteList } from "../../../../Routers/RouteList";
import GridView from "../../../Property/Common/GridView";

const JobRightListContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Job Listing" url={RouteList.Home.JobDemo1} mainClass="job-breadcrumbs-section" />
      <GridView type="job" sectionClass="job-list-section section-b-space" filterTagsClass="job-list-header" gridType="list-view" side="right" jobBoxStyle="listing" gridSize={1} />
    </Fragment>
  );
};

export default JobRightListContainer;
