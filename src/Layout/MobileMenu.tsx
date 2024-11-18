import { Heart, House, Profile, SearchNormal1 } from "iconsax-react";
import { Link } from "react-router-dom";
import { Href } from "../Constants/Constants";
import { RouteList } from "../Routers/RouteList";

const MobileMenu = () => {
  return (
    <ul className="mobile-menu">
      <li className="active">
        <Link to={RouteList.Home.CarDemo1}>
          <House />
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link to={Href}>
          <SearchNormal1 />
          <span>Search</span>
        </Link>
      </li>
      <li>
        <Link to={RouteList.Car.CarWishlist}>
          <Heart />
          <span>Shortlist</span>
        </Link>
      </li>
      <li>
        <Link to={RouteList.Pages.Other.UserDashboard}>
          <Profile />
          <span>Profile</span>
        </Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
