import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Home from "./pages/home";
import Loja from "./pages/loja";
import EditarPerfil from "./pages/editar_p_dono";
import MeusPets from "./pages/meus_pets";
import PrivateRoute from "./components/PrivateRoute";
import PetDetalhes from "./pages/pet_detalhes";
import CadastrarPet from "./pages/cadastrar_pet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/editar_p_dono" element={<EditarPerfil />} />
        <Route path="/meus_pets" element={<MeusPets />} />
        <Route path="/meus-pets" element={<MeusPets />} />
        <Route path="/pets/:id" element={<PetDetalhes />} />
        <Route path="/cadastrar-pet" element={<CadastrarPet />} />


        {/* ROTA PROTEGIDA */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
