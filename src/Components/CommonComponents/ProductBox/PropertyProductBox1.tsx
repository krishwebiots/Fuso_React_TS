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
import { dynamicVideo } from "../../../Utils";
import SvgIcon from "../../../Utils/SvgIcon";
import PropertyBoxSlider from "./Common/PropertyBoxSlider";

const PropertyProductBox1: FC<ProductBoxType> = ({ data, view, wishlist }) => {
  const { productItem } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const handleWishlist = () => toast.success("Added to Wishlist successfully");

  const handleRemove = (id: number) => {
    const updatedProductItem = productItem.filter((item) => item.id !== id);
    dispatch(setPropertyItem(updatedProductItem));
    toast.success("Remove to Wishlist successfully");
  };

  return (
    <div className="featured-box">
      {view === "video" ? (
        <div className="featured-video">
          <video autoPlay muted loop>
            <source src={dynamicVideo(data.video ? data.video : "1.mp4")} type="video/mp4" />
            <source src={dynamicVideo(data.video ? data.video : "1.mp4")} type="video/ogg" />
          </video>
        </div>
      ) : (
        <div className="featured-main-img">
          <Link to={view === "multiple" ? Href : RouteList.Property.Detail.PropertySidebarLayout} className="featured-img">
            <PropertyBoxSlider view={view} data={data} />
          </Link>
          {data.label && <Label className="save-btn">{data.label.text}</Label>}
          {wishlist ? (
            <Link to={Href} className="remove-button" onClick={() => handleRemove(data.id)}>
              <Trash className="iconsax" />
            </Link>
          ) : (
            <Link to={Href} className="wishlist-btn" onClick={() => handleWishlist()}>
              <i className="ri-bookmark-line" />
            </Link>
          )}
        </div>
      )}
      <div className="featured-content">
        <Link to={RouteList.Property.Detail.PropertySidebarLayout}>{data.title}</Link>
        <p>{data.location}</p>
        <ul className="featured-list">
          {data.features.slice(0, 3).map((item, index) => (
            <li key={index}>
              <SvgIcon iconId={`property/sprite/featured.svg#${item.icon}`} />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="featured-price">
          <h5>${data.price}</h5>
          <Link to={RouteList.Property.Detail.PropertySidebarLayout} className="btn-solid">
            {ShowMore}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyProductBox1;
