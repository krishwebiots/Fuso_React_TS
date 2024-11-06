import { useEffect, useRef } from "react";
import { Col, Container, Row } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { MostSearchedTitle } from "../../../Constants/Constants";
import { MostSearchedContentData } from "../../../Data/Demo/CarDemo1";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import CarProductCard from "../Common/CarProductCard";
import CommonHeader from "../Common/CommonHeader";

const Product = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const { productItem } = useAppSelector((state) => state.product);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  return (
    <section className="car-product-section section-b-space">
      <Container>
        <CommonHeader title={MostSearchedTitle} content={MostSearchedContentData} headClass="title-style-2" animation />
        <Row className="gy-4 ratio_65">
          {productItem
            .filter(({ id }) => [1, 2, 3, 4, 5, 6, 7, 8].includes(id))
            .map((item, index) => (
              <Col xxl="3" lg="4" sm="6" data-aos="fade-up" data-aos-duration={200 * (index + 1)} key={index}>
                <CarProductCard data={item} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default Product;
