import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setSignUpModal } from "../../../../ReduxToolkit/Reducers/LayoutReducers";
import CloseBtn from "../../../CommonComponents/CloseBtn";
import SignUpForm from "../Common/SignUpForm";

const SignUpModal = () => {
  const { signUpModal } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  const toggle = () => dispatch(setSignUpModal());

  return (
    <Modal centered fade modalClassName="theme-modal" isOpen={signUpModal} toggle={toggle}>
      <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
      <ModalBody>
        <SignUpForm />
      </ModalBody>
    </Modal>
  );
};

export default SignUpModal;
