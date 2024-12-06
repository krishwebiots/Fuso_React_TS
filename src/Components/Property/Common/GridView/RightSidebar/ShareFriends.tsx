import { Link } from "react-router-dom";

const ShareFriends = () => {
  return (
    <div className="share-friends">
      <h6>Have a friend who’ll be good for this job?</h6>
      <Link to="https://web.whatsapp.com/" target="_blank" className="btn-solid">
        <i className="ri-whatsapp-line" />
        Share with a Friend
      </Link>
    </div>
  );
};

export default ShareFriends;
