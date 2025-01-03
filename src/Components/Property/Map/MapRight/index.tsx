import { Fragment } from "react";
import PropertyBreadcrumb from "../../../CommonComponents/Breadcrumbs/PropertyBreadcrumb";
import SortBy from "../../../CommonComponents/SortBy";
import GridView from "../../../CommonComponents/GridView";

const MapRightContainer = () => {
  return (
    <Fragment>
      <PropertyBreadcrumb />
      <SortBy />
      <GridView type="property" sectionClass="section-b-space" side="no" map mapSide="right" carShow={4} />
    </Fragment>
  );
};

export default MapRightContainer;
