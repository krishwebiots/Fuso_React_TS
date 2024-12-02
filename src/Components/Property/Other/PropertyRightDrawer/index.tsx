import { Fragment } from "react";
import PropertyBreadcrumb from "../../../CommonComponents/Breadcrumbs/PropertyBreadcrumb";
import SortBy from "../../../CommonComponents/SortBy";
import GridView from "../../Common/GridView";

const PropertyLeftDrawerContainer = () => {
  return (
    <Fragment>
      <PropertyBreadcrumb />
      <SortBy />
      <GridView type={"property"} side="no" gridSize={3} offcanvasSide="right" carShow={9} />
    </Fragment>
  );
};

export default PropertyLeftDrawerContainer;
