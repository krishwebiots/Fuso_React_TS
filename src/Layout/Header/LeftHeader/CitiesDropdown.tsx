import { Fragment, useState } from "react";
import { Href } from "../../../Constants/Constants";
import { Cities } from "../../../Data/Layout/Header";
import CitySelectMenu from "../../../Components/CommonComponents/CitySelectMenu";

const CitiesDropdown = () => {
  const [selectedCity, setSelectedCity] = useState("Amsterdam");

  return (
    <Fragment>
      <div className="select-dropdown">
        <a href={Href} className="select-button">
          {selectedCity}
        </a>
        <div className="mega-menu-1">
          <CitySelectMenu multiColumn={false} cityList={Cities} selectedCity={selectedCity} onSelectCity={(city) => setSelectedCity(city)} href={Href} />
        </div>
      </div>
    </Fragment>
  );
};

export default CitiesDropdown;
