import React from 'react';
import './BottomForm.css';  

function BottomForm() {
    return (
        <form id='bottomForm'>
            <div className="form-group row"> 
                <div className="col"> 
                    <label htmlFor="input1">Responsable del proyecto</label>
                    <input type="text" className="form-control" id="input1" placeholder="Input 1" />
                </div>
                <div className="col"> 
                    <label htmlFor="input2">Administrador</label>
                    <input type="text" className="form-control" id="input2" placeholder="Input 2" />
                </div>
                <div className="col"> 
                    <label htmlFor="input3">Involucrados (opcional)</label>
                    <input type="text" className="form-control" id="input3" placeholder="Input 3" />
                </div>
            </div>
        </form>
    )
}

export default BottomForm