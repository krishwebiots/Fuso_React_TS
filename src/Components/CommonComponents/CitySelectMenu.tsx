import { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import { CitySelectMenuType } from "../../Types/CommonComponentsType";

const CitySelectMenu: FC<CitySelectMenuType> = ({ multiColumn, cityList, selectedCity, onSelectCity, href }) => {
  return (
    <Fragment>
      {multiColumn ? (
        <Col xl={4} sm={6}>
          <ul className="select-menu">
            {cityList.map((city, key) => (
              <li key={key}>
                <Link className={`select-item ${city === selectedCity ? "active" : ""}`} to={href} onClick={() => onSelectCity(city)}>
                  {city}
                </Link>
              </li>
            ))}
          </ul>
        </Col>
      ) : (
        <ul className="select-menu">
          {cityList.map((city, key) => (
            <li key={key}>
              <Link className={`select-item ${city === selectedCity ? "active" : ""}`} to={href} onClick={() => onSelectCity(city)}>
                {city}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default CitySelectMenu;
