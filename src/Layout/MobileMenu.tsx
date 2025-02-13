import { Heart, House, Profile, SearchNormal1 } from "iconsax-react";
import { Link } from "react-router-dom";
import { Home, Href, ProfileTitle, Search, Shortlist } from "../Constants/Constants";
import { RouteList } from "../Routers/RouteList";
import { setSearchModal } from "../ReduxToolkit/Reducers/LayoutReducers";
import { useAppDispatch } from "../ReduxToolkit/Hooks";
import UsePathName from "../Utils/UsePathName";

const MobileMenu = () => {
  const dispatch = useAppDispatch();
  const [Path] = UsePathName();

  const NavigateShortlist = Path.includes("job") ? RouteList.Job.JobWishlist : Path.includes("property") ? RouteList.Property.PropertyWishlist : RouteList.Car.CarWishlist;

  return (
    <ul className={`mobile-menu ${Path === "car-2" ? "dark-mobile-menu" : Path === "job" ? "job-color-change" : ""}`}>
      <li className="active">
        <Link to={RouteList.Home.CarDemo1}>
          <House className="iconsax" />
          <span>{Home}</span>
        </Link>
      </li>
      <li>
        <Link to={Href} onClick={() => dispatch(setSearchModal())}>
          <SearchNormal1 className="iconsax" />
          <span>{Search}</span>
        </Link>
      </li>
      <li>
        <Link to={NavigateShortlist}>
          <Heart className="iconsax" />
          <span>{Shortlist}</span>
        </Link>
      </li>
      <li>
        <Link to={RouteList.Pages.Other.UserDashboard}>
          <Profile className="iconsax" />
          <span>{ProfileTitle}</span>
        </Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
