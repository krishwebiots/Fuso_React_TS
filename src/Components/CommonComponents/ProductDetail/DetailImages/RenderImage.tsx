import { Play } from "iconsax-react";
import { FC } from "react";
import { Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { Href, VideoTitle } from "../../../../Constants/Constants";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { setVideoModal } from "../../../../ReduxToolkit/Reducers/LayoutReducers";
import { RenderImageType } from "../../../../Types/ProductType";
import { dynamicImage } from "../../../../Utils";

const RenderImage: FC<RenderImageType> = ({ item, type, multiple }) => {
  const dispatch = useAppDispatch();

  const imageSrc = dynamicImage(`${type === "car_detail" ? "car/product" : "property/detail-main"}/${item}.jpg`);
  const ImageBoxClass = multiple ? `col-md-4 col-6 ${item > 3 ? "col-lg-3" : ""}` : type === "car_detail" ? (item === 1 ? "col-lg-6 position-relative" : "col-6") : item === 1 ? "col-md-6 p-0" : "col-6 p-0";
  return (
    <div className={ImageBoxClass} key={item}>
      <Item original={imageSrc} width="1300" height="800">
        {({ ref, open }) => (
          <div className={type === "car_detail" ? "gallery-img" : ""}>
            <Link to={Href} onClick={open} className="bg-size" style={{ backgroundImage: `url(${imageSrc})` }}>
              <img className="img-fluid bg-img" ref={ref} src={imageSrc} alt="Image_description" style={{ display: "none" }} />
            </Link>
          </div>
        )}
      </Item>
      {item === 1 && type === "car_detail" && !multiple && (
        <Button className="video-modal-btn" onClick={() => dispatch(setVideoModal())}>
          <Play className="iconsax" />
          {VideoTitle}
        </Button>
      )}
    </div>
  );
};

export default RenderImage;
