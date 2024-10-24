import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { ContactListData, FooterDetailData, SocialMediaData } from "../../Data/Layout/Footer";
import { RouteList } from "../../Routers/RouteList";
import { dynamicImage, Image } from "../../Utils";
import { useState } from "react";

const Footer = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (title: string) => setOpenSections((prevState) => ({[title]: !prevState[title]}));
  return (
    <footer className="property-footer-section">
      <Container>
        <ul className="footer-contact-list">
          {ContactListData.map((item, index) => (
            <li key={index}>
              <div className="footer-icon">{item.icon}</div>
              <div className="footer-contact">
                <h4>{item.title}</h4>
                <h6>{item.text}</h6>
              </div>
            </li>
          ))}
        </ul>
        <div className="dark-job-footer">
          <Row className="gy-4">
            <Col lg="3" xs="12">
              <Link to={RouteList.Home.CarDemo1} className="footer-logo">
                <Image src={dynamicImage("logo/footer-logo.png")} alt="footer-logo" className="img-fluid" />
              </Link>
              <p>Find your ideal career with personalized support, together.</p>
              <ul className="dark-footer-social">
                {SocialMediaData.map((item, index) => (
                  <li key={index}>
                    <Link to={item.url} target="_blank">
                      <i className={item.icon} />
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg="9" xs="12">
              <Row className="gy-lg-4 gy-3">
                {FooterDetailData.map((item, index) => (
                  <Col md="3" sm="6" key={index} className={openSections[item.title] ? "open-footer-content" : ""}>
                    <div>
                      <div className="footer-title">
                        <h4 onClick={() => toggleSection(item.title)}>{item.title}</h4>
                      </div>
                      <ul className="footer-link">
                        {item.links.map((link, idx) => (
                          <li key={idx}>
                            <Link to={link.url}>{link.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>
        <div className="copyright">
          <p>@ 2024 All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
