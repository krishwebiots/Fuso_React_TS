import { LanguageCircle, ProfileCircle } from "iconsax-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { Href, Language, MyActive, SignOut } from "../../Constants/Constants";
import { AccountData, Cities, LanguagesData } from "../../Data/Layout/Header";
import { useAppDispatch, useAppSelector } from "../../ReduxToolkit/Hooks";
import { setCartData } from "../../ReduxToolkit/Reducers/Layout/LayoutReducers";
import { RouteList } from "../../Routers/RouteList";
import { dynamicImage, Image } from "../../Utils";
import Sidebar from "./Sidebar";

const Header = () => {
  const [selectedCity, setSelectedCity] = useState("Amsterdam");
  const { sidebarOpen } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();

  return (
    <header className="px-0" id="header">
      <Container>
        <div className="header-flex">
          <div className="left-side-header">
            <a href={Href} className={`toggle ${sidebarOpen ? "open" : ""}`} onClick={() => dispatch(setCartData())}>
              <i className="ri-menu-line" />
            </a>
            <Link to={RouteList.Home.CarDemo1} className="header-logo">
              <Image src={dynamicImage("logo/1.png")} alt="logo" className="img-fluid" />
            </Link>
            <div className="select-dropdown">
              <a href={Href} className="select-button">{selectedCity}</a>
              <div className="mega-menu-1">
                <ul className="select-menu">
                  {Cities.map((city) => (
                    <li key={city}>
                      <a className={`select-item ${city === selectedCity ? "active" : ""}`} href={Href} onClick={() => setSelectedCity(city)}>{city}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Sidebar />
          <div className="right-side-header">
            <div className="icon-side">
              <div className="login-flex onhover-dropdown">
                <a href={Href} className="login-icon">
                  <ProfileCircle />
                  <span>Account</span>
                  <i className="ri-arrow-down-wide-line" />
                </a>
                <ul className="login-list onhover-list">
                  <li className="active-item"><span>{MyActive}</span></li>
                  {AccountData.map((item, index) => (
                    <li key={index} className="active-item">
                      <Link to={RouteList.Pages.Other.UserDashboard}>{item}</Link>
                      {item === "Searches" && <label>New</label>}
                    </li>
                  ))}
                  <li className="active-item">
                    <Link to={RouteList.Pages.Other.Login1} className="btn-solid">{SignOut}</Link>
                  </li>
                </ul>
              </div>
              <div className="login-flex onhover-dropdown">
                <a href={Href} className="login-icon">
                  <LanguageCircle />
                  <span>{Language}</span>
                  <i className="ri-arrow-down-wide-line" />
                </a>
                <ul className="active-list onhover-list">
                  {LanguagesData.map((item, index) => (
                    <li className="active-item" key={index} onClick={() => i18n.changeLanguage(item.data)}>
                      <a href={Href}>{item.language}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Link to={Href} className={`overlay${sidebarOpen ? " overlay--active" : ""}`} />
    </header>
  );
};

export default Header;
