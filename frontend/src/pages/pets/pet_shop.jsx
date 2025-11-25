import { ArrowLeft, Search, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../../styles/pets/pet_shop.css";

export default function PetShop() {
  const navigate = useNavigate();

  const servicos = [
    { nome: "Banho simples", icon: "🛁" },
    { nome: "Tosa completa", icon: "✂️" },
    { nome: "Desembaraço", icon: "🐕" },
    { nome: "Hidratação", icon: "💧" },
    { nome: "Corte de unha", icon: "🐾" },
    { nome: "Limpeza de ouvido", icon: "🧼" },
  ];

  return (
    <div className="petshop-page">

      {/* VOLTAR */}
      <button className="ps-back-btn" onClick={() => navigate(-1)}>
        <ArrowLeft size={22} />
        Voltar
      </button>

      {/* TÍTULO */}
      <h1 className="ps-title">Banho & Tosa</h1>

      {/* PROMO */}
      <div className="ps-promo-box">
        <div className="promo-text">
          <h2>30% OFF</h2>
          <p>Banho + hidratação no seu pet ✨</p>
          <button className="promo-btn">Ver promoção</button>
        </div>

        <img
          src="src/assets/pet_pet_shop.png"
          alt="promo"
          className="promo-img"
        />
      </div>

      {/* BUSCA */}
      <div className="ps-search-box">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Buscar serviço..." />
      </div>

      {/* LISTA DE SERVIÇOS */}
      <h2 className="ps-subtitle">Nossos serviços</h2>

      <div className="ps-grid">
        {servicos.map((s, i) => (
          <div className="ps-card" key={i}>
            <span className="ps-icon">{s.icon}</span>
            <p className="ps-card-title">{s.nome}</p>
            <ChevronRight size={18} className="ps-arrow" />
          </div>
        ))}
      </div>
    </div>
  );
}
