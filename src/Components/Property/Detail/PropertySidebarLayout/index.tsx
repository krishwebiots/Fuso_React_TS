import { Fragment } from "react";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import PropertyDetail from "../../Common/ProductDetail/PropertyDetail";

const PropertySidebarLayoutContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Property Details" url={RouteList.Home.PropertyDemo1} />
      <PropertyDetail type="sidebar-layout" mainClass="property-sidebar-section section-t-space ratio_30" />
    </Fragment>
  );
};

export default PropertySidebarLayoutContainer;
