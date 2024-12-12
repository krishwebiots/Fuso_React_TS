import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import { useAppDispatch, useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { setLogoutModal } from "../../../../../ReduxToolkit/Reducers/SidebarReducers";
import CloseBtn from "../../../../CommonComponents/CloseBtn";
import { dynamicSvg, Image } from "../../../../../Utils";
import { Cancel, LogOut } from "../../../../../Constants/Constants";
import { Link } from "react-router-dom";
import { RouteList } from "../../../../../Routers/RouteList";

const LogoutModal = () => {
  const { logoutModal } = useAppSelector((state) => state.sidebar);
  const dispatch = useAppDispatch();

  const toggle = () => dispatch(setLogoutModal());
  return (
    <Modal fade centered modalClassName="theme-modal" isOpen={logoutModal} toggle={toggle}>
      <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
      <ModalBody>
        <div className="logout-img">
          <Image src={dynamicSvg("other/logout.svg")} alt="logout" className="img-fluid d-block mx-auto" />
        </div>
        <div className="logout-content">
          <h4 className="text-center">Are You Logging Out?</h4>
          <p className="text-center">you are about to logout. are you sure this is what you want?</p>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <Button className="btn-border" onClick={toggle}>
              {Cancel}
            </Button>
            <Link to={RouteList.Pages.Other.Login1} className="btn-solid">
              {LogOut}
            </Link>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default LogoutModal;
