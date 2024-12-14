import { Fragment } from "react";
import CarBreadcrumb from "../../../CommonComponents/Breadcrumbs/CarBreadcrumb";
import CarDetail from "../../../CommonComponents/ProductDetail/CarDetail";

const CarModernSliderContainer = () => {
  return (
    <Fragment>
      <CarBreadcrumb mailClass="car-home-section" modernSlider detailImages />
      <CarDetail type="car" />
    </Fragment>
  );
};

export default CarModernSliderContainer;
