import Aos from "aos";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PathSettings, SearchModalData } from "../Data/Layout/Layout";
import { SetFavicon } from "../Utils/SetFavicon";
import Customizer from "./Customizer";
import FooterDemo1 from "./Footer/FooterDemo1";
import FooterDemo2 from "./Footer/FooterDemo2";
import Header from "./Header";
import Loader from "./Loader";
import MobileMenu from "./MobileMenu";
import TapTop from "./TapTop";
import { SymbolRegex } from "../Constants/Constants";
import SearchModal from "../Components/CommonComponents/Modal/SearchModal";

const Layout = () => {
  const { pathname } = useLocation();
  const Path = pathname
    .split("/")
    .slice(1)
    .map((item) => item.replace(SymbolRegex, " "));

  const { className, favicon } = PathSettings[Path[0]] || PathSettings.default;

  useEffect(() => {
    document.body.className = className;
    SetFavicon(`${process.env.PUBLIC_URL}/assets/images/logo/${favicon}`);
    Aos.init({ once: true });

    return () => SetFavicon(`${process.env.PUBLIC_URL}/assets/images/logo/favicon-3.png`);
  }, [className, favicon]);
  const isJobOrProperty = ["car-2", "job-3", "job-2", "property-2"].some((item) => Path[0].includes(item));

  return (
    <div>
      <Loader part={Path[0]} />
      <Header part={Path[0]} />
      <MobileMenu />
      <Outlet />
      {Path[2] !== "portfolio-vertical-slider" && (isJobOrProperty ? <FooterDemo2 part={Path[0]} /> : <FooterDemo1 part={Path[0]} />)}
      <TapTop part={Path[0]} />
      <Customizer part={Path[0]} />
      <SearchModal type={SearchModalData[Path[0]] || SearchModalData.car} />
    </div>
  );
};

export default Layout;
