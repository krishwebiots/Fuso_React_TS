import { Fragment, useEffect } from "react";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "../../../../ReduxToolkit/Reducers/ProductReducers";
import { setCardToShow } from "../../../../ReduxToolkit/Reducers/SidebarReducers";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import GridView from "../../../Property/Common/GridView";

const Car2GridContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(fetchCategoryApiData());
    dispatch(setCardToShow(6));
  }, [dispatch]);
  return (
    <Fragment>
      <Breadcrumbs title="Car Shop" url={RouteList.Home.CarDemo1} mainClass="car-breadcrumbs-section" />
      <GridView type={"car"} sectionClass="car-shop-section car-product-section" filterTagsClass="car-list-header" />
    </Fragment>
  );
};

export default Car2GridContainer;
