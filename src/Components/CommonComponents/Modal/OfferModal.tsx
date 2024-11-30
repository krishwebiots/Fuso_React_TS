import { Button, Col, Input, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { MakeOfferPriceTitle, SubmitReview } from "../../../Constants/Constants";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";
import { setOfferModal } from "../../../ReduxToolkit/Reducers/SidebarReducers";
import CloseBtn from "../CloseBtn";

const OfferModal = () => {
  const { offerModal } = useAppSelector((state) => state.sidebar);
  const dispatch = useAppDispatch();

  const toggle = () => dispatch(setOfferModal());
  return (
    <Modal fade centered modalClassName="theme-modal" isOpen={offerModal} toggle={toggle}>
      <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
      <ModalBody>
        <h3 className="car-title">{MakeOfferPriceTitle}</h3>
        <Row className="gy-3">
          <Col xs="12">
            <div className="review-input">
              <Input type="text" placeholder="Enter Your Name" />
            </div>
          </Col>
          <Col xs="12">
            <div className="review-input">
              <Input type="text" placeholder="Enter Your E-mail" />
            </div>
          </Col>
          <Col xs="12">
            <div className="review-input">
              <Input type="text" placeholder="Your Phone" />
            </div>
          </Col>
          <Col xs="12">
            <div className="review-input">
              <Input type="text" placeholder="Trade Price" />
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

export default OfferModal;
