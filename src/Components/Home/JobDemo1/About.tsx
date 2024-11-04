import { Add, ArrowLeft2, ArrowRight, ArrowRight2 } from "iconsax-react";
import { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { Col, Container, Row } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AboutSliderTitle } from "../../../Constants/Constants";
import { AboutImagesData, AboutSliderContentData, AboutSliderSetting, AboutSlidesData, JobAboutCounterData } from "../../../Data/Demo/JobDemo1";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicNumber, dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";
import SvgIcon from "../Common/SvgIcon";

const About = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  return (
    <Fragment>
      <section className="job-about-section section-b-space">
        <Container>
          <Row className="justify-content-center gy-4 align-items-center">
            <Col xl="7" lg="6" className="order-lg-0 order-1">
              <div className="about-content">
                <h2>We Provide a Place to Find Trusted Jobs</h2>
                <p>We will help you to find a job with your interests and help build your project more elegant.</p>
                <ul className="about-list">
                  <li>Say goodbye to endless scrolling through unreliable job postings.</li>
                  <li>Receive personalized job suggestions that match your criteria.</li>
                  <li>We're more than just a job board.</li>
                </ul>
                <ul className="job-counter-box">
                  {JobAboutCounterData.map((counter, index) => (
                    <li key={index} className="counter-box">
                      <div className="counter-flex">
                        <CountUp end={counter.count} className="counter-count" delay={0} />
                        <Add />
                      </div>
                      <h5>{counter.label}</h5>
                    </li>
                  ))}
                </ul>
                <Link to={RouteList.Pages.Other.AboutUs1} className="text-btn">
                  Learn More <ArrowRight />
                </Link>
              </div>
            </Col>
            <Col xl="5" lg="6" md="8">
              <div className="about-img">
                <Row className="gx-lg-4 gx-sm-5">
                  {AboutImagesData.map((colImages, colIndex) => (
                    <Col xs="6" key={colIndex}>
                      {colImages.map((image, imgIndex) => (
                        <Image key={imgIndex} src={dynamicImage(image.src)} alt="a-1" className="img-fluid" />
                      ))}
                    </Col>
                  ))}
                </Row>
                <Image src={dynamicSvg("job/a-1.svg")} alt="a-1" className="img-fluid about-object" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about-slider-section section-b-space">
        <Container>
          <CommonHeader title={AboutSliderTitle} content={AboutSliderContentData} headClass="title-style-3 text-center" />
          <Swiper {...AboutSliderSetting} onInit={(swiper: SwiperType) => (swiperRef.current = swiper)}>
            {AboutSlidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="about-slider-content">
                  <Image src={dynamicSvg("job/quote.svg")} alt="quote" className="img-fluid quote-img" />
                  <p>{slide.quoteText}</p>
                  <ul className="about-rating-list">
                    {dynamicNumber(5).map((item) => (
                      <li key={item}>
                        <SvgIcon iconId="property/sprite/star.svg#star-svg" />
                      </li>
                    ))}
                  </ul>
                  <div className="profile-flex">
                    <Image src={dynamicImage(slide.profileImgSrc)} alt={slide.profileName} className="img-fluid" />
                    <div>
                      <h4>{slide.profileName}</h4>
                      <h6>{slide.profilePosition}</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-flex car-arrow">
              <div className="swiper-button-prev job-about-prev">
                <ArrowLeft2 />
              </div>
              <div className="swiper-button-next job-about-next">
                <ArrowRight2 />
              </div>
            </div>
          </Swiper>
        </Container>
      </section>
    </Fragment>
  );
};

export default About;
