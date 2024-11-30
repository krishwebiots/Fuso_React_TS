import { Fragment } from "react";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import PropertyDetail from "../../Common/ProductDetail/PropertyDetail";

const PropertyStickyContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Property Details" url={RouteList.Home.PropertyDemo1} />
      <PropertyDetail type="sticky" mainClass="detail-sticky-section" />
    </Fragment>
  );
};

export default PropertyStickyContainer;
