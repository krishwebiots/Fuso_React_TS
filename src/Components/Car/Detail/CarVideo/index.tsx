import { Fragment } from "react";
import CarBreadcrumb from "../../../CommonComponents/Breadcrumbs/CarBreadcrumb";
import CarDetail from "../../../CommonComponents/ProductDetail/CarDetail";

const CarVideoContainer = () => {
  return (
    <Fragment>
      <CarBreadcrumb type="car_video" mailClass="video-breadcrumbs" />
      <CarDetail type="car" />
    </Fragment>
  );
};

export default CarVideoContainer;
