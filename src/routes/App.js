import '../css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Navegacion} from "../layouts/Navegacion"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductosCreados } from '../pages/ProductosCreados';
import { ProductosDetalle } from '../pages/ProductosDetalle';

function App() {
  return (
    <BrowserRouter>
       <Navegacion/>
       <Routes>
          <Route path= '/' element={<ProductosCreados/>}/>
          <Route path='/producto/:id' element={<ProductosDetalle/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
