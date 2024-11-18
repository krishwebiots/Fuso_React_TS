import { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import { SocialMediaData } from "../../../Data/Layout/Footer";
import { RouteList } from "../../../Routers/RouteList";
import { LogoAndSocialMediaType } from "../../../Types/LayoutType";
import { dynamicImage, Image } from "../../../Utils";

const LogoAndSocialMedia: FC<LogoAndSocialMediaType> = ({ description, endPoint }) => {
  return (
    <Fragment>
      <Link to={RouteList.Home.CarDemo1} className="footer-logo">
        <Image src={dynamicImage("logo/footer-logo.png")} alt="footer-logo" className="img-fluid" />
      </Link>
      <p>{description}</p>
      <ul className="dark-footer-social">
        {SocialMediaData.slice(0, endPoint).map((item, index) => (
          <li key={index}>
            <Link to={item.url} target="_blank">
              <i className={item.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default LogoAndSocialMedia;
