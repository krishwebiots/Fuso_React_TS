import { Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { ScheduleTestDriverTitle, SubmitReview } from "../../../Constants/Constants";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";
import { setDriverModal } from "../../../ReduxToolkit/Reducers/LayoutReducers";
import CloseBtn from "../CloseBtn";
import RenderInput from "../RenderInput";

const DriverModal = () => {
  const { driverModal } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  const toggle = () => dispatch(setDriverModal());
  return (
    <Modal fade centered modalClassName="theme-modal" isOpen={driverModal} toggle={toggle}>
      <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
      <ModalBody>
        <h3 className="car-title">{ScheduleTestDriverTitle}</h3>
        <Row className="gy-3">
          <RenderInput placeholder="Enter Your Name" ColClass="col-xs-12" review />
          <RenderInput placeholder="Enter Your E-mail" ColClass="col-xs-12" review />
          <RenderInput placeholder="Select Date" ColClass="col-xs-12" inputType="date" review />
          <RenderInput placeholder="Select Time" ColClass="col-xs-12" review />
          <RenderInput button={SubmitReview} ColClass="col-xs-12" review />
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default DriverModal;
