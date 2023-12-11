import React, { useState } from "react";
import { useModal } from "../hooks/useModal";
import services from "../../public/services.js";
import Modal from "./Modal";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isOpenModal, openModal, closeModal] = useModal(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    openModal();
  };

  return (
    <div>
      <div className="grid md:grid-cols-3 my-8 gap-5">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card flex flex-col justify-center items-center p-6 text-center text-white"
            onClick={() => handleServiceClick(service)}
          >
            <img src={service.image} alt="" className="mb-3" />
            <h6 className="text-2xl mb-4">{service.name}</h6>
            <p className="text-base">{service.description}</p>
          </div>
        ))}
      </div>

      {selectedService && (
        <Modal
          isOpen={isOpenModal}
          closeModal={closeModal}
          title={selectedService.name}
          image={selectedService.image}
        >
          <p>{selectedService.carta}</p>
        </Modal>
      )}
    </div>
  );
};

export default Services;
