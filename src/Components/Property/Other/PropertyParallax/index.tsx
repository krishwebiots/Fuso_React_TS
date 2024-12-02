import { Fragment, useEffect } from "react";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { fetchProductApiData } from "../../../../ReduxToolkit/Reducers/ProductReducers";
import PropertyBreadcrumb from "../../../CommonComponents/Breadcrumbs/PropertyBreadcrumb";
import SortBy from "../../../CommonComponents/SortBy";
import Parallax from "./Parallax";

const PropertyParallaxContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <PropertyBreadcrumb />
      <SortBy />
      <Parallax />
    </Fragment>
  );
};

export default PropertyParallaxContainer;
