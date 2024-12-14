import { Link } from "react-router-dom";
import { ForThisJob, ShareWithAFriend } from "../../../../../Constants/Constants";

const ShareFriends = () => {
  return (
    <div className="share-friends">
      <h6>{ForThisJob}</h6>
      <Link to="https://web.whatsapp.com/" target="_blank" className="btn-solid">
        <i className="ri-whatsapp-line" />
        {ShareWithAFriend}
      </Link>
    </div>
  );
};

export default ShareFriends;
