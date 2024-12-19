import { Fragment } from "react";
import PropertyBreadcrumb from "../../../CommonComponents/Breadcrumbs/PropertyBreadcrumb";
import SortBy from "../../../CommonComponents/SortBy";
import GridView from "../../../CommonComponents/GridView";

const PropertyGridNoSidebarContainer = () => {
  return (
    <Fragment>
      <PropertyBreadcrumb />
      <SortBy />
      <GridView type="property" side="no" gridSize={3} carShow={9} topFilterSidebar />
    </Fragment>
  );
};

export default PropertyGridNoSidebarContainer;
