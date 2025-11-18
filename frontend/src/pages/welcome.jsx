import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "../styles/welcome.css";
import petWelcome from "../assets/pet-welcome.png";

export default function Welcome() {
  const navigate = useNavigate();

  // ✅ Verifica se o usuário já está logado
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home"); // já está logado, vai pra home direto
    }
  }, [navigate]);

  return (
    <div className="welcome-container">
      {/* Ilustração */}
      <motion.div
        className="welcome-illustration"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="illustration-bg"></div>
        <img
          src={petWelcome}
          alt="Pets Illustration"
          className="illustration-img"
        />
      </motion.div>

      {/* Texto principal */}
      <motion.div
        className="welcome-text"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="welcome-title">PetFy 🐾</h1>
        <p className="welcome-subtitle">
          Cadastre os seus amigos peludos e cuide deles com amor!
          Cadastre, acompanhe e explore tudo o que o mundo pet pode oferecer.
        </p>
      </motion.div>

      {/* Botão principal */}
      <motion.div
        className="welcome-button-wrapper"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
      >
        <Link to="/login" className="welcome-button">
          Continuar
        </Link>
      </motion.div>

      {/* Rodapé */}
      <p className="welcome-footer">
        © 2025 AppPet — Todos os direitos reservados
      </p>
    </div>
  );
}
