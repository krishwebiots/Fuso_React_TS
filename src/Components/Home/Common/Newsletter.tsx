import { FC, Fragment } from "react";
import { Button, Col, Container, Input, InputGroup, Row } from "reactstrap";
import { NewsletterTitle, Subscribe } from "../../../Constants/Constants";
import { NewsletterContentData } from "../../../Data/Demo/JobDemo1";
import { PropsType } from "../../../Types/HomeDemo";
import { dynamicImage, dynamicNumber, Image } from "../../../Utils";
import CommonHeader from "./CommonHeader";
import { PaymentData } from "../../../Data/Demo/JobDemo3";
import { Link } from "react-router-dom";

const Newsletter: FC<PropsType> = ({ type }) => {
  return (
    <Fragment>
      {/* Job Demo-1 */}
      {["job_demo1", "pricing"].includes(type) && (
        <section className={`job-newsletter-section section-b-space ${type === "pricing" ? "car-newsletter" : ""}`}>
          <Container>
            <div className="job-newsletter-box">
              <div className="newsletter-content">
                <CommonHeader title={NewsletterTitle} content={NewsletterContentData} headClass="title-style-3 dark-title" />
                <InputGroup>
                  <Input type="email" placeholder="Your mail address" />
                  <Button className="btn-solid">{Subscribe}</Button>
                </InputGroup>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Job Demo-3 */}
      {type === "job_demo3" && (
        <section className="section-b-space job3-newsletter">
          <Container>
            <div className="newsletter-box position-relative">
              {dynamicNumber(3).map((item, index) => (
                <Image src={dynamicImage(`job-3/bg-effect/c-${item}.png`)} alt={`c-${item}`} className={`img-fluid position-absolute circle-${item} d-lg-block d-none`} key={index} />
              ))}
              <Row className="justify-content-between">
                <Col lg="6">
                  <div className="newsletter-content">
                    <h2>Get your Dream Job Easily</h2>
                    <p>Whether you're a recent graduate, seasoned professional, or exploring new career paths, our app has you covered.</p>
                    <div className="pay-flex-btn">
                      {PaymentData.map((item, index) => (
                        <Link to={item.utl} key={index}>
                          <Image src={dynamicImage(`job-3/${item.image}`)} alt="gpay" className="img-fluid" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </Col>
                <Col xxl="5" xs="6" className="d-lg-block d-none">
                  <div className="newsletter-img h-100">
                    <Image src={dynamicImage("job-3/phone-mockup.png")} alt="phone-mockup" className="img-fluid h-100" />
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      )}

      {/* Property Demo-1 */}
      {type === "property_demo1" && (
        <section className="property-newsletter-section pt-0 section-b-space bg-color">
          <div className="overflow-hidden section-t-space">
            <Container>
              <div className="newsletter-bg-effect">
                <Row className="align-items-center">
                  <Col lg="5">
                    <div className="newsletter-img" data-aos="zoom-in">
                      <Image src={dynamicImage("property/bg-effect/newsletter-build.png")} alt="newsletter-build" className="img-fluid" />
                    </div>
                  </Col>
                  <Col lg="7">
                    <div className="newsletter-content">
                      <h2>Trusted real estate properties for you</h2>
                      <p>There are just two things that are crucial. Family is most important, followed by comfort, so let's get started with those two.</p>
                      <InputGroup>
                        <Input type="email" placeholder="Your mail address" />
                        <Button className="btn-solid">{Subscribe}</Button>
                      </InputGroup>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default Newsletter;
