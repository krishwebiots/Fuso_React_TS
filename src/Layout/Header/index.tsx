import { FC } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { Href } from "../../Constants/Constants";
import { ContainerClassMap, HeaderClassMap } from "../../Data/Layout/Header";
import { useAppSelector } from "../../ReduxToolkit/Hooks";
import { PathTypes } from "../../Types/LayoutType";
import HeaderMenu from "./HeaderMenu";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
import TopBar from "./TopBar";

const Header: FC<PathTypes> = ({ part }) => {
  const { sidebarOpen } = useAppSelector((state) => state.sidebar);

  const isJobOrProperty = ["job-2", "job-3", "property-2"].some((item) => part?.includes(item));
  const isTopBar = ["car-2", "property-2"].some((item) => part?.includes(item));

  return (
    <header className={`px-0${HeaderClassMap[part || ""] || ""}`} id="header">
      {isTopBar && <TopBar part={part} />}
      <Container className={ContainerClassMap[part || ""] || ""}>
        <div className="header-flex">
          <LeftHeader part={part} isJobOrProperty={isJobOrProperty} />
          <HeaderMenu />
          <RightHeader part={part} isJobOrProperty={isJobOrProperty} />
        </div>
      </Container>
      <Link to={Href} className={`overlay${sidebarOpen ? " overlay--active" : ""}`} />
    </header>
  );
};

export default Header;
