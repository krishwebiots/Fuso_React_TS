import { Fragment } from "react/jsx-runtime";
import { UserPrivacy } from "../../../../Constants/Constants";
import { PrivacyNavListData, PrivacyPolicyData } from "../../../../Data/Pages/Other";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import Scrollspy from "../Common/Scrollspy";

const PrivacyContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Privacy" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <Scrollspy title={UserPrivacy} list={PrivacyNavListData} content={PrivacyPolicyData} />
    </Fragment>
  );
};

export default PrivacyContainer;
