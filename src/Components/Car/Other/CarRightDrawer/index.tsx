import { Fragment } from "react";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import GridView from "../../../Property/Common/GridView";

const CarRightDrawerContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Car Shop" url={RouteList.Home.CarDemo1} mainClass="car-breadcrumbs-section" />
      <GridView type="car" sectionClass="car-shop-section car-product-section" filterTagsClass="car-list-header" side="no" gridSize={3} carShow={9} offcanvasSide="right" />
    </Fragment>
  );
};

export default CarRightDrawerContainer;
