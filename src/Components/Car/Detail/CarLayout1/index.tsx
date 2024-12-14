import { Fragment } from "react";
import CarBreadcrumb from "../../../CommonComponents/Breadcrumbs/CarBreadcrumb";
import CarDetail from "../../../CommonComponents/ProductDetail/CarDetail";

const CarLayout1Container = () => {
  return (
    <Fragment>
      <CarBreadcrumb mailClass="style-breadcrumbs-2" type="car_detail" />
      <CarDetail type="car" />
    </Fragment>
  );
};

export default CarLayout1Container;
