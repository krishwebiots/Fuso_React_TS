import { Fragment } from "react";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import GridView from "../../../Property/Common/GridView";

const Car3GridContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Car Shop" url={RouteList.Home.CarDemo1} mainClass="car-breadcrumbs-section" />
      <GridView sectionClass="car-shop-section car-product-section" filterTagsClass="car-list-header" gridSize={3} carShow={9} />
    </Fragment>
  );
};

export default Car3GridContainer;
