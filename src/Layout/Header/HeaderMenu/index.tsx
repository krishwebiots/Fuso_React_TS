import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Href } from "../../../Constants/Constants";
import { MenuItem } from "../../../Data/Layout/Header";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";
import { setSidebarOpen } from "../../../ReduxToolkit/Reducers/LayoutReducers";
import MegaMenu from "./MegaMenu";
import MenuImage from "./MenuImage";
import SubMenu from "./SubMenu";
import UseOutsideDropdown from "../../../Utils/UseOutsideDropdown";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const { sidebarOpen } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { ref, isComponentVisible, setIsComponentVisible } = UseOutsideDropdown(sidebarOpen);

  const toggleSection = (title: string) => setOpenSections((prevState) => ({ [title]: !prevState[title] }));

  const toggleMenu = () => {
    setIsComponentVisible(!sidebarOpen);
    dispatch(setSidebarOpen(!isComponentVisible));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    dispatch(setSidebarOpen(isComponentVisible));
  }, [dispatch, isComponentVisible]);

  useEffect(() => setIsComponentVisible(sidebarOpen), [setIsComponentVisible, sidebarOpen]);
  return (
    <nav ref={ref} className={`sidebar-nav ${isComponentVisible ? "open" : ""}`}>
      <div className="menu-header">
        <h5 className="menu-title">Menu</h5>
        <a href={Href} className="close-btn" onClick={toggleMenu}>
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
              {mainMenu.megaMenuImage && <MenuImage mainMenu={mainMenu.children} toggleMenu={toggleMenu} />}
              {!mainMenu.megaMenuImage && !mainMenu.megaMenu && (
                <ul className="dropdown-megamenu sample link-list">
                  <SubMenu menu={mainMenu.children} level={0} />
                </ul>
              )}
              {mainMenu.megaMenu && <MegaMenu mainMenu={mainMenu.children} toggleMenu={toggleMenu} />}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
