import { MessageEdit } from "iconsax-react";
import { Rating } from "react-simple-star-rating";
import { Fragment } from "react/jsx-runtime";
import { Button } from "reactstrap";
import { Href, ReviewsTitle, WriteReview } from "../../../../../Constants/Constants";
import { ReviewsData } from "../../../../../Data/Property";
import { useAppDispatch } from "../../../../../ReduxToolkit/Hooks";
import { setReviewModal } from "../../../../../ReduxToolkit/Reducers/SidebarReducers";
import { dynamicImage, Image } from "../../../../../Utils";
import ReviewModal from "../../../../CommonComponents/Modal/ReviewModal";

const Reviews = () => {
  const dispatch = useAppDispatch();
  return (
    <Fragment>
      <div className="detail-body">
        <div className="modal-btn-flex">
          <h4 className="detail-page-title">{ReviewsTitle}</h4>
          <Button className="text-btn" color="transparent" onClick={() => dispatch(setReviewModal())}>
            <MessageEdit className="iconsax" /> {WriteReview}
          </Button>
        </div>
        <ul className="review-list">
          {ReviewsData.map((review, index) => (
            <li key={index} className="review-box">
              <div className="review-item">
                <div className="review-img-info">
                  <Image src={dynamicImage(review.img)} alt={`review-${index + 1}`} className="img-fluid" />
                  <div className="review-info">
                    <h5>{review.name}</h5>
                    <span>{review.date}</span>
                  </div>
                </div>
                <div className="rating-flex d-sm-block d-none">
                  <div className="like-section">
                    <span>Was this helpful?</span>
                    <a href={Href}>
                      <i className="ri-thumb-up-line" />
                      {review.likes}
                    </a>
                    <a href={Href}>
                      <i className="ri-thumb-down-line" />0
                    </a>
                  </div>
                  <div className="rating">
                    <Rating size={20} initialValue={4} />
                  </div>
                </div>
              </div>
              <p>{review.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <ReviewModal />
    </Fragment>
  );
};

export default Reviews;
