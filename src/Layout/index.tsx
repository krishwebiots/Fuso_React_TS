import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import TapTop from "./TapTop";
import { useEffect } from "react";
import Aos from "aos";

const Layout = () => {
  useEffect(() => {
    Aos.init({once: true,});
  }, []);
  return (
    <div>
      <Header />
      <MobileMenu />
      <Outlet />
      <Footer />
      <TapTop />
    </div>
  );
};

export default Layout;
