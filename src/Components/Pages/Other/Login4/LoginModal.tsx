import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setLoginModal } from "../../../../ReduxToolkit/Reducers/LayoutReducers";
import CloseBtn from "../../../CommonComponents/CloseBtn";
import LoginForm from "../Common/LoginForm";

const LoginModal = () => {
  const { loginModal } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  const toggle = () => dispatch(setLoginModal());

  return (
    <Modal centered fade modalClassName="theme-modal" isOpen={loginModal} toggle={toggle}>
      <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
      <ModalBody>
        <LoginForm />
      </ModalBody>
    </Modal>
  );
};

export default LoginModal;
