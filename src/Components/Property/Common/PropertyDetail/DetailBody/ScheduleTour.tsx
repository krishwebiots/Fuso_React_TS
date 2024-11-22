import { useEffect, useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href, ScheduleTourTitle, SubmitReview } from "../../../../../Constants/Constants";
import { Days, ScheduleSlider, Time } from "../../../../../Data/Property";
import { Col, Input, Row } from "reactstrap";

const ScheduleTour = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);

  return (
    <div className="detail-body">
      <h4 className="detail-page-title">{ScheduleTourTitle}</h4>
      <Swiper {...ScheduleSlider} className="schedule-slider" onInit={(swiper: SwiperType) => (swiperRef.current = swiper)}>
        {Days.map(({ day, date, month }) => (
          <SwiperSlide key={date}>
            <div className="schedule-box">
              <span>{day}</span>
              <span>{String(date).padStart(2, "0")}</span>
              <span>{month}</span>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
      </Swiper>
      <div className="schedule-form">
        <Row className="gy-sm-4 gy-3">
          <Col lg="6">
            <div className="review-input">
              <Input type="text" placeholder="Enter Your Name" />
            </div>
          </Col>
          <Col lg="6">
            <div className="review-input">
              <Input type="text" placeholder="Enter Your Email" />
            </div>
          </Col>
          <Col lg="6">
            <div className="review-input">
              <Input type="select" className="form-control" required>
                <option value="" disabled selected>
                  --Select Your Time--
                </option>
                {Time.map(({ hour, minute }, index) => (
                  <option key={index} value={index}>
                    {hour}:{minute}
                  </option>
                ))}
              </Input>
            </div>
          </Col>
          <Col lg="6">
            <div className="review-input">
              <Input type="text" placeholder="Enter Your Number" />
            </div>
          </Col>
          <Col xs="12">
            <div className="review-input">
              <Input type="textarea" placeholder="Message" />
            </div>
          </Col>
          <Col xs="12">
            <div className="review-input">
              <a href={Href} className="btn-solid">
                {SubmitReview}
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ScheduleTour;
