import { Fragment } from "react";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import GridView from "../../../Property/Common/GridView";

const JobLoadMoreContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Job Listing" url={RouteList.Home.JobDemo1} mainClass="job-breadcrumbs-section" />
      <GridView type="job" sectionClass="job-grid-section section-b-space car-shop-section car-product-section" filterTagsClass="job-list-header" scrollType="load_more" />
    </Fragment>
  );
};

export default JobLoadMoreContainer;
