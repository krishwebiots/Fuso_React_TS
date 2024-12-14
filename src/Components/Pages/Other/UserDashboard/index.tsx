import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { Href } from "../../../../Constants/Constants";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { fetchProductApiData } from "../../../../ReduxToolkit/Reducers/ProductReducers";
import { RouteList } from "../../../../Routers/RouteList";
import Breadcrumbs from "../../../CommonComponents/Breadcrumbs";
import Sidebar from "./Sidebar";
import UserDashboardTabs from "./UserDashboardTabs";

const UserDashboardContainer = () => {
  const dispatch = useAppDispatch();
  const { dashboardSidebar } = useAppSelector((state) => state.layout);

  useEffect(() => {
    dispatch(fetchProductApiData());
  }, [dispatch]);
  return (
    <Fragment>
      <Breadcrumbs title="User Dashboard" url={RouteList.Home.CarDemo1} mainClass="page-breadcrumbs-section" />
      <section className="section-b-space user-dashboard-section">
        <Container>
          <Row>
            <Sidebar />
            <UserDashboardTabs />
          </Row>
        </Container>
      </section>
      <Link to={Href} className={`filter-overlay ${dashboardSidebar ? "show" : ""}`} />
    </Fragment>
  );
};

export default UserDashboardContainer;
