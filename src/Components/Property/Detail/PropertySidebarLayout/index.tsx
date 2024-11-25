import { Fragment, useEffect } from "react";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { fetchProductApiData } from "../../../../ReduxToolkit/Reducers/ProductReducers";
import PropertyDetail from "../../Common/PropertyDetail";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import { RouteList } from "../../../../Routers/RouteList";

const PropertySidebarLayoutContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <Breadcrumbs title="Property Details" subTitle="Property Details" url={RouteList.Home.PropertyDemo1} />
      <PropertyDetail type="sidebar-layout" mainClass="property-sidebar-section section-t-space ratio_30" />
    </Fragment>
  );
};

export default PropertySidebarLayoutContainer;
