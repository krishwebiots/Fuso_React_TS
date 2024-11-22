import { Swiper, SwiperSlide } from "swiper/react";
import { RelatedPropertiesTitle } from "../../../../Constants/Constants";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import PropertyProductBox1 from "../../../CommonComponents/ProductBox/PropertyProductBox1";
import { DetailPropertySlider } from "../../../../Data/Property";

const RelatedProperties = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const PropertyData = productItem.filter((item) => item.type === "property");

  return (
    <div className="section-t-space">
      <h4 className="detail-page-title">{RelatedPropertiesTitle}</h4>
      <Swiper {...DetailPropertySlider} className="detail-property-slider ratio_landscape">
        {PropertyData.map((item, index) => (
          <SwiperSlide key={index}>
            <PropertyProductBox1 data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedProperties;
