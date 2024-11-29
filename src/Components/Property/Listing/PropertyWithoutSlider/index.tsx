import { Fragment } from "react";
import PropertyBreadcrumb from "../../../CommonComponents/Breadcrumbs/PropertyBreadcrumb";
import SortBy from "../../../CommonComponents/Sortby";
import GridView from "../../Common/GridView";

const PropertyWithoutSliderContainer = () => {
  return (
    <Fragment>
      <PropertyBreadcrumb />
      <SortBy />
      <GridView type="property" sectionClass="property-inner-section property-list" gridType="list-view" gridSize={1} view="image" />
    </Fragment>
  );
};

export default PropertyWithoutSliderContainer;
