import { Fragment } from "react/jsx-runtime";
import { ConditionsTitle } from "../../../../Constants/Constants";
import { ConditionNavListData, ConditionData } from "../../../../Data/Pages/Other";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import Scrollspy from "../Common/Scrollspy";

const ConditionContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Conditions" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <Scrollspy title={ConditionsTitle} list={ConditionNavListData} content={ConditionData} />
    </Fragment>
  );
};

export default ConditionContainer;
