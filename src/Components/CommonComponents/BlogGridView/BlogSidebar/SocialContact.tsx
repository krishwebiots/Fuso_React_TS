import { Link } from "react-router-dom";
import { SocialContactTitle } from "../../../../Constants/Constants";
import { SocialContactData } from "../../../../Data/Pages/Blog";

const SocialContact = () => {
  return (
    <div className="blog-sidebar-box">
      <div className="sidebar-title">
        <h4>{SocialContactTitle}</h4>
      </div>
      <ul className="social-list">
        {SocialContactData.map((item, index) => (
          <li key={index}>
            <Link to={item.url} target="_blank">
              <i className={item.icon} />
              <div className="social-name">
                <h6>{item.title}</h6>
                <span>{item.value}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialContact;
