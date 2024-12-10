import { Trash } from "iconsax-react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Label } from "reactstrap";
import { Href, ShowMore } from "../../../Constants/Constants";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";
import { setPropertyItem } from "../../../ReduxToolkit/Reducers/ProductReducers";
import { RouteList } from "../../../Routers/RouteList";
import { ProductBoxType } from "../../../Types/ProductType";
import { dynamicSvg, Image } from "../../../Utils";
import PropertyBoxSlider from "./Common/PropertyBoxSlider";

const CarProductBox1: FC<ProductBoxType> = ({ data, wishlist, view }) => {
  const dispatch = useAppDispatch();
  const { productItem } = useAppSelector((state) => state.product);

  const handleWishlist = () => toast.success("Added to Wishlist successfully");

  const handleRemove = (id: number) => {
    const updatedProductItem = productItem.filter((item) => item.id !== id);
    dispatch(setPropertyItem(updatedProductItem));
    toast.success("Remove to Wishlist successfully");
  };

  return (
    <div className="featured-box">
      <div className="featured-main-img">
        <Link to={RouteList.Car.Detail.CarClassic} className="featured-img">
          <PropertyBoxSlider view={view} data={data} />
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
