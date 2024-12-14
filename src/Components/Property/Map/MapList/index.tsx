import { Fragment } from "react";
import PropertyBreadcrumb from "../../../CommonComponents/Breadcrumbs/PropertyBreadcrumb";
import SortBy from "../../../CommonComponents/SortBy";
import GridView from "../../Common/GridView";

const MapListContainer = () => {
  return (
    <Fragment>
      <PropertyBreadcrumb />
      <SortBy />
      <GridView type="property" sectionClass="section-b-space property-list property-inner-section" side="no" gridType="list-view" map gridSize={1} carShow={4} />
    </Fragment>
  );
};

export default MapListContainer;
