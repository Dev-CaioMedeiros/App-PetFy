import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PawPrint, Plus, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/meus_pets.css";

export default function MeusPets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/api/pets", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.mensagem);

        // 🔥 Garantir array
        setPets(Array.isArray(data) ? data : []);
      })
      .catch(() => navigate("/login"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="meus-pets-container">

      {/* Voltar */}
      <div className="voltar-pets" onClick={() => navigate(-1)}>
        <ArrowLeft size={22} />
        <span>Voltar</span>
      </div>

      <motion.h1
        className="pets-title"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Meus Pets <PawPrint size={28} className="pets-icon" />
      </motion.h1>

      {loading && <p className="loading-text">Carregando pets...</p>}

      <div className="pets-grid">
        {pets.map((pet) => (
          <motion.div
            key={pet.id}
            className="pet-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => navigate(`/pet/${pet.id}`)}
          >
            <img
              src={
                pet.foto
                  ? `http://localhost:5000/uploads/${pet.foto}`
                  : "/pet.png"
              }
              className="pet-img"
            />

            <div className="pet-info">
              <h2>{pet.nome}</h2>
              <p>{pet.especie}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="add-pet-btn"
        onClick={() => navigate("/cadastrar-pet")}
        whileTap={{ scale: 0.9 }}
      >
        <Plus size={32} />
      </motion.button>
    </div>
  );
}
