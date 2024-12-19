import { Fragment } from "react";
import PropertyBreadcrumb from "../../../CommonComponents/Breadcrumbs/PropertyBreadcrumb";
import SortBy from "../../../CommonComponents/SortBy";
import GridView from "../../../CommonComponents/GridView";

const PropertyInfiniteScrollContainer = () => {
  return (
    <Fragment>
      <PropertyBreadcrumb />
      <SortBy />
      <GridView type="property" gridSize={3} scrollType="infinite" carShow={9} />
    </Fragment>
  );
};

export default PropertyInfiniteScrollContainer;
