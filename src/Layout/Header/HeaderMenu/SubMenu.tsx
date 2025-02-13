import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { Href } from "../../../Constants/Constants";
import { MenuListType } from "../../../Types/LayoutType";

const SubMenu: FC<MenuListType> = ({ menu, level }) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const { t } = useTranslation();

  const toggleSection = (title: string) => {
    setOpenSections((prevState) => ({ [title]: !prevState[title] }));
    if (level === 1) window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <Fragment>
      {menu &&
        menu.map((menuItem, index) => (
          <li className={`${level === 0 && menuItem.children ? "dropdown-menus dropdown-right" : ""}${menuItem.children ? " expand-btn" : ""}`} key={index}>
            <Link to={menuItem.path ? menuItem.path : Href} className={`menu-link ${level === 0 && menuItem.children ? "menu-item" : ""}${menuItem.children && menuItem.title && openSections[menuItem.title] ? " open" : ""}`} onClick={() => menuItem.title && toggleSection(menuItem.title)}>
              {t(menuItem.title ? menuItem.title : "")}
            </Link>
            {menuItem.children && (
              <ul className="menu-right sample">
                <SubMenu menu={menuItem.children} level={level + 1} />
              </ul>
            )}
          </li>
        ))}
    </Fragment>
  );
};

export default SubMenu;
