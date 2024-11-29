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
  const [firstPart] = pathname
    .split("/")
    .slice(1)
    .map((item) => item.replace(SymbolRegex, " "));

  const { className, favicon } = PathSettings[firstPart] || PathSettings.default;

  useEffect(() => {
    document.body.className = className;
    SetFavicon(`${process.env.PUBLIC_URL}/assets/images/logo/${favicon}`);
    Aos.init({ once: true });

    return () => SetFavicon(`${process.env.PUBLIC_URL}/assets/images/logo/favicon-3.png`);
  }, [className, favicon]);
  const isJobOrProperty = ["car-2", "job-3", "job-2", "property-2"].some((item) => firstPart.includes(item));

  return (
    <div>
      <Loader part={firstPart} />
      <Header part={firstPart} />
      <MobileMenu />
      <Outlet />
      {isJobOrProperty ? <FooterDemo2 part={firstPart} /> : <FooterDemo1 part={firstPart} />}
      <TapTop part={firstPart} />
      <Customizer part={firstPart} />
      <SearchModal type={SearchModalData[firstPart] || SearchModalData.car} />
    </div>
  );
};

export default Layout;
