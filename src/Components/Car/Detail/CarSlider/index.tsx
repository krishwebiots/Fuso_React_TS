import { Fragment } from "react";
import CarBreadcrumb from "../../../CommonComponents/Breadcrumbs/CarBreadcrumb";
import CarDetail from "../../../Property/Common/ProductDetail/CarDetail";

const CarSliderContainer = () => {
  return (
    <Fragment>
      <CarBreadcrumb type="car-image-slider" />
      <CarDetail type="car" />
    </Fragment>
  );
};

export default CarSliderContainer;
