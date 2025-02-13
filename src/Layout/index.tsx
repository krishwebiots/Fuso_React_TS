import Aos from "aos";
import { Fragment, useEffect } from "react";
import { Outlet } from "react-router-dom";
import SearchModal from "../Components/CommonComponents/Modal/SearchModal";
import { PathSettings, SearchModalData } from "../Data/Layout/Layout";
import { SetFavicon } from "../Utils/SetFavicon";
import UsePathName from "../Utils/UsePathName";
import Customizer from "./Customizer";
import FooterDemo1 from "./Footer/FooterDemo1";
import FooterDemo2 from "./Footer/FooterDemo2";
import Header from "./Header";
import Loader from "./Loader";
import MobileMenu from "./MobileMenu";
import TapTop from "./TapTop";

const Layout = () => {
  const Path = UsePathName();

  const { className, favicon } = PathSettings[Path[0]] || PathSettings.default;

  useEffect(() => {
    document.body.className = className;
    SetFavicon(`${process.env.PUBLIC_URL}/assets/images/logo/${favicon}`);
    Aos.init({ once: true });

    return () => SetFavicon(`${process.env.PUBLIC_URL}/assets/images/logo/favicon-3.png`);
  }, [className, favicon]);
  const isJobOrProperty = ["car-2", "job-3", "job-2", "property-2"].some((item) => Path[0].includes(item));

  return (
    <Fragment>
      {Path[2] === "login-2" || Path[2] === "login-3" || Path[2] === "signup-2" || Path[2] === "signup-3" ? (
        <Outlet />
      ) : (
        <Fragment>
          <Loader />
          <Header />
          <MobileMenu />
          <Outlet />
          {Path[2] !== "portfolio-vertical-slider" && (isJobOrProperty ? <FooterDemo2 /> : <FooterDemo1 />)}
          <TapTop />
          <SearchModal type={SearchModalData[Path[0]] || SearchModalData.car} />
        </Fragment>
      )}
      <Customizer />
    </Fragment>
  );
};

export default Layout;
