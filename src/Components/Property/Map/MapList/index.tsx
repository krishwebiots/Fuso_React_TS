import React from "react";
import { Fragment, useEffect } from "react";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "../../../../ReduxToolkit/Reducers/ProductReducers";
import { setCardToShow } from "../../../../ReduxToolkit/Reducers/SidebarReducers";
import PropertyBreadcrumb from "../../../CommonComponents/Breadcrumbs/PropertyBreadcrumb";
import SortBy from "../../../CommonComponents/Sortby";
import GridView from "../../Common/GridView";

const MapListContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(fetchCategoryApiData());
    dispatch(setCardToShow(4));
  }, [dispatch]);
  return (
    <Fragment>
      <PropertyBreadcrumb />
      <SortBy />
      <GridView type={"property"} side="no" gridType="list-view" map gridSize={1} sectionClass="section-b-space property-list property-inner-section" />
    </Fragment>
  );
};

export default MapListContainer;