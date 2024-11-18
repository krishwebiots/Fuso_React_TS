import { Fragment, useEffect } from "react";
import PropertyBreadcrumb from "../../../CommonComponents/Breadcrumbs/PropertyBreadcrumb";
import SortBy from "../../../CommonComponents/Sortby";
import GridView from "../../Common/GridView";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { fetchCategoryApiData, fetchProductApiData } from "../../../../ReduxToolkit/Reducers/ProductReducers";
import { setCardToShow } from "../../../../ReduxToolkit/Reducers/SidebarReducers";

const Property3GridContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
    dispatch(fetchCategoryApiData());
    dispatch(setCardToShow(9));
  }, [dispatch]);
  return (
    <Fragment>
      <PropertyBreadcrumb />
      <SortBy />
      <GridView type={"property"} gridSize={3} />
    </Fragment>
  );
};

export default Property3GridContainer;
