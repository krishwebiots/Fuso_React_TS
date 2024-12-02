import { Fragment } from "react";
import PropertyBreadcrumb from "../../../CommonComponents/Breadcrumbs/PropertyBreadcrumb";
import SortBy from "../../../CommonComponents/SortBy";
import GridView from "../../Common/GridView";

const PropertyVideoListContainer = () => {
  return (
    <Fragment>
      <PropertyBreadcrumb />
      <SortBy />
      <GridView type="property" sectionClass="property-list property-list-video property-inner-section" gridType="list-view" gridSize={1} view="video" />
    </Fragment>
  );
};

export default PropertyVideoListContainer;
