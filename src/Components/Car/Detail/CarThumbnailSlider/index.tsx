import { Fragment } from "react";
import { Container } from "reactstrap";
import CarBreadcrumb from "../../../CommonComponents/Breadcrumbs/CarBreadcrumb";
import CarDetail from "../../../CommonComponents/ProductDetail/CarDetail";
import MainDetail from "../../../CommonComponents/ProductDetail/MainDetail";

const CarThumbnailSliderContainer = () => {
  return (
    <Fragment>
      <CarBreadcrumb type="car_thumbnail_slider" />
      <div className="car-detail-section half-breadcrumbs">
        <Container>
          <MainDetail type="car" />
        </Container>
      </div>
      <CarDetail type="car" />
    </Fragment>
  );
};

export default CarThumbnailSliderContainer;
