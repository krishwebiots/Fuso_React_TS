import { FC } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BookNow, ClassicDesign, ComfortableInterior, Featured, PerDay, Rent } from "../../../Constants/Constants";
import { RouteList } from "../../../Routers/RouteList";
import { ProductBoxType } from "../../../Types/ProductType";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import RatioImage from "../../../Utils/RatioImage";

const CarProductBox2: FC<ProductBoxType> = ({ data }) => {
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
          <span>{Featured}</span>
          <span>{Rent}</span>
        </div>
      </Link>
      <div className="car2-featured-content">
        <div className="rating-flex">
          <Link to={RouteList.Car.Detail.CarClassic}>
            <h4>{data.title}</h4>
          </Link>
          <div className="rate-list">
            <Rating initialValue={5} size={17} fillColor="#232323" />
          </div>
        </div>
        <p>{data.description}</p>
        <ul className="tag-list">
          <li>{ClassicDesign}</li>
          <li>{ComfortableInterior}</li>
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
            ${data.price}/<span>{PerDay}</span>
          </h4>
          <Link to={RouteList.Car.Detail.CarClassic} className="btn-pills">
            {BookNow}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarProductBox2;
