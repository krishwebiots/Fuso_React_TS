import { Rating } from "react-simple-star-rating";
import { Fragment } from "react/jsx-runtime";
import { Button, Col, Input, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { AddReviewTitle, LeaveCommentTitle, SubmitReview, WriteReview } from "../../../Constants/Constants";
import { AddReviewListData } from "../../../Data/Car";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";
import { setReviewModal } from "../../../ReduxToolkit/Reducers/SidebarReducers";
import UsePathName from "../../../Utils/UsePathName";
import CloseBtn from "../CloseBtn";

const ReviewModal = () => {
  const { reviewModal } = useAppSelector((state) => state.sidebar);
  const dispatch = useAppDispatch();
  const Path = UsePathName();

  const toggle = () => dispatch(setReviewModal());
  return (
    <Modal fade size="lg" centered modalClassName="theme-modal review-modal" isOpen={reviewModal} toggle={toggle}>
      <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
      <ModalBody>
        <h4 className="detail-page-title">{Path.includes("car") ? AddReviewTitle : Path.includes("blog-left-classic") ? LeaveCommentTitle : WriteReview}</h4>
        <Row className="gy-sm-4 gy-3">
          {Path.includes("car") && (
            <Fragment>
              <Col lg="6">
                <ul className="add-review-list">
                  {AddReviewListData.slice(0, 3).map((item, index) => (
                    <li className="add-review-item" key={index}>
                      <span>{item}</span>
                      <Rating size={20} initialValue={1} />
                    </li>
                  ))}
                </ul>
              </Col>
              <Col lg="6">
                <ul className="add-review-list">
                  {AddReviewListData.slice(3).map((item, index) => (
                    <li className="add-review-item" key={index}>
                      <span>{item}</span>
                      <Rating size={20} initialValue={1} />
                    </li>
                  ))}
                </ul>
              </Col>
            </Fragment>
          )}
          <Col sm="6">
            <div className="review-input">
              <Input type="text" placeholder="Enter Your Name" />
            </div>
          </Col>
          <Col sm="6">
            <div className="review-input">
              <Input type="text" placeholder="Enter Your E-mail" />
            </div>
          </Col>
          <Col xs="12">
            <div className="review-input">
              <Input type="textarea" placeholder="Message" />
            </div>
          </Col>
          <Col xs="12">
            <div className="review-input">
              <Button className="btn-solid">{SubmitReview}</Button>
            </div>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default ReviewModal;
