import Home from './components/Home';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Aplicação</h1>
      <BrowserRouter>
      <ul>
        <li><Link to="/">Página Inicial</Link></li>
        <li><Link to="/servicos">Cadastro Serviço</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
      </ul>

      <Routes>
        <Route path="/" index element={<Home/>}></Route>
        <Route path="/servicos" element={<Servicos/>}></Route>
        <Route path="/sobre" element={<Sobre/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
