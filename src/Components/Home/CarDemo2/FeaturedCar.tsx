import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { Col, Container, Row } from "reactstrap";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FeaturedCarTitle } from "../../../Constants/Constants";
import { FeaturedCarContentData } from "../../../Data/Demo/CarDemo2";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import CommonHeader from "../Common/CommonHeader";
import RatioImage from "../../../Utils/RatioImage";

const FeaturedCar = () => {
  const { productItem } = useAppSelector((state) => state.product);
  return (
    <section className="car2-featured-section section-t-lg-space section-b-lg-space overflow-hidden">
      <RatioImage src={dynamicImage("car2/bg-effect/featured-bg.png")} alt="featured-bg" className="bg-img" />
      <Container>
        <CommonHeader title={FeaturedCarTitle} content={FeaturedCarContentData} headClass="title-style-5" titleClass="text-white" />
        <Row className="gy-4 justify-content-center">
          {productItem
            .filter(({ id }) => [13, 14, 15].includes(id))
            .map((car) => (
              <Col xl="4" md="6" key={car.id}>
                <div className="car2-featured-box">
                  <Link to={RouteList.Car.Detail.CarClassic} className="car2-featured-img">
                    <Swiper pagination={true} modules={[Pagination]} className="car2-featured-slider ratio_60">
                      <div className="overlay-box" />
                      {car.image.map((imgSrc, idx) => (
                        <SwiperSlide key={idx} className="bg-size">
                          <RatioImage src={dynamicImage(imgSrc)} alt={`featured-img-${idx}`} className="img-fluid bg-img" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="car2-label-flex">
                      <span>Featured</span>
                      <span>Rent</span>
                    </div>
                  </Link>
                  <div className="car2-featured-content">
                    <div className="rating-flex">
                      <Link to={RouteList.Car.Detail.CarClassic}>
                        <h4>{car.title}</h4>
                      </Link>
                      <ul className="rate-list">
                        <Rating initialValue={5} size={17} fillColor="#232323" />
                      </ul>
                    </div>
                    <p>{car.description}</p>
                    <ul className="tag-list">
                      <li>Classic design</li>
                      <li>Comfortable interior</li>
                    </ul>
                    <ul className="featured-list">
                      {car.features.map((item, index) => (
                        <li key={index}>
                          <Image src={dynamicSvg(item.icon)} alt="profile-2user" className="img-fluid" />
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="price-flex">
                      <h4>
                        {car.price}/<span>Per day</span>
                      </h4>
                      <Link to={RouteList.Car.Detail.CarClassic} className="btn-pills">
                        Book Now
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

export default FeaturedCar;
