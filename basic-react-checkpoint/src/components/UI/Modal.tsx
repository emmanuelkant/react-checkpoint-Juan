import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

const Backdrop: React.FC<any> = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};

const ModalOverlay: React.FC<any> = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays") as HTMLDivElement;

const Modal: React.FC<any> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
