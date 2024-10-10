import React, { useState } from 'react';
import iconAdd from '../../assets/agregar.svg';
import './AddButtom.css';  
import ModalForm from '../ModalForm/ModalForm'; 

function AddButtom({addStage}) {
    const [isModalOpen, setModalOpen] = useState(false); // Estado para controlar el modal

    const handleOpenModal = () => {
        setModalOpen(true); // Abre el modal
    };

    const handleCloseModal = () => {
        setModalOpen(false); // Cierra el modal
    };

    const handleAddStage = (newStage) => {
        addStage(newStage); // Agrega una nueva etapa a la lista
        setModalOpen(false); // Cierra el modal
    }
    return (
        <>
            <img src={iconAdd} id="iconAdd" alt="Agregar etapa" />
            <a href="#" id="addStep" onClick={handleOpenModal}>Agregar etapa</a>
            {isModalOpen && <ModalForm onClose={handleCloseModal} onAdd={handleAddStage} />}        
        </>
    );
}

export default AddButtom;