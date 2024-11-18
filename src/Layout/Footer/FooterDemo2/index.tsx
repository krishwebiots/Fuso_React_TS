import { FC } from "react";
import { Col, Container, Row } from "reactstrap";
import { FooterClassMap, FooterDescription, FooterDetailData } from "../../../Data/Layout/Footer";
import { PathTypes } from "../../../Types/LayoutType";
import { dynamicImage, Image } from "../../../Utils";
import FooterDetailSection from "../Common/FooterDetailSection";
import LogoAndSocialMedia from "../Common/LogoAndSocialMedia";
import SearchSection from "./SearchSection";

const FooterDemo2: FC<PathTypes> = ({ part }) => {
  const FooterData = FooterDetailData.slice(2, 5).reverse();
  return (
    <footer className={`job3-footer ${FooterClassMap[part || ""]}`}>
      <Container>
        {!part?.includes("job-2") && <SearchSection part={part} />}
        <div className="dark-job-footer">
          <Row className="justify-content-between gy-lg-0 gy-sm-4 gy-3">
            <Col lg="4">
              <LogoAndSocialMedia description={FooterDescription[1]} endPoint={4} />
            </Col>
            <FooterDetailSection data={FooterData} />
          </Row>
        </div>
        <div className="copyright-box">
          <p>@ 2024 All Rights Reserved</p>
          <Image src={dynamicImage("dark-job/payment-img.png")} alt="payment-img" className="img-fluid" />
        </div>
      </Container>
    </footer>
  );
};

export default FooterDemo2;
