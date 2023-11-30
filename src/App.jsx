
import './App.css'
import { List } from './components/List.jsx'
function App() {
  return (
    <>
      <div className="p-5 h-100 row align-items-center justify-content-center">
        <div className="col-4">
          <h1 className='mb-5'>Gestión de Clientes</h1>
          <h3>
            <span className="badge bg-secondary">Juan Ayala</span> 
          </h3>
          <h3>
            <span className="badge bg-secondary">Brayan Rivera</span>
          </h3>
        </div>
        <div className="col-8">
          <List/>
        </div>
      </div> 
    </>
  )
}

export default App
