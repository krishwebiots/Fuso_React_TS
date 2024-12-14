import { Fragment } from "react";
import CarBreadcrumb from "../../../CommonComponents/Breadcrumbs/CarBreadcrumb";
import CarDetail from "../../../CommonComponents/ProductDetail/CarDetail";

const CarClassicContainer = () => {
  return (
    <Fragment>
      <CarBreadcrumb type="car_detail" detailImages />
      <CarDetail type="car" detailImages />
    </Fragment>
  );
};

export default CarClassicContainer;
