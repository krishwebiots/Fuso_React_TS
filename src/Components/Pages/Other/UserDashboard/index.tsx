import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import LeftSidebar from "./LeftSidebar";

const UserDashboardContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs title="User Dashboard" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <section className="section-b-space user-dashboard-section">
        <Container>
          <Row>
            <LeftSidebar />
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default UserDashboardContainer;
