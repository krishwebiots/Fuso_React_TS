import { Fragment } from "react";
import PropertyBreadcrumb from "../../../CommonComponents/Breadcrumbs/PropertyBreadcrumb";
import SortBy from "../../../CommonComponents/SortBy";
import GridView from "../../Common/GridView";

const MapRightContainer = () => {
  return (
    <Fragment>
      <PropertyBreadcrumb />
      <SortBy />
      <GridView type={"property"} side="no" map mapSide="right" carShow={4} />
    </Fragment>
  );
};

export default MapRightContainer;
