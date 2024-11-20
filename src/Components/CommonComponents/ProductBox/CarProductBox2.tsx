import { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { Swiper as SwiperType } from "swiper";
import { EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { RouteList } from "../../../Routers/RouteList";
import { ProductCardType } from "../../../Types/ProductType";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import RatioImage from "../../../Utils/RatioImage";

const CarProductBox2: FC<ProductCardType> = ({ data }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  return (
    <div className="car2-featured-box">
      <Link to={RouteList.Car.Detail.CarClassic} className="car2-featured-img">
        <Swiper pagination={{ clickable: true }} effect={"fade"} modules={[Pagination, EffectFade]} className="car2-featured-slider ratio_60">
          <div className="overlay-box" />
          {data.image.map((imgSrc, idx) => (
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
            <h4>{data.title}</h4>
          </Link>
          <ul className="rate-list">
            <Rating initialValue={5} size={17} fillColor="#232323" />
          </ul>
        </div>
        <p>{data.description}</p>
        <ul className="tag-list">
          <li>Classic design</li>
          <li>Comfortable interior</li>
        </ul>
        <ul className="featured-list">
          {data.features.map((item, index) => (
            <li key={index}>
              <Image src={dynamicSvg(item.icon)} alt="profile-2user" className="img-fluid" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="price-flex">
          <h4>
            ${data.price}/<span>Per day</span>
          </h4>
          <Link to={RouteList.Car.Detail.CarClassic} className="btn-pills">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarProductBox2;
