import { Button } from "reactstrap";
import { ReviewsData } from "../../../Data/Pages/Blog";
import { dynamicImage, Image } from "../../../Utils";
import { Clock, MessageEdit } from "iconsax-react";
import { Rating } from "react-simple-star-rating";
import { CommentTitle, LeaveCommentTitle } from "../../../Constants/Constants";
import { Fragment } from "react/jsx-runtime";
import ReviewModal from "../Modal/ReviewModal";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { setReviewModal } from "../../../ReduxToolkit/Reducers/LayoutReducers";

const Comment = () => {
  const dispatch = useAppDispatch();
  return (
    <Fragment>
      <div className="detail-box review-detail">
        <div className="modal-btn-flex">
          <h3 className="car-title">{CommentTitle}</h3>
          <Button className="text-btn" color="transparent" onClick={() => dispatch(setReviewModal())}>
            <MessageEdit className="iconsax" /> {LeaveCommentTitle}
          </Button>
        </div>
        <ul className="review-main-list">
          {ReviewsData.map((review, index) => (
            <li key={index} className={`review-box ${review.isReply ? "replay-box" : ""}`}>
              <div className="review-profile">
                <Image src={dynamicImage(review.image)} alt={review.name} className="img-fluid" />
                <div className="profile-flex">
                  <div>
                    <h6>{review.name}</h6>
                    <ul className="rating">
                      <li>
                        <Rating size={20} initialValue={review.rating} />
                      </li>
                      <li>
                        <span>({review.rating})</span>
                      </li>
                    </ul>
                  </div>
                  <span>
                    <Clock className="iconsax" /> {review.timeAgo}
                  </span>
                </div>
              </div>
              <p>{review.message}</p>
            </li>
          ))}
        </ul>
      </div>
      <ReviewModal />
    </Fragment>
  );
};

export default Comment;
