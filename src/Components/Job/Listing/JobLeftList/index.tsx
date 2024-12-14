import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import { RouteList } from "../../../../Routers/RouteList";
import GridView from "../../../Property/Common/GridView";

const JobLeftListContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Job Listing" url={RouteList.Home.JobDemo1} mainClass="job-breadcrumbs-section" />
      <GridView type="job" sectionClass="job-list-section" filterTagsClass="job-list-header" jobBoxStyle="listing" gridSize={1} />
    </Fragment>
  );
};

export default JobLeftListContainer;
