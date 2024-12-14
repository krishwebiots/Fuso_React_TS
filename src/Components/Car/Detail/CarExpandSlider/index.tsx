import { Fragment } from "react";
import CarBreadcrumb from "../../../CommonComponents/Breadcrumbs/CarBreadcrumb";
import CarDetail from "../../../CommonComponents/ProductDetail/CarDetail";

const CarExpandSliderContainer = () => {
  return (
    <Fragment>
      <CarBreadcrumb type="car_expand_slider" mailClass="style-breadcrumbs-2" />
      <CarDetail type="car" />
    </Fragment>
  );
};

export default CarExpandSliderContainer;
