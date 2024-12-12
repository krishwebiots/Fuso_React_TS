import { Col, Row } from "reactstrap";
import SwitchItem from "./Common/SwitchItem";
import { PrivacyData } from "../../../../../Data/Pages/Other";
import { Href } from "../../../../../Constants/Constants";

const Privacy = () => {
  return (
    <Row>
      {PrivacyData.map((item, index) => (
        <Col xs="12" key={index}>
          <div className="common-card">
            <h4 className="dashboard-title">{item.title}</h4>
            {item.switchItem.map((switchItem, index) => (
              <SwitchItem title={switchItem.title} description={switchItem.description} checked={switchItem.checked ? true : false} key={index} />
            ))}
            <a href={Href} className="btn-solid">
              {item.btnLabel}
            </a>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Privacy;
