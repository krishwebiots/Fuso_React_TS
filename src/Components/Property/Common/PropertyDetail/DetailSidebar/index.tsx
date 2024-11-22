import { Col } from "reactstrap";

import ContactInfo from "./ContactInfo";
import Exploration from "./Exploration";
import FeaturedProperty from "./FeaturedProperty";

const DetailSidebar = () => {
  return (
    <Col xl="3" lg="4">
      <div className="detail-sidebar">
        <div className="detail-sub-sidebar">
          <ContactInfo />
          <Exploration />
        </div>
        <FeaturedProperty />
      </div>
    </Col>
  );
};

export default DetailSidebar;
