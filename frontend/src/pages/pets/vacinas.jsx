import { ArrowLeft, Search, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../../styles/pets/vacinas.css";

export default function Vacinas() {
  const navigate = useNavigate();

  const vacinas = [
    { nome: "V8 / V10", icon: "💉" },
    { nome: "Raiva", icon: "🐺" },
    { nome: "Gripe Canina", icon: "🤧" },
    { nome: "Antipulgas", icon: "🦟" },
    { nome: "Vermifugação", icon: "🪱" },
    { nome: "Reforço anual", icon: "📅" },
  ];

  return (
    <div className="vacinas-page">

      <button className="v-back-btn" onClick={() => navigate(-1)}>
        <ArrowLeft size={22} />
        Voltar
      </button>

      <h1 className="v-title">Vacinas</h1>

      {/* Promo */}
      <div className="v-promo">
        <div>
          <h2>Pacote anual</h2>
          <p>Proteção completa para seu pet 🐾</p>
          <button className="v-btn">Ver detalhes</button>
        </div>

        <img src="src/assets/pet_vacina.png" className="v-img" />
      </div>

      {/* Busca */}
      <div className="v-search">
        <Search size={18} className="v-icon" />
        <input type="text" placeholder="Buscar vacina..." />
      </div>

      <h2 className="v-subtitle">Vacinas disponíveis</h2>

      <div className="v-grid">
        {vacinas.map((v, i) => (
          <div className="v-card" key={i}>
            <span className="v-emoji">{v.icon}</span>
            <p className="v-card-title">{v.nome}</p>
            <ChevronRight size={18} className="v-arrow" />
          </div>
        ))}
      </div>
    </div>
  );
}
