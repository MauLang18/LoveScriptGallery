// Modal.js
import React from "react";

const Modal = ({ isOpen, closeModal, children, title }) => {
  const modalStyle = {
    display: isOpen ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  };

  const contentStyle = {
    background: "#fff",
    borderRadius: "8px",
    padding: "20px",
    width: "80%",
    maxWidth: "500px",
    textAlign: "center",
  };

  const handleCloseModal = () => {
    closeModal();
  };

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div style={modalStyle} onClick={handleCloseModal}>
      <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="text-left">{children}</div>
        <button
          onClick={handleCloseModal}
          className="block mx-auto mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
