import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, Modal, ModalBody, ModalHeader } from "reactstrap";
import { ModalShareListData } from "../../../../Data/Property";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setShareModal } from "../../../../ReduxToolkit/Reducers/LayoutReducers";
import CloseBtn from "../../../CommonComponents/CloseBtn";
import { ShareIt } from "../../../../Constants/Constants";

const ShareModal = () => {
  const { shareModal } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");

  const toggle = () => dispatch(setShareModal());

    const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inputValue);
      setInputValue(inputValue);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Modal fade centered modalClassName="theme-modal" isOpen={shareModal} toggle={toggle}>
      <ModalHeader toggle={toggle} close={<CloseBtn toggle={toggle} />} />
      <ModalBody>
        <h4 className="modal-title">{ShareIt}</h4>
        <ul className="modal-share-list">
          {ModalShareListData.map((item, index) => (
            <li key={index}>
              <Link to={item.url} target="_blank">
                <i className={`ri-${item.icon}-line`} />
              </Link>
            </li>
          ))}
        </ul>
        <div className="d-flex align-items-center position-relative copy-input">
          <Input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
            <Button className="btn-solid position-absolute top-0 end-0" onClick={handleCopy}>Copy Link</Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ShareModal;