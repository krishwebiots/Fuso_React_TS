import { useState } from "react";
import { Button, Col, Nav, NavItem, TabContent, TabPane } from "reactstrap";
import { LatestCarOrdersTitle } from "../../../../../../../Constants/Constants";
import { CarOrdersNavList } from "../../../../../../../Data/Pages/Other";
import { dynamicSvg, Image } from "../../../../../../../Utils";
import Tooltips from "../../../../../../CommonComponents/Tooltips";
import OrdersTable from "./OrdersTable";

const LatestCarOrders = () => {
  const [activeTab, setActiveTab] = useState("sedan");
  return (
    <Col xl="7">
      <div className="white-card">
        <h4 className="dashboard-inner-title">{LatestCarOrdersTitle}</h4>
        <Nav pills>
          {CarOrdersNavList.map((item, index) => (
            <NavItem key={index}>
              <Button className={`nav-link ${activeTab === item.type ? "active" : ""}`} id={item.type} color="transparent" onClick={() => setActiveTab(item.type)}>
                <Image src={dynamicSvg(item.image)} alt="sedan" className="img-fluid" />
              </Button>
              <Tooltips target={item.type} title={item.type} />
            </NavItem>
          ))}
        </Nav>
        <TabContent activeTab={activeTab}>
          {CarOrdersNavList.map((item, index) => (
            <TabPane tabId={item.type} key={index}>
              <OrdersTable type={item.type} />
            </TabPane>
          ))}
        </TabContent>
      </div>
    </Col>
  );
};

export default LatestCarOrders;
