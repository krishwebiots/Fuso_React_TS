import { FC, Fragment, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href } from "../../../../Constants/Constants";
import { breadcrumbThumbNav, breadcrumbThumbs, CarExpandSlider, DetailBreadcrumbsSlider } from "../../../../Data/Property";
import { PropertyDetailType } from "../../../../Types/ProductType";
import { dynamicImage, dynamicNumber, dynamicVideo, Image } from "../../../../Utils";
import RatioImage from "../../../../Utils/RatioImage";
import VideoModal from "../../../CommonComponents/Modal/VideoModal";
import RenderImage from "./RenderImage";
import { Gallery } from "react-photoswipe-gallery";

const DetailImages: FC<PropertyDetailType> = ({ type, thumb, multiple }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <Fragment>
      {type === "image-slider" || type === "car_image_slider" || type === "car_expand_slider" ? (
        <Swiper {...(type === "car_expand_slider" ? CarExpandSlider : DetailBreadcrumbsSlider)} className={`ratio_130 ${type === "car_image_slider" ? "car-detail-slider" : type === "car_expand_slider" ? "car-expand-slider" : "detail-breadcrumbs-slider image-radius"}`}>
          {dynamicNumber(9).map((item) => (
            <SwiperSlide key={item}>
              {type === "car_expand_slider" ? (
                <a href={Href} className="car-slider-img">
                  <Image src={dynamicImage(`car/product/${item}.jpg`)} alt="b-1" className="img-fluid" />
                </a>
              ) : (
                <div className="breadcrumbs-img">
                  <RatioImage src={dynamicImage(`${type === "car_image_slider" ? "car/product" : "property/detail-main"}/${item}.jpg`)} alt="b-1" className="img-fluid bg-img" />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : type === "video" || type === "car_video" ? (
        <div className={type === "video" ? "breadcrumbs-section breadcrumbs-video image-radius" : "h-100"}>
          <video autoPlay muted loop>
            <source src={dynamicVideo(type === "video" ? "breadcrumbs.mp4" : "car-breadcrumbs.mp4")} type="video/mp4" />
            <source src={dynamicVideo(type === "video" ? "breadcrumbs.mp4" : "car-breadcrumbs.mp4")} type="video/ogg" />
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
        <Gallery>
          {multiple ? (
            <Row className="ratio3_2 g-sm-3 g-2">
              {dynamicNumber(7).map((item) => (
                <RenderImage item={item} type={type} multiple={multiple} key={item} />
              ))}
            </Row>
          ) : (
            <Row className="ratio3_2 g-3">
              <RenderImage item={1} type={type} multiple={multiple} />
              <Col lg="6">
                <Row className="g-sm-3 g-2">
                  {dynamicNumber(4).map((item) => (
                    <RenderImage item={item + 1} type={type} multiple={multiple} key={item} />
                  ))}
                </Row>
              </Col>
            </Row>
          )}
          <VideoModal />
        </Gallery>
      ) : (
        <Row className="ratio_landscape m-0 image-radius">
          <Gallery>
            <RenderImage item={1} type={type} multiple={multiple} />
            <Col md="6" className="p-0">
              <Row className="m-0">
                {dynamicNumber(4).map((item) => (
                  <RenderImage item={item + 1} type={type} multiple={multiple} key={item} />
                ))}
              </Row>
            </Col>
          </Gallery>
        </Row>
      )}
    </Fragment>
  );
};

export default DetailImages;
