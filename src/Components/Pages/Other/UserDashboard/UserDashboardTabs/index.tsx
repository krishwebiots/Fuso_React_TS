import { Col, TabContent, TabPane } from "reactstrap";
import { Href, SettingMenu } from "../../../../../Constants/Constants";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import Dashboard from "./Dashboard";
import MyProperties from "./MyProperties";
import CreateProperty from "./CreateProperty";
import MyProfile from "./MyProfile";
import MyFavorites from "./MyFavorites";
import Privacy from "./Privacy";
import { setDashboardSidebar } from "../../../../../ReduxToolkit/Reducers/LayoutReducers";

const UserDashboardTabs = () => {
  const { activeTab } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  return (
    <Col lg="9">
      <a href={Href} className="btn-solid filter-btn mb-sm-4 mb-3" onClick={() => dispatch(setDashboardSidebar())}>
        {SettingMenu}
      </a>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="dashboard">
          <Dashboard />
        </TabPane>
        <TabPane tabId="properties">
          <MyProperties />
        </TabPane>
        <TabPane tabId="create_property">
          <CreateProperty />
        </TabPane>
        <TabPane tabId="profile">
          <MyProfile />
        </TabPane>
        <TabPane tabId="favorites">
          <MyFavorites />
        </TabPane>
        <TabPane tabId="privacy">
          <Privacy />
        </TabPane>
      </TabContent>
    </Col>
  );
};

export default UserDashboardTabs;
