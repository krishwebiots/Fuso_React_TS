import { Fragment } from "react";
import PropertyBreadcrumb from "../../../CommonComponents/Breadcrumbs/PropertyBreadcrumb";
import SortBy from "../../../CommonComponents/SortBy";
import GridView from "../../../CommonComponents/GridView";
import FilterMapModal from "../../../CommonComponents/GridView/Filter/FilterMapModal";

const MapModalContainer = () => {
  return (
    <Fragment>
      <PropertyBreadcrumb />
      <SortBy />
      <GridView type="property" gridSize={3} modalType="map-modal" carShow={9} />
      <FilterMapModal type="property" />
    </Fragment>
  );
};

export default MapModalContainer;
