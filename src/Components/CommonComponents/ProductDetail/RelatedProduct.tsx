import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { FC, Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { RecommendedUsedCarsTitle, RelatedPropertiesTitle, SimilarJobOpportunities } from "../../../Constants/Constants";
import { DetailCarSlider, DetailJobSlider, DetailPropertySlider } from "../../../Data/Property";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import CarProductBox1 from "../../CommonComponents/ProductBox/CarProductBox1";
import JobProductBox1 from "../../CommonComponents/ProductBox/JobProductBox1";
import PropertyProductBox1 from "../../CommonComponents/ProductBox/PropertyProductBox1";

const RelatedProduct: FC<{ type?: string }> = ({ type }) => {
  const { productItem } = useAppSelector((state) => state.product);
  const PropertyData = productItem.filter((item) => item.type === type);

  return (
    <div className={`${type === "job" ? "related-space" : "section-t-space"} ${type === "car" ? "car-product-section" : ""}`}>
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
          <Swiper {...DetailCarSlider} className="car-related-slider ratio_65">
            {PropertyData.map((item, index) => (
              <SwiperSlide key={index}>
                <CarProductBox1 data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Fragment>
      ) : type === "job" ? (
        <Fragment>
          <h5 className="description-title">{SimilarJobOpportunities}</h5>
          <div className="detail-swiper-section">
            <Swiper {...DetailJobSlider} className="detail-swiper-slider">
              {PropertyData.map((item, index) => (
                <SwiperSlide key={index}>
                  <JobProductBox1 data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev detail-prev">
              <i className="ri-arrow-left-wide-line" />
            </div>
            <div className="swiper-button-next detail-next">
              <i className="ri-arrow-right-wide-line" />
            </div>
          </div>
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
