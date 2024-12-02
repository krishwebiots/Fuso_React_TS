import { Fragment } from "react";
import CarBreadcrumb from "../../../CommonComponents/Breadcrumbs/CarBreadcrumb";
import CarDetail from "../../../Property/Common/ProductDetail/CarDetail";
import VideoModal from "../../../CommonComponents/Modal/VideoModal";

const CarClassicSliderContainer = () => {
  return (
    <Fragment>
      <CarBreadcrumb detailImages />
      <CarDetail type="car" classicSlider />
      <VideoModal />
    </Fragment>
  );
};

export default CarClassicSliderContainer;
