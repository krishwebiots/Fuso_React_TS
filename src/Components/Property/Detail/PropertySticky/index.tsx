import { Fragment, useEffect } from "react";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { fetchProductApiData } from "../../../../ReduxToolkit/Reducers/ProductReducers";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import PropertyDetail from "../../Common/PropertyDetail";

const PropertyStickyContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <Breadcrumbs title="Property Details" url={RouteList.Home.PropertyDemo1} />
      <PropertyDetail type="sticky" mainClass="detail-sticky-section" />
    </Fragment>
  );
};

export default PropertyStickyContainer;
