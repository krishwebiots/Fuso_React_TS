import { Fragment } from "react";
import PropertyBreadcrumb from "../../../CommonComponents/Breadcrumbs/PropertyBreadcrumb";
import SortBy from "../../../CommonComponents/Sortby";
import GridView from "../../Common/GridView";

const Property3RightGridContainer = () => {
  return (
    <Fragment>
      <PropertyBreadcrumb />
      <SortBy />
      <GridView type="property" side="right" />
    </Fragment>
  );
};

export default Property3RightGridContainer;
