import { Fragment } from "react";
import PropertyBreadcrumb from "../../../CommonComponents/Breadcrumbs/PropertyBreadcrumb";
import SortBy from "../../../CommonComponents/Sortby";
import GridView from "../../Common/GridView";

const PropertyThumbListContainer = () => {
  return (
    <Fragment>
      <PropertyBreadcrumb />
      <SortBy />
      <GridView sectionClass="property-list property-thumb-section property-inner-section" gridType="list-view" gridSize={1} view="multiple" />
    </Fragment>
  );
};

export default PropertyThumbListContainer;
