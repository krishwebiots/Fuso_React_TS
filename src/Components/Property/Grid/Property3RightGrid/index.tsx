import { Fragment } from "react";
import PropertyBreadcrumb from "../../../CommonComponents/Breadcrumbs/PropertyBreadcrumb";
import SortBy from "../../../CommonComponents/Sortby";
import GridView from "../../Common/GridView";

const Property2RightGridContainer = () => {
  return (
    <Fragment>
      <PropertyBreadcrumb />
      <SortBy />
      <GridView side="right" gridSize={3} carShow={9} />
    </Fragment>
  );
};

export default Property2RightGridContainer;
