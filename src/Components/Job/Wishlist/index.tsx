import { Fragment, useEffect } from "react";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { fetchProductApiData } from "../../../ReduxToolkit/Reducers/ProductReducers";
import { RouteList } from "../../../Routers/RouteList";
import Breadcrumbs from "../../CommonComponents/Breadcrumbs";
import WishlistBox from "../../CommonComponents/WishlistBox";

const JobWishlistContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <Breadcrumbs title="Job Wishlist" url={RouteList.Home.JobDemo1} mainClass="job-breadcrumbs-section" />
      <WishlistBox type="job" />
    </Fragment>
  );
};

export default JobWishlistContainer;
