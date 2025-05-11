import logo from './logo.svg';
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className="app-Tareas">
      <div className='freecodecamp-logo-contenedor'>
        <h1> Gestor de Tareas </h1>
      </div>
      <div className='tareas-lista-principal'>
        <h1> Mis Tareas</h1>
        <ListaDeTareas />

      </div>

    </div>

  );
}

export default App;
