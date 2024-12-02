import { Fragment } from "react";
import PropertyBreadcrumb from "../../../CommonComponents/Breadcrumbs/PropertyBreadcrumb";
import SortBy from "../../../CommonComponents/SortBy";
import GridView from "../../Common/GridView";

const PropertyLeftListContainer = () => {
  return (
    <Fragment>
      <PropertyBreadcrumb />
      <SortBy />
      <GridView type="property" sectionClass="property-list property-inner-section" gridType="list-view" gridSize={1} />
    </Fragment>
  );
};

export default PropertyLeftListContainer;
