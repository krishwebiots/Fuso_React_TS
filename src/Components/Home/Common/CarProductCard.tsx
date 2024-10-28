import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href } from "../../../Constants/Constants";
import { ProductSwiperSetting } from "../../../Data/Demo/CarDemo1";
import { CarProductCardType } from "../../../Types/ProductType";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import { RouteList } from "../../../Routers/RouteList";

const CarProductCard: React.FC<CarProductCardType> = ({ data }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  return (
    <div className="featured-box">
      <div className="featured-main-img">
        <Link to={RouteList.Car.Detail.CarClassic} className="featured-img">
          <Swiper {...ProductSwiperSetting} onInit={(swiper: SwiperType) => (swiperRef.current = swiper)}>
            {data.image.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Image src={dynamicImage(testimonial)} alt="featured-img" className="img-fluid bg-img" />
              </SwiperSlide>
            ))}
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </Swiper>
        </Link>
        <a href={Href} className="save-btn">
          <i className="ri-bookmark-line" />
        </a>
        {data.label && (
          <label className={data.label.class}>
            <i className={data.label.icon} />
            {data.label.text}
          </label>
        )}
      </div>
      <div className="featured-content">
        <Link to={RouteList.Car.Detail.CarClassic}>{data.title}</Link>
        <p>{data.emi}</p>
        <ul className="featured-list">
          {data.features.map((item, index) => (
            <li key={index}>
              <Image src={dynamicSvg(item.icon)} alt="profile-2user" className="img-fluid" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="featured-price">
          <h5>{data.price}</h5>
          <Link to={RouteList.Car.Detail.CarClassic} className="arrow-btn">
            Show More <i className="ri-arrow-right-up-line" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarProductCard;
