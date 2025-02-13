import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { Href } from "../../Constants/Constants";
import { ContainerClassMap, HeaderClassMap } from "../../Data/Layout/Header";
import { useAppSelector } from "../../ReduxToolkit/Hooks";
import UsePathName from "../../Utils/UsePathName";
import HeaderMenu from "./HeaderMenu";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
import TopBar from "./TopBar";

const Header = () => {
  const [Path] = UsePathName();

  const { sidebarOpen } = useAppSelector((state) => state.layout);

  const isJobOrProperty = ["job-2", "job-3", "property-2"].some((item) => Path?.includes(item));
  const isTopBar = ["car-2", "property-2"].some((item) => Path?.includes(item));

  return (
    <header className={`px-0${HeaderClassMap[Path || ""] || ""}`} id="header">
      {isTopBar && <TopBar part={Path} />}
      <Container className={ContainerClassMap[Path || ""] || ""}>
        <div className="header-flex">
          <LeftHeader part={Path} isJobOrProperty={isJobOrProperty} />
          <HeaderMenu />
          <RightHeader part={Path} isJobOrProperty={isJobOrProperty} />
        </div>
      </Container>
      <Link to={Href} className={`overlay${sidebarOpen ? " overlay--active" : ""}`} />
    </header>
  );
};

export default Header;
