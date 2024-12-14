import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { Address, SaveChanges } from "../../../../../../Constants/Constants";
import { AddressListData } from "../../../../../../Data/Pages/Other";
import { useAppDispatch, useAppSelector } from "../../../../../../ReduxToolkit/Hooks";
import { setAddressModal } from "../../../../../../ReduxToolkit/Reducers/LayoutReducers";
import CloseBtn from "../../../../../CommonComponents/CloseBtn";
import RenderInput from "../../../../../CommonComponents/RenderInput";

const AddressModal = () => {
  const { addressModal } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  const toggle = () => dispatch(setAddressModal());
  return (
    <Modal fade centered size="lg" modalClassName="theme-modal" isOpen={addressModal} toggle={toggle}>
      <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
      <ModalBody>
        <h4 className="modal-title">{Address}</h4>
        <Row className="gy-sm-4 gy-3">
          {AddressListData.map((data, index) => (
            <RenderInput label={data.label} placeholder={data.value} ColClass="col-lg-6" key={index} review />
          ))}
          <Col xs="12">
            <div className="review-input text-end">
              <Button className="btn-solid" onClick={toggle}>
                {SaveChanges}
              </Button>
            </div>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default AddressModal;
