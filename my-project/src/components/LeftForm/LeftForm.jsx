import React from 'react';
import './LeftForm.css';  

function LeftForm() {
  return (
    <form id='leftForm'>
      <div className="div-input">
        <label htmlFor="IdSistemOrcInput">ID Sistema ORC's</label>
        <input type="text" className="form-control" id="IdSistemOrcInput" />
      </div>
      <div className="div-input">
        <label htmlFor="projectNameInput">Nombre del proyecto</label>
        <input type="text" className="form-control" id="projectNameInput" />
      </div>
      <div className="div-input">
        <label htmlFor="projectDescriptionInput">Descripción del proyecto</label>
        <input type="text" className="form-control" id="projectDescriptionInput" />
      </div>
      <div className="div-input">
        <label htmlFor="objectivesSelect">Objetivos a los que contribuye el proyecto</label>
        <select className="form-control objectives-select" id="objectivesSelect">
          <option value="">Seleccione un objetivo</option>
          <option value="objetivo1">Objetivo 1</option>
          <option value="objetivo2">Objetivo 2</option>
          <option value="objetivo3">Objetivo 3</option>
          <option value="objetivo4">Objetivo 4</option>
        </select>
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-6">
            <label htmlFor="startDate" style={{fontSize: 'x-small'}}>Fecha de inicio</label>
            <input 
              type="date" 
              className="form-control" 
              id="startDate" 
              style={{fontSize: 'x-small'}}
            />
          </div>
          <div className="col-6">
            <label htmlFor="endDate" style={{fontSize: 'x-small'}}>Fecha de fin</label>
            <input 
              type="date" 
              className="form-control" 
              id="endDate" 
              style={{fontSize: 'x-small'}}
            />
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary" id="priorityProjectButton" >Prioridad de Proyecto</button>
    </form>
  )
}

export default LeftForm