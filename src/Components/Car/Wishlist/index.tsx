import { Fragment, useEffect } from "react";
import { Wishlist } from "../../../Constants/Constants";
import { RouteList } from "../../../Routers/RouteList";
import Breadcrumbs from "../../CommonComponents/Breadcrumbs";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { fetchProductApiData } from "../../../ReduxToolkit/Reducers/ProductReducers";
import WishlistBox from "../../Property/Common/WishlistBox";

const CarWishlistContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <Breadcrumbs title={Wishlist} url={RouteList.Home.CarDemo1} mainClass="car-breadcrumbs-section" />
      <WishlistBox type="car" />
    </Fragment>
  );
};

export default CarWishlistContainer;
