import { FC, Fragment, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href } from "../../../../Constants/Constants";
import { DetailBreadcrumbsSlider, ThumbSliderFor, ThumbSliderNav } from "../../../../Data/Property";
import { PropertyDetailType } from "../../../../Types/ProductType";
import { dynamicImage, dynamicNumber, dynamicVideo, Image } from "../../../../Utils";
import RatioImage from "../../../../Utils/RatioImage";

const DetailImages: FC<PropertyDetailType> = ({ type, thumb }) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

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
          <Slider className="breadcrumb-thumbs ratio_40 ratio_media_landscape" asNavFor={nav2} {...ThumbSliderFor} ref={(slider1: any) => setNav1(slider1)}>
            {dynamicNumber(9).map((item) => (
              <div key={item}>
                <RatioImage src={dynamicImage(`property/detail-main/${item}.jpg`)} className="img-fluid bg-img" alt={`bd-${item}`} />
              </div>
            ))}
          </Slider>
          <div className="thumb-set">
            <Container>
              <Slider className="breadcrumb-thumb" {...ThumbSliderNav} asNavFor={nav1} ref={(slider2: any) => setNav2(slider2)}>
                {dynamicNumber(9).map((item) => (
                  <div className="small-breadcrumb-img" key={item}>
                    <Image src={dynamicImage(`property/detail-main/${item}.jpg`)} className="img-fluid" alt={`bd-${item}`} />
                  </div>
                ))}
              </Slider>
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
