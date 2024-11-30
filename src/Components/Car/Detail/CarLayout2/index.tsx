import { Fragment } from "react";
import CarBreadcrumb from "../../../CommonComponents/Breadcrumbs/CarBreadcrumb";
import CarDetail from "../../../Property/Common/ProductDetail/CarDetail";

const CarLayout2Container = () => {
  return (
    <Fragment>
      <CarBreadcrumb mailClass="style-breadcrumbs-2" type="car_detail" multiple />
      <CarDetail type="car" />
    </Fragment>
  );
};

export default CarLayout2Container;
