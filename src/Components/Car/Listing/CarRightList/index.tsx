import { Fragment } from "react/jsx-runtime";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import GridView from "../../../CommonComponents/GridView";

const CarRightListContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Car Shop" url={RouteList.Home.CarDemo1} mainClass="car-breadcrumbs-section" />
      <GridView type="car" gridType="list-view" gridSize={1} sectionClass="car-shop-section car-product-section" filterTagsClass="car-list-header" side="right" />
    </Fragment>
  );
};

export default CarRightListContainer;
