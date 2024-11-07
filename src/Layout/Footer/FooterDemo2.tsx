import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Input, Row } from "reactstrap";
import { Subscribe } from "../../Constants/Constants";
import { FooterDetailData, SocialMediaData } from "../../Data/Layout/Footer";
import { RouteList } from "../../Routers/RouteList";
import { dynamicImage, Image } from "../../Utils";
import { PathTypes } from "../../Types/LayoutType";

const FooterDemo2: React.FC<PathTypes> = ({ part }) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (title: string) => setOpenSections((prevState) => ({ [title]: !prevState[title] }));
  const headerClassMap: { [key: string]: string } = {
    "car-2": "car2-footer",
    "job-2": "dark-footer-section section-t-space",
    "property-2": "property2-footer",
  };

  return (
    <footer className={`job3-footer ${headerClassMap[part || ""]}`}>
      <Container>
        {!part?.includes("job-2") && (
          <Row className="justify-content-between align-items-center footer-head gy-md-0 gy-3">
            <Col lg="5" md="6">
              <h2 className="text-white">Find your Next Grate Job Opportunity!</h2>
            </Col>
            <Col md="6">
              <div className="search-pill">
                <Input type="text" placeholder="Enter your email address" />
                <Button className={part === "property-2" ? "btn-solid property2-change" : "btn-pills"}>{Subscribe}</Button>
              </div>
            </Col>
          </Row>
        )}
        <div className="dark-job-footer">
          <Row className="justify-content-between gy-lg-0 gy-sm-4 gy-3">
            <Col lg="4">
              <Link to={RouteList.Home.CarDemo1} className="footer-logo">
                <Image src={dynamicImage("logo/footer-logo.png")} alt="footer-logo" className="img-fluid" />
              </Link>
              <p> Let us guide you towards a fulfilling career path with our personalized recommendations and supportive community.</p>
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
            {FooterDetailData.slice(2, 5)
              .reverse()
              .map((item, index) => (
                <Col key={index} className={`${item.contactList ? "col-lg-3 col-sm-5" : "col-md-2 col-sm-3"} ${openSections[item.title] ? "open-footer-content" : ""}`}>
                  <div>
                    <div className="footer-title">
                      <h4 onClick={() => toggleSection(item.title)}>{item.title}</h4>
                    </div>
                    <ul className="footer-link footer-contact">
                      {item.links.map((link, idx) => (
                        <li key={idx}>
                          {item.contactList ? (
                            <Fragment>
                              <i className={link.icon} />
                              <span>{link.title}</span>
                            </Fragment>
                          ) : (
                            <Link to={link.url ? link.url : ""}>{link.title}</Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}
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
