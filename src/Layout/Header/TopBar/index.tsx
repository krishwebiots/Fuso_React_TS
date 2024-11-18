import { Link } from "react-router-dom";
import { SocialLinks } from "../../../Data/Layout/Header";
import { dynamicSvg, Image } from "../../../Utils";
import { PathTypes } from "../../../Types/LayoutType";

const TopBar: React.FC<PathTypes> = ({ part }) => {
  return (
    <div className={`first-topbar${part === "property-2" ? " bg-topbar" : ""}`}>
      <div className="container">
        <div className="topbar-flex">
          <ul className="topbar-left">
            <li>
              <Image src={dynamicSvg("car2/call.svg")} alt="call" className="img-fluid" />
              <span>(702) 555-0122</span>
            </li>
            <li>
              <Image src={dynamicSvg("car2/mail.svg")} alt="mail" className="img-fluid" />
              <span>general.info@gmail.com</span>
            </li>
          </ul>
          <ul className="topbar-right">
            {SocialLinks.map(({ href, icon }) => (
              <li key={href}>
                <Link to={href} target="_blank" rel="noopener noreferrer">
                  <i className={icon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
