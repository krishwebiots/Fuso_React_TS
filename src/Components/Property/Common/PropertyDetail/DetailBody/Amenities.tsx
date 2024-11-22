import { Swiper, SwiperSlide } from "swiper/react";
import { AmenitiesTitle } from "../../../../../Constants/Constants";
import { AmenitiesData, AmenitiesSlider } from "../../../../../Data/Property";
import { dynamicImage } from "../../../../../Utils";
import RatioImage from "../../../../../Utils/RatioImage";

const Amenities = () => {
  return (
    <div className="detail-body">
      <h4 className="detail-page-title">{AmenitiesTitle}</h4>
      <Swiper {...AmenitiesSlider} className="amenities-slider ratio_landscape">
        {AmenitiesData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="categories-box">
              <RatioImage src={dynamicImage(`property/${item.image}.jpg`)} alt="categories" className="img-fluid bg-img" />
              <div className="categories-box-border">
                <div className="icon-name">
                  <h5>{item.title}</h5>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Amenities;
