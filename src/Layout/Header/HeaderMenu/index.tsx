import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Href } from "../../../Constants/Constants";
import { MenuItem } from "../../../Data/Layout/Header";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";
import { setSidebarOpen } from "../../../ReduxToolkit/Reducers/LayoutReducers";
import MegaMenu from "./MegaMenu";
import MenuImage from "./MenuImage";
import SubMenu from "./SubMenu";

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
        <a href={Href} className="close-btn" onClick={() => dispatch(setSidebarOpen())}>
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
              {mainMenu.megaMenuImage && <MenuImage mainMenu={mainMenu.children} />}
              {!mainMenu.megaMenuImage && !mainMenu.megaMenu && (
                <ul className="dropdown-megamenu sample link-list">
                  <SubMenu menu={mainMenu.children} level={0} />
                </ul>
              )}
              {mainMenu.megaMenu && <MegaMenu mainMenu={mainMenu.children} />}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
