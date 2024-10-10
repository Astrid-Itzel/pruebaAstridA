import React from 'react';
import './Chart.css';  

function Chart({stages}) {
    return (
    <div id="table-div">
        <p id="stagesTitle">Etapas</p>

<table>
    <thead>
        <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Entregable</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            <th id="edit-cell">Editar</th>
            <th id="delete-cell">Eliminar</th>
        </tr>
    </thead>
    <tbody>
        {stages.map((stage, index) => (
            <tr key={index}>
                <td>{stage.title}</td>
                <td>{stage.description}</td>
                <td>{stage.product}</td>
                <td>{stage.startDate}</td>
                <td>{stage.endDate}</td>
                <td><button onClick={() => handleEditStage(stage)}>Editar</button></td>
                <td><button>Eliminar</button></td>
            </tr>
        ))}
    </tbody>
</table>
    </div>
    );
}

export default Chart;