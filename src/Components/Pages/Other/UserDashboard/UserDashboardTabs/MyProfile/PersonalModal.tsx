import { Button, Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { PersonalInformation, SaveChanges } from "../../../../../../Constants/Constants";
import { PersonalInformationListData } from "../../../../../../Data/Pages/Other";
import { useAppDispatch, useAppSelector } from "../../../../../../ReduxToolkit/Hooks";
import { setPersonalModal } from "../../../../../../ReduxToolkit/Reducers/SidebarReducers";
import CloseBtn from "../../../../../CommonComponents/CloseBtn";
import RenderInput from "../Common/RenderInput";

const PersonalModal = () => {
  const { personalModal } = useAppSelector((state) => state.sidebar);
  const dispatch = useAppDispatch();

  const toggle = () => dispatch(setPersonalModal());
  return (
    <Modal fade centered size="lg" modalClassName="theme-modal" isOpen={personalModal} toggle={toggle}>
      <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
      <ModalBody>
        <h4 className="modal-title">{PersonalInformation}</h4>
        <Row className="gy-sm-4 gy-3">
          {PersonalInformationListData.map((data, index) => (
            <Col lg="6" key={index}>
              <RenderInput label={data.label} placeholder={data.value} review />
            </Col>
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

export default PersonalModal;
