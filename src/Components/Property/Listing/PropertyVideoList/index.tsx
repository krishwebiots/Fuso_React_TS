import { Fragment } from "react";
import PropertyBreadcrumb from "../../../CommonComponents/Breadcrumbs/PropertyBreadcrumb";
import SortBy from "../../../CommonComponents/Sortby";
import GridView from "../../Common/GridView";

const PropertyVideoListContainer = () => {
  return (
    <Fragment>
      <PropertyBreadcrumb />
      <SortBy />
      <GridView sectionClass="property-list property-list-video property-inner-section" gridType="list-view" gridSize={1} view="video" />
    </Fragment>
  );
};

export default PropertyVideoListContainer;
