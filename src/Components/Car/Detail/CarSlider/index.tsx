import { Fragment } from "react";
import CarBreadcrumb from "../../../CommonComponents/Breadcrumbs/CarBreadcrumb";
import CarDetail from "../../../CommonComponents/ProductDetail/CarDetail";

const CarSliderContainer = () => {
  return (
    <Fragment>
      <CarBreadcrumb type="car_image_slider" />
      <CarDetail type="car" />
    </Fragment>
  );
};

export default CarSliderContainer;
