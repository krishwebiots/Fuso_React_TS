import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { LogoSectionType } from "../../../Types/HomeDemo";
import { dynamicImage, dynamicNumber, Image } from "../../../Utils";
import { Fragment } from "react/jsx-runtime";
import CommonHeader from "./CommonHeader";
import { WorldBestCompanies } from "../../../Constants/Constants";
import { FC } from "react";

const LogoSection: FC<LogoSectionType> = ({ sectionClass, swiperClass, title, type }) => {
  return (
    <Fragment>
      {!type && (
        <section className={`logo-section ${sectionClass ? sectionClass : ""}`}>
          <Container>
            {title && <h3 className="text-center">{title}</h3>}
            <Swiper slidesPerView={5} spaceBetween={30} loop={true} className={swiperClass}>
              {dynamicNumber(6).map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="logo-img">
                    <Image src={dynamicImage(`job/logo/${item}.png`)} alt={`g-${item}`} className="img-fluid" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Container>
        </section>
      )}

      {/* Job Demo-1 */}
      {type === "job_demo1" && (
        <section className="job-logo-section section-b-space">
          <Container>
            <CommonHeader title={WorldBestCompanies} headClass="title-style-3 text-center" />
            <div className="experience-car-feature">
              <Row className="row-cols-lg-5 row-cols-2">
                {dynamicNumber(10).map((item, index) => (
                  <Col className="p-0" key={index}>
                    <div className="logo-img">
                      <Image src={dynamicImage(`job/logo/${item}.png`)} alt="l-1" className="img-fluid" />
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </section>
      )}

      {/* Job Demo-2 */}
      {type === "job_demo2" && (
        <section className="dark-logo-section">
          <h3>Top businesses in the world are recruiting on hire up</h3>
          <div className="quote">
            <ul className="marquee">
              {dynamicNumber(10).map((item, index) => (
                <li key={index}>
                  <div className="logo-size">
                    <Image src={dynamicImage(`job/logo/${item}.png`)} alt="logo-1" className="img-fluid" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default LogoSection;
