import { Fragment } from "react";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import Team from "../../../Home/Common/Team";
import Founder from "./Founder";

const TeamContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Team" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <Team type="team" />
      <Founder />
    </Fragment>
  );
};

export default TeamContainer;
