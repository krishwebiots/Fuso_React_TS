import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { Href } from "../../Constants/Constants";
import { Cities } from "../../Data/Layout/Header";
import Sidebar from "./Sidebar";
import { useAppDispatch, useAppSelector } from "../../ReduxToolkit/Hooks";
import { setCartData } from "../../ReduxToolkit/Reducers/Layout/LayoutReducers";

const Header = () => {
  const [selectedCity, setSelectedCity] = useState("Amsterdam");
  const { sidebarOpen } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  return (
    <header className="px-0 bg-dark" id="header">
      <Container>
        <div className="header-flex">
          <div className="left-side-header">
            <a href="#!" className={`toggle ${sidebarOpen ? "open" : ""}`} onClick={() => dispatch(setCartData())}>
              <i className="ri-menu-line" />
            </a>
            <a href="index.html" className="header-logo">
              <img src="assets/images/logo/1.png" alt="logo" className="img-fluid" />
            </a>
            <div className="select-dropdown">
              <a href="#!" className="select-button">
                {selectedCity}
              </a>
              <div className="mega-menu-1">
                <ul className="select-menu">
                  {Cities.map((city) => (
                    <li key={city}>
                      <a className={`select-item ${city === selectedCity ? "active" : ""}`} href="#!" onClick={() => setSelectedCity(city)}>
                        {city}
                      </a>
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
                <a href="#!" className="login-icon">
                  <i className="iconsax" data-icon="user-2-circle" />
                  <span>Account</span>
                  <i className="ri-arrow-down-wide-line" />
                </a>
                <ul className="login-list onhover-list">
                  <li className="active-item">
                    <span>my active</span>
                  </li>
                  <li className="active-item">
                    <a href="user-dashboard.html">All Rides</a>
                  </li>
                  <li className="active-item">
                    <a href="user-dashboard.html">My Account</a>
                  </li>
                  <li className="active-item">
                    <a href="user-dashboard.html">Saved Rides</a>
                  </li>
                  <li className="active-item">
                    <a href="privacy.html">Privacy</a>
                  </li>
                  <li className="active-item">
                    <a href="user-dashboard.html">Searches</a>
                    <label>New</label>
                  </li>
                  <li className="active-item">
                    <a href="user-dashboard.html">Recommendations</a>
                  </li>
                  <li className="active-item">
                    <a href="user-dashboard.html">My Profile</a>
                  </li>
                  <li className="active-item">
                    <a href="login1.html" className="btn-solid">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
              <div className="login-flex onhover-dropdown">
                <a href="#!" className="login-icon">
                  <i className="iconsax" data-icon="language-circle" />
                  <span>Language</span>
                  <i className="ri-arrow-down-wide-line" />
                </a>
                <ul className="active-list onhover-list">
                  <li className="active-item">
                    <a href="#!">English</a>
                  </li>
                  <li className="active-item">
                    <a href="#!">Spanish</a>
                  </li>
                  <li className="active-item">
                    <a href="#!">French</a>
                  </li>
                  <li className="active-item">
                    <a href="#!">German</a>
                  </li>
                  <li className="active-item">
                    <a href="#!">Korean</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Link to={Href} className="overlay" />
    </header>
  );
};

export default Header;
