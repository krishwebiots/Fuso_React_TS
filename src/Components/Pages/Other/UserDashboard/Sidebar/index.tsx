import { Fragment } from "react/jsx-runtime";
import { Button, Col, Nav, NavItem, NavLink } from "reactstrap";
import { Href, LogOut } from "../../../../../Constants/Constants";
import { DashboardList } from "../../../../../Data/Pages/Other";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { setActiveTab, setDashboardSidebar, setLogoutModal } from "../../../../../ReduxToolkit/Reducers/LayoutReducers";
import LogoutModal from "./LogoutModal";
import Profile from "./Profile";

const Sidebar = () => {
  const { activeTab, dashboardSidebar } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  return (
    <Fragment>
      <Col lg="3">
        <div className={`left-sidebar filter-sidebar ${dashboardSidebar ? "open" : ""}`}>
          <Button className="close-btn" onClick={() => dispatch(setDashboardSidebar())}>
            <i className="ri-close-line" />
          </Button>
          <Profile />
          <Nav pills className="flex-column sidebar-list">
            {DashboardList.map((item, index) => (
              <NavItem key={index}>
                <NavLink href={Href} className={activeTab === item.type ? "active" : ""} color="transparent" onClick={() => dispatch(setActiveTab(item.type))}>
                  {item.title}
                </NavLink>
              </NavItem>
            ))}
            <li>
              <a href={Href} className="btn-border" onClick={() => dispatch(setLogoutModal())}>
                {LogOut}
              </a>
            </li>
          </Nav>
        </div>
      </Col>
      <LogoutModal />
    </Fragment>
  );
};

export default Sidebar;
