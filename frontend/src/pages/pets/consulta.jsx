import { ArrowLeft, Search, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../../styles/pets/consultas.css";

export default function Consultas() {
  const navigate = useNavigate();

  const servicos = [
    { nome: "Consulta geral", icon: "🐾" },
    { nome: "Exame físico", icon: "🩺" },
    { nome: "Retorno veterinário", icon: "📄" },
    { nome: "Consulta emergencial", icon: "🚑" },
    { nome: "Avaliação de pele", icon: "🔬" },
    { nome: "Consulta cardiológica", icon: "❤️" },
  ];

  return (
    <div className="consultas-page">

      <button className="c-back-btn" onClick={() => navigate(-1)}>
        <ArrowLeft size={22} />
        Voltar
      </button>

      <h1 className="c-title">Consultas</h1>

      {/* Promo */}
      <div className="c-promo">
        <div>
          <h2>10% OFF</h2>
          <p>Na primeira consulta do seu pet 🐶</p>
          <button className="c-promo-btn">Ver oferta</button>
        </div>

        <img src="src/assets/pet_consulta.png" className="c-promo-img" />
      </div>

      {/* Busca */}
      <div className="c-search">
        <Search size={18} className="c-search-icon" />
        <input type="text" placeholder="Buscar serviço..." />
      </div>

      <h2 className="c-subtitle">Serviços disponíveis</h2>

      <div className="c-grid">
        {servicos.map((s, i) => (
          <div className="c-card" key={i}>
            <span className="c-icon">{s.icon}</span>
            <p className="c-card-title">{s.nome}</p>
            <ChevronRight className="c-arrow" size={18} />
          </div>
        ))}
      </div>
    </div>
  );
}
