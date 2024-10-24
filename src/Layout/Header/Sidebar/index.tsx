import { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { Href } from "../../../Constants/Constants";
import { MenuItem } from "../../../Data/Layout/Header";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";
import { setCartData } from "../../../ReduxToolkit/Reducers/Layout/LayoutReducers";
import { RouteList } from "../../../Routers/RouteList";
import { dynamicImage, Image } from "../../../Utils";
import SidebarSubMenu from "./SidebarSubMenu";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const { sidebarOpen } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const toggleSection = (title: string) => setOpenSections((prevState) => ({ [title]: !prevState[title] }));
  return (
    <nav className={`sidebar-nav ${sidebarOpen ? "open" : ""}`}>
      <div className="menu-header">
        <h5 className="menu-title">Menu</h5>
        <a href={Href} className="close-btn" onClick={() => dispatch(setCartData())}>
          <i className="ri-close-line" />
        </a>
      </div>
      <ul className="menu-items">
        {MenuItem &&
          MenuItem.map((mainMenu, index) => (
            <li className={`expand-btn ${!mainMenu.megaMenuImage && !mainMenu.megaMenu ? "dropdown-menus" : ""}`} key={index}>
              <Link to={Href} className={`menu-item ${openSections[mainMenu.title] ? "open" : ""}`} onClick={() => toggleSection(mainMenu.title)}>
                {t(mainMenu.title)}
              </Link>
              {mainMenu.megaMenuImage && (
                <div className="mega-menu sample">
                  <Row className="row-cols-xl-4 row-cols-1 gy-4">
                    {mainMenu.children.map((child, index) => (
                      <Col key={index}>
                        <Link to={child.path ? child.path : RouteList.Home.CarDemo1} className="demo-box">
                          <div className="demo-img">
                            <div className="overflow-hidden">
                              <Image src={dynamicImage(child.image)} alt="demo-1" />
                            </div>
                          </div>
                          <h6>{t(child.title)}</h6>
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
              {!mainMenu.megaMenuImage && !mainMenu.megaMenu && (
                <ul className="dropdown-megamenu sample link-list">
                  <SidebarSubMenu menu={mainMenu.children} level={0} />
                </ul>
              )}
              {mainMenu.megaMenu && (
                <div className="mega-menu sample">
                  <Row className="row-cols-xxl-5 gy-xl-4">
                    {mainMenu.children.map((child, index) => (
                      <div className="col" key={index}>
                        {child.section &&
                          child.section.map((item, index) => (
                            <div key={index} className="link-section">
                              <h5 className="menu-title">{t(item.title)}</h5>
                              <ul className="link-list">
                                {item.children.map((subChild, subIndex) => (
                                  <li key={subIndex}>
                                    <Link className="menu-link" to={subChild.path ? subChild.path : RouteList.Home.CarDemo1}>
                                      {t(subChild.title)}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                      </div>
                    ))}
                  </Row>
                </div>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
