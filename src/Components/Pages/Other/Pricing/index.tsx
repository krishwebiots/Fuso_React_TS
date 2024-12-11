import { Fragment } from "react";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import PricingPlan from "./PricingPlan";
import Newsletter from "../../../Home/Common/Newsletter";

const PricingContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Pricing" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <PricingPlan />
      <Newsletter type="pricing" />
    </Fragment>
  );
};

export default PricingContainer;
