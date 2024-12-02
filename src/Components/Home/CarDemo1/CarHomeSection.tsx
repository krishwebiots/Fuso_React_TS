import { CarRental, Href, Rental } from "../../../Constants/Constants";
import { dynamicGrf, Image } from "../../../Utils";
import CarImageSlider from "../Common/CarImageSlider";
import SearchTabList from "../Common/SearchTabList";

const CarHomeSection = () => {
  return (
    <div className="car-home-section">
      <div className="home-section-box">
        <div className="home-content">
          <h3>{CarRental}</h3>
          <h1>{Rental}</h1>
        </div>
        <CarImageSlider />
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
