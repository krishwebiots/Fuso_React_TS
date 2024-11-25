import { useEffect } from "react";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { fetchProductApiData } from "../../../../ReduxToolkit/Reducers/ProductReducers";
import PropertyDetail from "../../Common/PropertyDetail";

const PropertyThumbSliderContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  return <PropertyDetail type="tabs" mainClass="thumb-breadcrumbs-section" thumb />;
};

export default PropertyThumbSliderContainer;