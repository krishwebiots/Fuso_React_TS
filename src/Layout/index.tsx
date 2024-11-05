/* eslint-disable no-useless-escape */
import Aos from "aos";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PathSettings } from "../Types/LayoutType";
import { setFavicon } from "../Utils/setFavicon";
import Footer from "./Footer";
import FooterDemo2 from "./Footer/FooterDemo2";
import Header from "./Header";
import Loader from "./Loader";
import MobileMenu from "./MobileMenu";
import TapTop from "./TapTop";

const Layout = () => {
  const { pathname } = useLocation();
  const symbolRegex = /[!@#\$%\^\*\(\)_\+\{\}\[\]:;"'<>,.?/\\|`~=]/g;
  const [firstPart] = pathname
    .split("/")
    .slice(1)
    .map((item) => item.replace(symbolRegex, " "));

  const pathSettings: Record<string, PathSettings> = {
    "car-2": { className: "car2-color", favicon: "favicon-4.png" },
    "job-1": { className: "job-color", favicon: "favicon-5.png" },
    "job-2": { className: "job2-color large-container", favicon: "favicon-6.png" },
    "job-3": { className: "job3-color large-container", favicon: "favicon-7.png" },
    "property-1": { className: "", favicon: "favicon-1.png" },
    "property-2": { className: "property2-color", favicon: "favicon-2.png" },
    default: { className: "car-color", favicon: "favicon-3.png" },
  };

  const { className, favicon } = pathSettings[firstPart] || pathSettings.default;

  useEffect(() => {
    document.body.className = className;
    setFavicon(`${process.env.PUBLIC_URL}/assets/images/logo/${favicon}`);
    Aos.init({ once: true });

    return () => setFavicon(`${process.env.PUBLIC_URL}/assets/images/logo/favicon-3.png`);
  }, [className, favicon]);
  const isJobOrProperty = ["car-2", "job-3", "job-2", "property-2"].some((item) => firstPart.includes(item));

  return (
    <div>
      <Loader />
      <Header />
      <MobileMenu />
      <Outlet />
      {isJobOrProperty ? <FooterDemo2 part={firstPart} /> : <Footer part={firstPart} />}
      <TapTop />
    </div>
  );
};

export default Layout;
