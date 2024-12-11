import { Link } from "react-router-dom";
import { FollowUs } from "../../../../Constants/Constants";
import { SocialContactData } from "../../../../Data/Pages/Blog";

const Follow = () => {
  return (
    <div className="follow-flex">
      <h4>{FollowUs}</h4>
      <ul className="social-list">
        {SocialContactData.map((item, index) => (
          <li key={index}>
            <Link to={item.url} target="_blank">
              <i className={item.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Follow;
