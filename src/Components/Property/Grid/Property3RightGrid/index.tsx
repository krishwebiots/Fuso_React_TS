import { Fragment } from "react";
import PropertyBreadcrumb from "../../../CommonComponents/Breadcrumbs/PropertyBreadcrumb";
import SortBy from "../../../CommonComponents/SortBy";
import GridView from "../../../CommonComponents/GridView";

const Property2RightGridContainer = () => {
  return (
    <Fragment>
      <PropertyBreadcrumb />
      <SortBy />
      <GridView type="property" side="right" gridSize={3} carShow={9} />
    </Fragment>
  );
};

export default Property2RightGridContainer;
