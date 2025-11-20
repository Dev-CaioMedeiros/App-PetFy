import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/home/welcome";
import Login from "./pages/user/login";
import Cadastro from "./pages/user/cadastro";
import Home from "./pages/home/home";
import Loja from "./pages/pets/loja";
import EditarPerfil from "./pages/user/editar_p_dono";
import MeusPets from "./pages/pets/meus_pets";
import PrivateRoute from "./components/PrivateRoute";
import PetDetalhes from "./pages/pets/pet_detalhes";
import CadastrarPet from "./pages/pets/cadastrar_pet";

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
        <Route path="/pets/:id" element={<PetDetalhes />} />
        <Route path="/cadastrar-pet" element={<CadastrarPet />} />


        {/* ROTA PROTEGIDA */}
        <Route
          path="/home/home"
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
