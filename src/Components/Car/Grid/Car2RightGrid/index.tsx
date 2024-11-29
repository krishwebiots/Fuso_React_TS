import { Fragment } from "react";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import GridView from "../../../Property/Common/GridView";

const Car2RightGridContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Car Shop" url={RouteList.Home.CarDemo1} mainClass="car-breadcrumbs-section" />
      <GridView side="right" sectionClass="car-shop-section car-product-section" filterTagsClass="car-list-header" />
    </Fragment>
  );
};

export default Car2RightGridContainer;
