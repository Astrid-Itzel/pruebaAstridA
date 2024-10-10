import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import LeftForm from './components/LeftForm/LeftForm'
import RightForm from './components/RightForm/RightForm.jsx'
import BottomForm from './components/BottomForm/BottomForm' 
import AddButtom from './components/AddButtom/AddButtom.jsx'
import Chart from './components/Chart/Chart.jsx'
import { useState } from 'react'; 

function App() {

  const [stages, setStages] = useState([]); // Estado para almacenar las etapas
  const [editingStage, setEditingStage] = useState(false); 
  const [modalOpen, setModalOpen] = useState(false); 
  const addStage = (newStage) => {
      setStages([...stages, newStage]); // Agrega una nueva etapa
  };

  const editStage = (updatedStage) => {
    setStages(stages.map(stage => stage.title === updatedStage.title ? updatedStage : stage));
    setEditingStage(null); // Resetea el estado de edición
    setModalOpen(false); // Cierra el modal
};


  const handleEditStage = (stage) => {
    setEditingStage(stage); // Establece el stage que se va a editar
    setModalOpen(true); // Abre el modal
};

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <LeftForm />
          </div>
          <div className="col-md-6">
            <RightForm />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <BottomForm /> 
          </div>
        </div>
      </div>
      <AddButtom 
          addStage={addStage} 
          editStage={editStage} 
          editingStage={editingStage} 
          setModalOpen={setModalOpen}
          /> {/* Pasa la función para agregar etapas */}
      <Chart stages={stages} /> {/* Pasa las etapas al Chart */}
    </>
  )
}

export default App
