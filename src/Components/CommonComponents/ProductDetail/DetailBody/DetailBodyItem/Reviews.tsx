import { Clock, MessageEdit } from "iconsax-react";
import { FC } from "react";
import { Rating } from "react-simple-star-rating";
import { Fragment } from "react/jsx-runtime";
import { Button, Col, Progress, Row } from "reactstrap";
import { AddReviewTitle, Href, OverallRatings, ReviewsTitle, WasThisHelpful, WriteReview } from "../../../../../Constants/Constants";
import { ReviewProgressData } from "../../../../../Data/Car";
import { ReviewsData } from "../../../../../Data/Property";
import { useAppDispatch } from "../../../../../ReduxToolkit/Hooks";
import { setReviewModal } from "../../../../../ReduxToolkit/Reducers/LayoutReducers";
import { DetailBodyItemType } from "../../../../../Types/ProductType";
import { dynamicImage, Image } from "../../../../../Utils";
import ReviewModal from "../../../../CommonComponents/Modal/ReviewModal";

const Reviews: FC<DetailBodyItemType> = ({ label, type }) => {
  const dispatch = useAppDispatch();
  return (
    <Fragment>
      {type === "car" ? (
        <div className="detail-box" id="reviews">
          <div className="modal-btn-flex">
            <h3 className="car-title">{ReviewsTitle}</h3>
            <Button className="text-btn" color="transparent" onClick={() => dispatch(setReviewModal())}>
              <MessageEdit className="iconsax" /> {AddReviewTitle}
            </Button>
          </div>
          <div className="overall-review-box">
            <Row className="g-xxl-5 gy-3">
              <Col xxl="3">
                <div className="progress-circle" data-percentage={90}>
                  <span className="progress-left">
                    <span className="progress-bar-line" />
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar-line" />
                  </span>
                  <div className="progress-value">
                    <div>
                      <h6>
                        {OverallRatings}
                        <span>4.6</span>out of 5
                      </h6>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xxl="9">
                <ul className="review-list">
                  {ReviewProgressData.map(({ title, rating, progress }, index) => (
                    <li key={index} className="review-item">
                      <div className="rating-flex">
                        <h6>{title}</h6>
                        <span>{rating}</span>
                      </div>
                      <Progress value={progress} />
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </div>
          <ul className="review-main-list">
            {ReviewsData.slice(3).map((item, index) => (
              <li key={index} className="review-box">
                <div className="review-profile">
                  <Image src={dynamicImage(item.img)} className="img-fluid" />
                  <div className="profile-flex">
                    <div>
                      <h6>{item.name}</h6>
                      <ul className="rating">
                        <Rating size={20} initialValue={item.stars} />
                      </ul>
                    </div>
                    <span>
                      <Clock className="iconsax" /> {item.date}
                    </span>
                  </div>
                </div>
                <p>"{item.text}"</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="detail-body" id="reviews">
          <div className="modal-btn-flex">
            {label && <h4 className="detail-page-title">{ReviewsTitle}</h4>}
            <Button className="text-btn" color="transparent" onClick={() => dispatch(setReviewModal())}>
              <MessageEdit className="iconsax" /> {WriteReview}
            </Button>
          </div>
          <ul className="review-list">
            {ReviewsData.slice(0, 3).map((review, index) => (
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
                      <span>{WasThisHelpful}</span>
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
      )}
      <ReviewModal />
    </Fragment>
  );
};

export default Reviews;
