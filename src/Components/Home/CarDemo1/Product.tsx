import { useEffect, useRef } from "react";
import { Col, Container, Row } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { MostSearchedTitle } from "../../../Constants/Constants";
import { MostSearchedContentData } from "../../../Data/Demo/CradDemo1";
import { AllData } from "../../../Data/Demo/Product";
import CarProductCard from "../Common/CarProductCard";
import CommonHeader from "../Common/CommonHeader";

const Product = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  return (
    <section className="car-product-section section-b-space">
      <Container>
        <CommonHeader title={MostSearchedTitle} content={MostSearchedContentData} headClass="title-style-2" animation />
        <Row className="gy-4 ratio_65">
          {AllData.map((item, index) => (
            <Col xxl="3" lg="4" sm="6" data-aos="fade-up" data-aos-duration={`${index + 2}00`} key={index}>
              <CarProductCard data={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Product;
