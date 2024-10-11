import React, {useState} from 'react';
import './ModalForm.css';  

function ModalForm({ onClose, onAdd }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [product, setProduct] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = () => {
        const newStage = {
            title,
            description,
            product,
            startDate,
            endDate,
        };
        onAdd(newStage); // Envía la nueva etapa al padre
        onClose(); // Cierra el modal después de agregar
    };

    return (
    <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <p class="modal-title" id="modalTitle">Agregar etapa</p>
                    <button type="button" className="close" onClick={onClose} aria-label="Close">                    
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id='modalForm'>
                    <div className="modalForm-input">
                        <label htmlFor="titleInput">Título de la iniciativa</label>
                        <input type="text" className="form-control" id="titleInput" value={title} 
                        onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="modalForm-input">
                        <label htmlFor="descriptionInput">Descripción de la etapa</label>
                        <input type="text" className="form-control" id="descriptionInput" value={description} 
                        onChange={(e) => setDescription(e.target.value)} /> {/* Guarda el valor en el estado */}
                    </div>
                    <div className="modalForm-input">
                        <label htmlFor="productInput">Entregable de la etapa</label>
                        <input type="text" className="form-control" id="productInput"  value={product} 
                        onChange={(e) => setProduct(e.target.value)} />
                    </div>
                        <label htmlFor="startDate">Fecha inicio:</label>
                        <input type="date" className="form-control" id="startDate" style={{fontSize: 'x-small'}} value={startDate} 
                        onChange={(e) => setStartDate(e.target.value)} />
                        <label htmlFor="endDate">Fecha fin:</label>
                        <input type="date" className="form-control" id="endDate" style={{fontSize: 'x-small'}} value={endDate} 
                        onChange={(e) => setEndDate(e.target.value)} />
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Cancelar</button>
                    <button type="button" className="btn btn-secondary" onClick={handleSubmit}>Agregar</button>
                    </div>
            </div>
        </div>
    </div>
)}

export default ModalForm