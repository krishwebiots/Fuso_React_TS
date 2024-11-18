import { Fragment, useState } from "react";
import { Href } from "../../../Constants/Constants";
import { Cities } from "../../../Data/Layout/Header";

const CitiesDropdown = () => {
  const [selectedCity, setSelectedCity] = useState("Amsterdam");

  return (
    <Fragment>
      <div className="select-dropdown">
        <a href={Href} className="select-button">
          {selectedCity}
        </a>
        <div className="mega-menu-1">
          <ul className="select-menu">
            {Cities.map((city) => (
              <li key={city}>
                <a className={`select-item ${city === selectedCity ? "active" : ""}`} href={Href} onClick={() => setSelectedCity(city)}>
                  {city}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default CitiesDropdown;
