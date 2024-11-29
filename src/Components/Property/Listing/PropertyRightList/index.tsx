import { Fragment } from "react";
import PropertyBreadcrumb from "../../../CommonComponents/Breadcrumbs/PropertyBreadcrumb";
import SortBy from "../../../CommonComponents/Sortby";
import GridView from "../../Common/GridView";

const PropertyRightListContainer = () => {
  return (
    <Fragment>
      <PropertyBreadcrumb />
      <SortBy />
      <GridView sectionClass="property-list property-inner-section" gridType="list-view" gridSize={1} side="right" />
    </Fragment>
  );
};

export default PropertyRightListContainer;
