import React from 'react'
import './RightForm.css';

function RightForm() {
  return (
  <form id='rightForm'>
  <div className="div-input">
    <label htmlFor="IdProjectInput">ID Proyecto</label>
    <div className="d-flex">
      <input
        type="text"
        className="form-control me-2"
        id="IdProjectInput"
        placeholder="Escribe el número ID proyecto Sipres"
      />
      <button className="btn btn-primary" id="searchProjectButton" >Buscar Proyecto</button>
    </div>
  </div>
  <div className="div-input">
    <label htmlFor="projectNameInput">Nombre del proyecto</label>
    <input type="text" className="form-control" id="projectNameInput"/>
  </div>
  <div className="div-input">
    <label htmlFor="projectDescriptionInput">Descripción del proyecto</label>
    <input type="text" className="form-control" id="projectDescriptionInput" />
  </div>
  <div className="div-input">
    <div className="row">
      <div className="col-6">
        <label htmlFor="fechaInput">Fecha de creación</label>
        <input type="date" className="form-control" id="fechaInput" placeholder="dd/mm/aaaa" />
      </div>
      <div className="col-3">
        <label htmlFor="capexInput">Capex</label>
        <input type="text" className="form-control" id="capexInput" />
      </div>
      <div className="col-3">
        <label htmlFor="opexInput">Opex</label>
        <input type="text" className="form-control" id="opexInput"  />
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-6">
        <label htmlFor="projectPillarInput">Pilar del proyecto</label>
        <input type="text" className="form-control-plaintext border-bottom" id="lprojectPillarInput" />
      </div>
      <div className="col-6">
        <label htmlFor="clasificationInput">Clasificación Comité de Inversión</label>
        <input type="text" className="form-control-plaintext border-bottom" id="clasificationInput"  />
      </div>
    </div>
  </div>
  </form>
  )
}

export default RightForm