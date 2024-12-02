import { FC, Fragment, useState } from "react";
import { Container } from "reactstrap";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Href } from "../../../Constants/Constants";
import { BackSlider, FrontSlider } from "../../../Data/Car";
import { CarBreadcrumbType } from "../../../Types/ProductType";
import { dynamicImage, dynamicNumber, Image } from "../../../Utils";
import RatioImage from "../../../Utils/RatioImage";
import CarImageSlider from "../../Home/Common/CarImageSlider";
import DetailImages from "../../Property/Common/ProductDetail/DetailImages";
import MainDetail from "../../Property/Common/ProductDetail/MainDetail";

const CarBreadcrumb: FC<CarBreadcrumbType> = ({ detailImages, mailClass, multiple, type, modernSlider }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <Fragment>
      {type === "car_thumbnail_slider" ? (
        <div className="style-breadcrumbs-4">
          <div className="car-detail-image">
            <Swiper className="back-slider ratio_45" {...BackSlider} thumbs={{ swiper: thumbsSwiper }}>
              {dynamicNumber(8).map((item, index) => (
                <SwiperSlide key={index}>
                  <a href={Href} className="back-img">
                    <RatioImage src={dynamicImage(`car/black-images/${item}.jpg`)} alt="dm-1" className="img-fluid bg-img" />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper className="front-slider" {...FrontSlider} direction="vertical" onSwiper={setThumbsSwiper}>
              {dynamicNumber(8).map((item, index) => (
                <SwiperSlide key={index}>
                  <a href={Href} className="front-img">
                    <Image src={dynamicImage(`car/black-images/${item}.jpg`)} alt="dm-1" className="img-fluid" />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        <div className={`car-breadcrumbs-section ${mailClass ? mailClass : ""}`}>
          <Container>
            {!detailImages && (
              <div className="car-detail-image">
                <DetailImages type={type} multiple={multiple} />
              </div>
            )}
            {modernSlider && <CarImageSlider />}
            <MainDetail type="car" />
          </Container>
        </div>
      )}
    </Fragment>
  );
};

export default CarBreadcrumb;
