import { Fragment } from "react";
import PropertyBreadcrumb from "../../../CommonComponents/Breadcrumbs/PropertyBreadcrumb";
import SortBy from "../../../CommonComponents/SortBy";
import GridView from "../../Common/GridView";

const PropertyGridWithoutSliderContainer = () => {
  return (
    <Fragment>
      <PropertyBreadcrumb />
      <SortBy />
      <GridView type="property" gridSize={3} view="image" carShow={9} />
    </Fragment>
  );
};

export default PropertyGridWithoutSliderContainer;
