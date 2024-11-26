import { FC, Fragment, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href } from "../../../../Constants/Constants";
import { breadcrumbThumbNav, breadcrumbThumbs, DetailBreadcrumbsSlider } from "../../../../Data/Property";
import { PropertyDetailType } from "../../../../Types/ProductType";
import { dynamicImage, dynamicNumber, dynamicVideo, Image } from "../../../../Utils";
import RatioImage from "../../../../Utils/RatioImage";

const DetailImages: FC<PropertyDetailType> = ({ type, thumb }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const RenderImageItem = (item: number) => {
    const imageSrc = dynamicImage(`property/detail-main/${item}.jpg`);
    return (
      <Col xs="6" className="p-0" key={item}>
        <Item original={imageSrc} width="1300" height="800">
          {({ ref, open }) => (
            <Link to={Href} onClick={open} className="bg-size" style={{ backgroundImage: `url(${imageSrc})` }}>
              <img className="img-fluid bg-img" ref={ref} src={imageSrc} alt="Image_description" style={{ display: "none" }} />
            </Link>
          )}
        </Item>
      </Col>
    );
  };

  return (
    <Fragment>
      {type === "image-slider" ? (
        <Swiper {...DetailBreadcrumbsSlider} className="detail-breadcrumbs-slider ratio_130 image-radius">
          {dynamicNumber(9).map((item) => (
            <SwiperSlide key={item}>
              <div className="breadcrumbs-img">
                <RatioImage src={dynamicImage(`property/detail-main/${item}.jpg`)} alt="b-1" className="img-fluid bg-img" />
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
