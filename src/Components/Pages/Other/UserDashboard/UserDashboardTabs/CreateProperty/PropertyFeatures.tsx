import { Col, Row } from "reactstrap";
import { PropertyFeaturesTitle } from "../../../../../../Constants/Constants";
import RenderInput from "../../../../../CommonComponents/RenderInput";
import FeatureItem from "../Common/FeatureItem";
import RadioGroup from "../Common/RadioGroup";

const PropertyFeatures = () => {
  return (
    <div className="user-form-box">
      <h4 className="dashboard-title">{PropertyFeaturesTitle}</h4>
      <Row className="g-4">
        <Col xxl="4" sm="6">
          <RadioGroup label="Bedroom" name="bed" labels={["1", "2", "3", "4", "5"]} ids={["b1", "b2", "b3", "b4", "b5"]} />
        </Col>
        <Col xxl="4" sm="6">
          <RadioGroup label="Bathroom" name="bathroom" labels={["1", "2", "3", "4", "5"]} ids={["ba1", "ba2", "ba3", "ba4", "ba5"]} />
        </Col>
        <Col xxl="4" sm="6">
          <RadioGroup label="Floor No." name="floor" labels={["1", "2", "3", "4", "5", "6"]} ids={["fn1", "fn2", "fn3", "fn4", "fn5", "fn6"]} />
        </Col>
        <RenderInput label="Cabin Meeting Room" placeholder="Enter Room" ColClass="col-sm-6" />
        <RenderInput label="Meeting Time" placeholder="Enter Meeting Time" ColClass="col-sm-6" />
        <ul className="feature-list">
          <FeatureItem label="Attached Bathroom" name="attachedBathroom" />
          <FeatureItem label="Attached Balconies" name="attachedBalconies" />
          <FeatureItem label="Common Area" name="commonArea" />
          <FeatureItem label="Personal Washroom" name="personalWashroom" />
        </ul>
      </Row>
    </div>
  );
};

export default PropertyFeatures;
