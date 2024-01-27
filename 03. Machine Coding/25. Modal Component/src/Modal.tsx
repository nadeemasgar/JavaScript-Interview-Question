import React from "react";

const Modal = ({ show, onClose, title, children }) => {
  return (
    show && (
      <>
        <div className="modal-backdrop" onClick={onClose} />
        <div className={`modal-wrapper ${show ? "active" : ""}`}>
          <div className="modal-header">
            <div className="modal-title">{title}</div>
            <span className="modal-close" onClick={onClose}>
              X
            </span>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </>
    )
  );
};

export default Modal;
