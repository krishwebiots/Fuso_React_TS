import { Fragment } from "react";
import CarBreadcrumb from "../../../CommonComponents/Breadcrumbs/CarBreadcrumb";
import CarDetail from "../../../CommonComponents/ProductDetail/CarDetail";

const CarScrollspyContainer = () => {
  return (
    <Fragment>
      <CarBreadcrumb detailImages />
      <CarDetail type="car" detailImages scrollspy />
    </Fragment>
  );
};

export default CarScrollspyContainer;
