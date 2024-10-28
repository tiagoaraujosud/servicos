import Home from './components/Home';
import Consistidos from './components/Consistidos';
import Register from './components/Register';
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <h1>Serviços - João Pessoa</h1>
      <BrowserRouter>
      <Nav justify variant="tabs">
        <Nav.Link as={Link} to="/">Página Inicial</Nav.Link>
        <Nav.Link as={Link} to="/consistidos">Consistidos</Nav.Link>
        <Nav.Link as={Link} to="/register_serv">Cadastro Serviço</Nav.Link>
      </Nav>

      <Routes>
        <Route path="/" index element={<Home/>}></Route>
        <Route path="/consistidos" element={<Consistidos/>}></Route>
        <Route path="/register_serv" element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
