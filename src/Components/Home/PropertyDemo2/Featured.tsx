import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Month, ViewProperty } from "../../../Constants/Constants";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import { RouteList } from "../../../Routers/RouteList";
import { FeaturedType } from "../../../Types/HomeDemo";
import { dynamicImage } from "../../../Utils";
import RatioImage from "../../../Utils/RatioImage";
import CommonHeader from "../Common/CommonHeader";
import SvgIcon from "../../../Utils/SvgIcon";

const Featured: React.FC<FeaturedType> = ({ title, data, label }) => {
  const { productItem } = useAppSelector((state) => state.product);
  return (
    <section className="section-t-lg-space property2-featured-section section-b-lg-space">
      <Container>
        <CommonHeader title={title} headClass="title-style-1 title-style-6" subClass="horizontal-title" url={RouteList.Property.Grid.Property3Grid} view />
        <Row className="gy-xl-0 gy-md-4 g-3 justify-content-center">
          {productItem
            .filter(({ id }) => data.includes(id))
            .map((item, index) => (
              <Col xl="4" md="6" data-aos="fade-up" data-aos-duration={500 * (index + 1)} key={index}>
                <div className="car2-featured-box property2-featured-box">
                  <Link to={RouteList.Property.Detail.PropertySidebarLayout} className="car2-featured-img">
                    <Swiper navigation={true} modules={[Navigation]} loop={true} className="property2-featured-slider ratio_60">
                      {item.image.map((imgSrc, idx) => (
                        <SwiperSlide key={idx} className="bg-size">
                          <RatioImage src={dynamicImage(imgSrc)} alt={`featured-img-${idx}`} className="img-fluid bg-img" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="car2-label-flex">
                      <span className="bg-white">{label}</span>
                      {index === 0 && <span className="text-white">For Rent</span>}
                    </div>
                  </Link>
                  <div className="car2-featured-content">
                    <Link to={RouteList.Property.Detail.PropertySidebarLayout}>
                      <h4>{item.title}</h4>
                    </Link>
                    <div className="location-flex">
                      <SvgIcon iconId="property/sprite/featured.svg#4" />
                      <h6>{item.location}</h6>
                    </div>
                    <ul className="featured-list">
                      {item.features.map((item, index) => (
                        <li key={index}>
                          <SvgIcon iconId={`property/sprite/featured.svg#${item.icon}`} />
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="price-flex">
                      <h4>
                        ${item.price}/<span>{Month}</span>
                      </h4>
                      <Link to={RouteList.Property.Detail.PropertySidebarLayout} className="btn-solid">
                        {ViewProperty}
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default Featured;
