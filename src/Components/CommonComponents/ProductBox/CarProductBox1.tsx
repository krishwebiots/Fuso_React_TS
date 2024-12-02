import { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Label } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href, ShowMore } from "../../../Constants/Constants";
import { ProductSwiperSetting } from "../../../Data/Demo/CarDemo1";
import { RouteList } from "../../../Routers/RouteList";
import { ProductBoxType } from "../../../Types/ProductType";
import { dynamicImage, dynamicSvg, Image } from "../../../Utils";
import RatioImage from "../../../Utils/RatioImage";
import { Trash } from "iconsax-react";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";
import { toast } from "react-toastify";
import { setPropertyItem } from "../../../ReduxToolkit/Reducers/ProductReducers";

const CarProductBox1: FC<ProductBoxType> = ({ data, wishlist }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const dispatch = useAppDispatch();
  const { productItem } = useAppSelector((state) => state.product);

  const handleWishlist = () => toast.success("Added to Wishlist successfully");

  const handleRemove = (id: number) => {
    const updatedProductItem = productItem.filter((item) => item.id !== id);
    dispatch(setPropertyItem(updatedProductItem));
    toast.success("Remove to Wishlist successfully");
  };

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  return (
    <div className="featured-box">
      <div className="featured-main-img">
        <Link to={RouteList.Car.Detail.CarClassic} className="featured-img">
          <Swiper {...ProductSwiperSetting} onInit={(swiper: SwiperType) => (swiperRef.current = swiper)}>
            {data.image.map((testimonial, index) => (
              <SwiperSlide key={index} className="bg-size">
                <RatioImage src={dynamicImage(testimonial)} alt="featured-img" className="img-fluid bg-img" />
              </SwiperSlide>
            ))}
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
          </Swiper>
        </Link>
        {wishlist ? (
          <Link to={Href} className="remove-button" onClick={() => handleRemove(data.id)}>
            <Trash className="iconsax" />
          </Link>
        ) : (
          <Link to={Href} className="save-btn" onClick={() => handleWishlist()}>
            <i className="ri-bookmark-line" />
          </Link>
        )}
        {data.label && (
          <Label className={data.label.class}>
            <i className={data.label.icon} />
            {data.label.text}
          </Label>
        )}
      </div>
      <div className="featured-content">
        <Link to={RouteList.Car.Detail.CarClassic}>{data.title}</Link>
        <p>{data.emi}</p>
        <ul className="featured-list">
          {data.features.slice(0, 3).map((item, index) => (
            <li key={index}>
              <Image src={dynamicSvg(item.icon)} alt="profile-2user" className="img-fluid" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="featured-price">
          <h5>${data.price}</h5>
          <Link to={RouteList.Car.Detail.CarClassic} className="arrow-btn">
            {ShowMore} <i className="ri-arrow-right-up-line" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarProductBox1;
