import { Col, Container, Row } from "reactstrap";
import { FooterDescription, FooterDetailData } from "../../../Data/Layout/Footer";
import UsePathName from "../../../Utils/UsePathName";
import FooterDetailSection from "../Common/FooterDetailSection";
import LogoAndSocialMedia from "../Common/LogoAndSocialMedia";
import ContactList from "./ContactList";

const FooterDemo1 = () => {
  const [Path] = UsePathName();

  const FooterData = FooterDetailData.filter(({ id }) => [1, 2, 4, 5].includes(id));
  return (
    <footer className={`property-footer-section ${Path?.includes("job") ? "job-footer-section" : ""}`}>
      <Container>
        <ContactList />
        <div className="dark-job-footer">
          <Row className="gy-4">
            <Col lg="3" xs="12">
              <LogoAndSocialMedia description={FooterDescription[0]} endPoint={3} />
            </Col>
            <Col lg="9" xs="12">
              <Row className="gy-lg-4 gy-3">
                <FooterDetailSection data={FooterData} footerMenu />
              </Row>
            </Col>
          </Row>
        </div>
        <div className="copyright">
          <p>@ 2025 All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default FooterDemo1;
