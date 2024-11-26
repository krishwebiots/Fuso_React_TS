import { FC } from "react";
import { Link } from "react-router-dom";
import { Href } from "../../../Constants/Constants";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";
import { setSidebarOpen } from "../../../ReduxToolkit/Reducers/SidebarReducers";
import { RouteList } from "../../../Routers/RouteList";
import { HeaderType } from "../../../Types/LayoutType";
import { dynamicImage, Image } from "../../../Utils";
import CitiesDropdown from "./CitiesDropdown";

const LeftHeader: FC<HeaderType> = ({ part, isJobOrProperty }) => {
  const dispatch = useAppDispatch();
  const { sidebarOpen } = useAppSelector((state) => state.sidebar);

  return (
    <div className="left-side-header">
      <a href={Href} className={`toggle ${sidebarOpen ? "open" : ""}`} onClick={() => dispatch(setSidebarOpen())}>
        <i className="ri-menu-line" />
      </a>
      <Link to={RouteList.Home.CarDemo1} className="header-logo">
        <Image src={dynamicImage(`logo/${part?.includes("property-2") ? "2" : "1"}.png`)} alt="logo" className="img-fluid" />
      </Link>
      {!isJobOrProperty && <CitiesDropdown />}
    </div>
  );
};

export default LeftHeader;
