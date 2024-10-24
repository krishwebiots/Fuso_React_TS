import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import TapTop from "./TapTop";

const Layout = () => {
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
