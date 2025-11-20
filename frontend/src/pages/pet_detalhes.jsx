import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, HeartPulse, Bone, Info } from "lucide-react";
import { getToken } from "../services/auth";
import { BASE_URL } from "../services/config";
import "../styles/pet_detalhes.css";

export default function PetDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);

  // ---------------------- FORMATAR IDADE ----------------------
  const formatarIdade = (idade) => {
    if (!idade) return "Sem idade";

    const num = parseInt(idade);

    if (isNaN(num)) return "Sem idade";

    return num === 1 ? "1 ano" : `${num} anos`;
  };

  useEffect(() => {
    const token = getToken();

  fetch(`${BASE_URL}/pets/${id}`, {
    headers: { 
      Authorization: `Bearer ${token}` 
    },
  })

      .then(async (res) => {
        const data = await res.json();

        if (!res.ok) {
          setPet(null);
          return;
        }

        setPet(data);
      })
      .catch(() => {
        setPet(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="loading-text">Carregando...</p>;
  if (!pet) return <p className="error-text">Pet não encontrado</p>;

  return (
    <div className="pet-detalhes-container">
      <div className="voltar-detail" onClick={() => navigate(-1)}>
        <ArrowLeft size={22} />
        <span>Voltar</span>
      </div>

      <motion.img
        src={
          pet.foto
            ? `http://localhost:5000/uploads/${pet.foto}`
            : "/pet.png"
        }
        alt={pet.nome}
        className="pet-detail-img"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <motion.h1
        className="pet-detail-name"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {pet.nome}
      </motion.h1>

      {/* ✔ Agora com idade formatada corretamente */}
      <p className="pet-detail-info">
        {pet.especie} • {formatarIdade(pet.idade)} • {pet.sexo}
      </p>

      <div className="pet-detail-sections">
        <div className="detail-card">
          <Bone size={24} className="detail-icon" />
          <h3>Porte</h3>
          <p>{pet.porte || "Não informado"}</p>
        </div>

        <div className="detail-card">
          <HeartPulse size={24} className="detail-icon" />
          <h3>Saúde</h3>
          <p>{pet.saude || "Sem informações"}</p>
        </div>

        <div className="detail-card full">
          <Info size={24} className="detail-icon" />
          <h3>Descrição</h3>
          <p>{pet.descricao || "Sem descrição"}</p>
        </div>
      </div>
    </div>
  );
}
