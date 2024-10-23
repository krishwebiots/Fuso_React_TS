import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { RouteList } from "../../../Routers/RouteList";
import { MenuListType } from "../../../Types/LayoutType";

const SidebarSubMenu: React.FC<MenuListType> = ({ menu, level, toggleSection, openSections }) => {
  return (
    <Fragment>
      {menu &&
        menu.map((menuItem, index) => (
          <li className={`${level === 0 ? "dropdown-menus dropdown-right" : ""} ${menuItem.children ? " expand-btn" : ""}`} key={index}>
            <Link to={menuItem.path ? menuItem.path : RouteList.Home.CarDemo1} className={`${level === 0 ? "menu-item menu-link" : ""}`}>
              {menuItem.title}
            </Link>
            {menuItem.children && (
              <ul className="menu-right menu-right sample">
                <SidebarSubMenu menu={menuItem.children} level={level + 1} toggleSection={toggleSection} openSections={openSections} />
              </ul>
            )}
          </li>
        ))}
    </Fragment>
  );
};

export default SidebarSubMenu;
