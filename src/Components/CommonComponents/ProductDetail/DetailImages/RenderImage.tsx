import { Play } from "iconsax-react";
import { FC } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Button, Col } from "reactstrap";
import { Href, VideoTitle } from "../../../../Constants/Constants";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { setVideoModal } from "../../../../ReduxToolkit/Reducers/LayoutReducers";
import { RenderImageType } from "../../../../Types/ProductType";
import { dynamicImage } from "../../../../Utils";
import { Link } from "react-router-dom";

const RenderImage: FC<RenderImageType> = ({ item, type, multiple }) => {
  const dispatch = useAppDispatch();

  const imageSrc = dynamicImage(`${type === "car_detail" ? "car/product" : "property/detail-main"}/${item}.jpg`);
  const ImageBoxClass = multiple ? `col-md-4 col-6 ${item > 3 ? "col-lg-3" : ""}` : type === "car_detail" ? (item === 1 ? "col-lg-6 position-relative" : "col-6") : "col-xl-6 p-0";
  return (
    <Gallery>
      <Col className={ImageBoxClass} key={item}>
        <Item original={imageSrc} width="1300" height="800">
          {({ ref, open }) => (
            <Link to={Href} onClick={open} className={`bg-size ${type === "car_detail" ? "gallery-img" : ""}`} style={{ backgroundImage: `url(${imageSrc})` }}>
              <img className="img-fluid bg-img" ref={ref} src={imageSrc} alt="Image_description" style={{ display: "none" }} />
            </Link>
          )}
        </Item>
        {item === 1 && type === "car_detail" && !multiple && (
          <Button className="video-modal-btn" onClick={() => dispatch(setVideoModal())}>
            <Play className="iconsax" />
            {VideoTitle}
          </Button>
        )}
      </Col>
    </Gallery>
  );
};

export default RenderImage;
