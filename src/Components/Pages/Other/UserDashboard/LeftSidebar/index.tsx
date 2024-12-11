import { Button, Col, Nav, NavItem, NavLink } from "reactstrap";
import { Href, LogOut } from "../../../../../Constants/Constants";
import { DashboardList } from "../../../../../Data/Pages/Other";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { setActiveTab } from "../../../../../ReduxToolkit/Reducers/SidebarReducers";
import Profile from "./Profile";

const LeftSidebar = () => {
  const { activeTab } = useAppSelector((state) => state.sidebar);
  const dispatch = useAppDispatch();

  return (
    <Col lg="3">
      <div className="left-sidebar filter-sidebar">
        <Button className="close-btn">
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
            <a href={Href} className="btn-border">
              {LogOut}
            </a>
          </li>
        </Nav>
      </div>
    </Col>
  );
};

export default LeftSidebar;
