import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { FC, Fragment, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { RecommendedUsedCarsTitle, RelatedPropertiesTitle } from "../../../../Constants/Constants";
import { DetailCarSlider, DetailPropertySlider } from "../../../../Data/Property";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import CarProductBox1 from "../../../CommonComponents/ProductBox/CarProductBox1";
import PropertyProductBox1 from "../../../CommonComponents/ProductBox/PropertyProductBox1";
import { Swiper as SwiperType } from "swiper";

const RelatedProduct: FC<{ type?: string }> = ({ type }) => {
  const { productItem } = useAppSelector((state) => state.product);
  const PropertyData = productItem.filter((item) => item.type === type);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.init();
  }, []);
  return (
    <div className={`section-t-space ${type === "car" ? "car-product-section" : ""}`}>
      {type === "car" ? (
        <Fragment>
          <div className="detail-flex-title">
            <h3>{RecommendedUsedCarsTitle}</h3>
            <div className="swiper-flex car-arrow">
              <div className="swiper-button-prev car-related-prev">
                <ArrowLeft2 className="iconsax" />
              </div>
              <div className="swiper-button-next car-related-next">
                <ArrowRight2 className="iconsax" />
              </div>
            </div>
          </div>
          <Swiper {...DetailCarSlider} className="car-related-slider ratio_65" onInit={(swiper: SwiperType) => (swiperRef.current = swiper)}>
            {PropertyData.map((item, index) => (
              <SwiperSlide key={index}>
                <CarProductBox1 data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Fragment>
      ) : (
        <Fragment>
          <h4 className="detail-page-title">{RelatedPropertiesTitle}</h4>
          <Swiper {...DetailPropertySlider} className="detail-property-slider ratio_landscape">
            {PropertyData.map((item, index) => (
              <SwiperSlide key={index}>
                <PropertyProductBox1 data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Fragment>
      )}
    </div>
  );
};

export default RelatedProduct;
