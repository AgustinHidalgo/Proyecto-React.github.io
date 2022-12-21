import './App.css';
import Productos from './conteiners/prod-conteiner';
import NavBar from './componentes/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductoDetalle from './componentes/producto-detalle';


function App() {
  return (
    <BrowserRouter>
    <NavBar /> 
    <Routes>
      <Route  path ="/" element={<Productos />}/> 
      <Route  path ="/categoria/:categoriaId" element={<Productos />}/> 
      <Route  path ="/producto/:productoId" element={<ProductoDetalle />}/>
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
