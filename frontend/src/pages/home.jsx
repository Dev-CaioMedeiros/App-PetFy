import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  PawPrint,
  Scissors,
  HeartPulse,
  ChevronRight,
  Search,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

import dogHero from "../assets/pet.png";
import dogShop from "../assets/pet-care.png";
import dogLove from "../assets/pet-friends-love.png";
import dogMyPets from "../assets/pet-mine.png";

export default function Home() {
  const [nomeUsuario, setNomeUsuario] = useState("Carregando...");
  const [fotoPerfil, setFotoPerfil] = useState(null);
  const [busca, setBusca] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:5000/api/usuario", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar usuário");
        return res.json();
      })
      .then((data) => {
        setNomeUsuario(data.nome || "Usuário");

        if (data.foto) {
          setFotoPerfil(`http://localhost:5000/uploads/${data.foto}`);
        }
      })
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  return (
    <div className="home-container">
      {/* Menu usuário */}
      <div className="user-menu">
        <div
          className="user-icon"
          onClick={() => setShowMenu(!showMenu)}
          title="Perfil"
        >
          {fotoPerfil ? (
            <img src={fotoPerfil} alt="Foto usuário" className="user-avatar" />
          ) : (
            <User size={24} />
          )}
        </div>

        {showMenu && (
  <motion.div
    className="dropdown-menu"
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2 }}
  >
    <button
      type="button"
      onClick={() => navigate("/editar_p_dono")}
      className="dropdown-item"
    >
      Editar perfil
    </button>

    <button
      type="button"
      onClick={() => {
        localStorage.removeItem("token");
        navigate("/login");
      }}
      className="dropdown-item"
    >
      Sair
    </button>
  </motion.div>
)}

      </div>

      {/* Saudação */}
      <motion.h1
        className="home-title"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Olá, {nomeUsuario} <span className="paw-icon">🐾</span>
      </motion.h1>

      {/* Busca */}
      <motion.div
        className="search-bar"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Search size={18} className="search-icon" />
        <input
          type="text"
          placeholder="Buscar produtos, serviços ou pets..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </motion.div>

      {/* Card principal */}
      <motion.div
        className="hero-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="hero-text">
          <h2>Amor pelos pets?</h2>
          <p>Encontre tudo o que precisa para o seu amigo 💛</p>
          <button className="hero-btn" onClick={() => navigate("/loja")}>
            Saiba mais
          </button>
        </div>
        <img src={dogHero} alt="Pet amor" className="hero-img" />
      </motion.div>

      {/* Menu de ícones */}
      <motion.div
        className="menu-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div
          className="menu-item"
          onClick={() => navigate("/loja")}
          style={{ cursor: "pointer" }}
        >
          <ShoppingBag className="menu-icon" size={24} />
          <span>Pet Store</span>
        </div>

        <div className="menu-item">
          <PawPrint className="menu-icon" size={24} />
          <span>Serviços</span>
        </div>

        <div className="menu-item">
          <Scissors className="menu-icon" size={24} />
          <span>Vacinas</span>
        </div>

        <div className="menu-item">
          <HeartPulse className="menu-icon" size={24} />
          <span>Consultas</span>
        </div>
      </motion.div>

      {/* Meus pets */}
      <motion.div
        className="pet-section mypets"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="section-text">
          <h3>Meus Pets</h3>
          <h2>Veja seus companheiros</h2>
          <p>Acompanhe, edite e cuide deles 🐶🐱</p>
          <button
            className="section-btn"
            onClick={() => navigate("/meus_pets")}
          >
            Ver meus pets
          </button>
        </div>
        <div className="section-img">
          <img src={dogMyPets} alt="Meus pets" />
          <ChevronRight className="arrow-icon" size={20} />
        </div>
      </motion.div>

      {/* Loja */}
      <motion.div
        className="pet-section marketplace"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="section-text">
          <h3>Loja Pet</h3>
          <h2>Acessórios e mais</h2>
          <p>Compre a felicidade do seu pet 💛</p>
          <button className="section-btn" onClick={() => navigate("/loja")}>
            Ver agora
          </button>
        </div>
        <div className="section-img">
          <img src={dogShop} alt="Marketplace pet" />
          <ChevronRight className="arrow-icon" size={20} />
        </div>
      </motion.div>

      {/* Passeios */}
      <motion.div
        className="pet-section tinder"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="section-text">
          <h3>Passeios</h3>
          <h2>Veja seus últimos passeios</h2>
          <p>Dê felicidade e uma vida saudável ao seu pet</p>
          <button className="section-btn">Encontrar</button>
        </div>
        <div className="section-img">
          <img src={dogLove} alt="Pet Tinder" />
          <ChevronRight className="arrow-icon" size={20} />
        </div>
      </motion.div>

      <footer className="home-footer-text">
        © 2025 AppPet — Todos os direitos reservados
      </footer>
    </div>
  );
}
