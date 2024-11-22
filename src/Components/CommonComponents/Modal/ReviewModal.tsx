import { Button, Col, Input, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { SubmitReview, WriteReview } from "../../../Constants/Constants";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";
import { setReviewModal } from "../../../ReduxToolkit/Reducers/SidebarReducers";
import CloseBtn from "../CloseBtn";

const ReviewModal = () => {
  const { reviewModal } = useAppSelector((state) => state.sidebar);
  const dispatch = useAppDispatch();

  const toggle = () => dispatch(setReviewModal());
  return (
    <Modal fade size="lg" centered modalClassName="theme-modal review-modal" isOpen={reviewModal} toggle={toggle}>
      <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
      <ModalBody>
        <h4 className="detail-page-title">{WriteReview}</h4>
        <Row className="gy-sm-4 gy-3">
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
