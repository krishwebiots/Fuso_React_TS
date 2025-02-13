import { Button, Col, Input, Row } from "reactstrap";
import { Subscribe } from "../../../Constants/Constants";
import UsePathName from "../../../Utils/UsePathName";

const SearchSection = () => {
  const [Path] = UsePathName();

  return (
    <Row className="justify-content-between align-items-center footer-head gy-md-0 gy-3">
      <Col lg="5" md="6">
        <h2 className="text-white">{Path === "property-2" ? "Find your Next Dream Car Today!" : Path === "property-2" ? "Find your Next Dream Home Today!" : "Find your Next Grate Job Opportunity!"}</h2>
      </Col>
      <Col md="6">
        <div className="search-pill">
          <Input type="text" placeholder="Enter your email address" />
          <Button className={Path === "property-2" ? "btn-solid property2-change" : "btn-pills"}>{Subscribe}</Button>
        </div>
      </Col>
    </Row>
  );
};

export default SearchSection;
