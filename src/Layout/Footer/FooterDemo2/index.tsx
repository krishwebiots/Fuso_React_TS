import { Col, Container, Row } from "reactstrap";
import { FooterClassMap, FooterDescription, FooterDetailData } from "../../../Data/Layout/Footer";
import { dynamicImage, Image } from "../../../Utils";
import UsePathName from "../../../Utils/UsePathName";
import FooterDetailSection from "../Common/FooterDetailSection";
import LogoAndSocialMedia from "../Common/LogoAndSocialMedia";
import SearchSection from "./SearchSection";

const FooterDemo2 = () => {
  const FooterData = FooterDetailData.slice(2, 5).reverse();
  const [Path] = UsePathName();

  return (
    <footer className={`job3-footer ${FooterClassMap[Path || ""]}`}>
      <Container>
        {!Path?.includes("job-2") && <SearchSection />}
        <div className="dark-job-footer">
          <Row className="justify-content-between gy-lg-0 gy-sm-4 gy-3">
            <Col lg="4">
              <LogoAndSocialMedia description={FooterDescription[1]} endPoint={4} />
            </Col>
            <FooterDetailSection data={FooterData} />
          </Row>
        </div>
        <div className="copyright-box">
          <p className="text-white">@ 2025 All Rights Reserved</p>
          <Image src={dynamicImage("dark-job/payment-img.png")} alt="payment-img" className="img-fluid" />
        </div>
      </Container>
    </footer>
  );
};

export default FooterDemo2;
