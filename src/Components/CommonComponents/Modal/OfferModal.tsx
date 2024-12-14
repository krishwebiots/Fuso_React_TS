import { Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { MakeOfferPriceTitle, SubmitReview } from "../../../Constants/Constants";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";
import { setOfferModal } from "../../../ReduxToolkit/Reducers/LayoutReducers";
import CloseBtn from "../CloseBtn";
import RenderInput from "../RenderInput";

const OfferModal = () => {
  const { offerModal } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  const toggle = () => dispatch(setOfferModal());
  return (
    <Modal fade centered modalClassName="theme-modal" isOpen={offerModal} toggle={toggle}>
      <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
      <ModalBody>
        <h3 className="car-title">{MakeOfferPriceTitle}</h3>
        <Row className="gy-3">
          <RenderInput placeholder="Enter Your Name" ColClass="col-xs-12" review />
          <RenderInput placeholder="Enter Your E-mail" ColClass="col-xs-12" review />
          <RenderInput placeholder="Your Phone" ColClass="col-xs-12" review />
          <RenderInput placeholder="Trade Price" ColClass="col-xs-12" review />
          <RenderInput button={SubmitReview} ColClass="col-xs-12" review />
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default OfferModal;
