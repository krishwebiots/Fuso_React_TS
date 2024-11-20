import Slider from "react-slick";
import { CarRental, Href, Rental } from "../../../Constants/Constants";
import { CarHomeSliderSettings } from "../../../Data/Demo/CarDemo1";
import { dynamicGrf, dynamicImage, dynamicNumber, Image } from "../../../Utils";
import SearchTabList from "../Common/SearchTabList";

const CarHomeSection = () => {
  return (
    <div className="car-home-section">
      <div className="home-section-box">
        <div className="home-content">
          <h3>{CarRental}</h3>
          <h1>{Rental}</h1>
        </div>
        <div className="home-img-slider">
          <Slider {...CarHomeSliderSettings} className="car-slider-main">
            {dynamicNumber(3).map((item, index) => (
              <div className="main-car-img" key={index}>
                <Image src={dynamicImage(`car/home-img/${item}.png`)} className="img-fluid" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="property-home-tab car-home-tab">
        <div className="car-tab-flex">
          <SearchTabList showTab={[1, 2, 5, 6]} endPoint={2} pills />
          <a href={Href} className="scroll-down">
            <Image src={dynamicGrf("mouse-animation.gif")} alt="mouse-animation" className="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarHomeSection;
