import { FC, Fragment, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href } from "../../../../Constants/Constants";
import { breadcrumbThumbNav, breadcrumbThumbs, DetailBreadcrumbsSlider } from "../../../../Data/Property";
import { PropertyDetailType } from "../../../../Types/ProductType";
import { dynamicImage, dynamicNumber, dynamicVideo, Image } from "../../../../Utils";
import RatioImage from "../../../../Utils/RatioImage";
import { Play } from "iconsax-react";
import VideoModal from "../../../CommonComponents/Modal/VideoModal";
import { useAppDispatch } from "../../../../ReduxToolkit/Hooks";
import { setVideoModal } from "../../../../ReduxToolkit/Reducers/SidebarReducers";

const DetailImages: FC<PropertyDetailType> = ({ type, thumb, multiple }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const dispatch = useAppDispatch();

  const RenderImageItem = (item: number) => {
    const imageSrc = dynamicImage(`${type === "car_detail" ? "car/product" : "property/detail-main"}/${item}.jpg`);
    const ImageBoxClass = multiple ? `col-md-4 col-6 ${item > 3 ? "col-lg-3" : ""}` : type === "car_detail" ? (item === 1 ? "col-lg-6 position-relative" : "col-6") : "col-xl-6 p-0";
    return (
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
            Video
          </Button>
        )}
      </Col>
    );
  };

  return (
    <Fragment>
      {type === "image-slider" || type === "car-image-slider" ? (
        <Swiper {...DetailBreadcrumbsSlider} className={`ratio_130 ${type === "car-image-slider" ? "car-detail-slider" : "detail-breadcrumbs-slider image-radius"}`}>
          {dynamicNumber(9).map((item) => (
            <SwiperSlide key={item}>
              <div className="breadcrumbs-img">
                <RatioImage src={dynamicImage(`${type === "car-image-slider" ? "car/product" : "property/detail-main"}/${item}.jpg`)} alt="b-1" className="img-fluid bg-img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : type === "video" ? (
        <div className="breadcrumbs-section breadcrumbs-video image-radius">
          <video autoPlay muted loop>
            <source src={dynamicVideo("breadcrumbs.mp4")} type="video/mp4" />
            <source src={dynamicVideo("breadcrumbs.mp4")} type="video/ogg" />
          </video>
        </div>
      ) : thumb ? (
        <Fragment>
          <Swiper {...breadcrumbThumbs} thumbs={{ swiper: thumbsSwiper }} className="breadcrumb-thumbs ratio_40 ratio_media_landscape">
            {dynamicNumber(9).map((item) => (
              <SwiperSlide key={item} className="bg-size">
                <RatioImage src={dynamicImage(`property/detail-main/${item}.jpg`)} className="img-fluid bg-img" alt={`bd-${item}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="thumb-set">
            <Container>
              <Swiper {...breadcrumbThumbNav} onSwiper={setThumbsSwiper} className="breadcrumb-thumb">
                {dynamicNumber(9).map((item) => (
                  <SwiperSlide className="small-breadcrumb-img" key={item}>
                    <Image src={dynamicImage(`property/detail-main/${item}.jpg`)} className="img-fluid" alt={`bd-${item}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Container>
          </div>
        </Fragment>
      ) : type === "car_detail" ? (
        <Fragment>
          {multiple ? (
            <Row className="ratio3_2 g-sm-3 g-2">
              <Gallery>{dynamicNumber(7).map((item) => RenderImageItem(item))}</Gallery>
            </Row>
          ) : (
            <Row className="ratio3_2 g-3">
              <Gallery>{RenderImageItem(1)}</Gallery>
              <Col lg="6">
                <Row className="g-sm-3 g-2">
                  <Gallery>{dynamicNumber(4).map((item) => RenderImageItem(item + 1))}</Gallery>
                </Row>
              </Col>
            </Row>
          )}
          <VideoModal />
        </Fragment>
      ) : (
        <Row className="ratio_landscape m-0 image-radius">
          <Gallery>{RenderImageItem(1)}</Gallery>
          <Col md="6" className="p-0">
            <Row className="m-0">
              <Gallery>{dynamicNumber(4).map((item) => RenderImageItem(item + 1))}</Gallery>
            </Row>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default DetailImages;
