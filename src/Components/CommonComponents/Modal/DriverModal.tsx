import { Button, Col, Input, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { ScheduleTestDriverTitle, SubmitReview } from "../../../Constants/Constants";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";
import { setDriverModal } from "../../../ReduxToolkit/Reducers/SidebarReducers";
import CloseBtn from "../CloseBtn";

const DriverModal = () => {
  const { driverModal } = useAppSelector((state) => state.sidebar);
  const dispatch = useAppDispatch();

  const toggle = () => dispatch(setDriverModal());
  return (
    <Modal fade centered modalClassName="theme-modal" isOpen={driverModal} toggle={toggle}>
      <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
      <ModalBody>
        <h3 className="car-title">{ScheduleTestDriverTitle}</h3>
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
              <Input type="date" placeholder="Select Date" />
            </div>
          </Col>
          <Col xs="12">
            <div className="review-input">
              <Input type="time" placeholder="Select Time" />
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

export default DriverModal;
