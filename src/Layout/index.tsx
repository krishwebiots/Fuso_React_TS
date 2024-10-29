/* eslint-disable no-useless-escape */
import Aos from "aos";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import FooterDemo2 from "./Footer/FooterDemo2";
import Header from "./Header";
import Loader from "./Loader";
import MobileMenu from "./MobileMenu";
import TapTop from "./TapTop";

const Layout = () => {
  const path = useLocation();
  const symbolRegex = /[!@#\$%\^\*\(\)_\+\{\}\[\]:;"'<>,.?/\\|`~=]/g;
  const [firstPart] = path.pathname
    .split("/")
    .slice(1)
    .map((item) => item.replace(symbolRegex, " "));

  useEffect(() => {
    if (firstPart.includes("car-2")) document.body.className = "car2-color";
    else if (firstPart.includes("job-1")) document.body.className = "job-color";
    else if (firstPart.includes("job-2")) document.body.className = "job2-color";
    else if (firstPart.includes("job-3")) document.body.className = "job3-color";
    else if (firstPart.includes("property-1")) document.body.className = "";
    else if (firstPart.includes("property-2")) document.body.className = "property2-color";
    else document.body.className = "car-color";
    Aos.init({ once: true });
  }, [firstPart]);
  return (
    <div>
      <Loader />
      <Header />
      <MobileMenu />
      <Outlet />
      {(() => {
        if (firstPart.includes("car-2")) {
          return <FooterDemo2 />;
        } else {
          return <Footer part={firstPart} />;
        }
      })()}
      <TapTop />
    </div>
  );
};

export default Layout;
