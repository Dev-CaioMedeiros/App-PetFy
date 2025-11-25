import { ArrowLeft, Search, Clock, MapPin, Dog, User } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../styles/pets/passeios.css";

export default function Passeios() {
  const navigate = useNavigate();

  const walkers = [
    {
      nome: "Caio Roberto",
      horario: "Hoje • 08:30",
      foto: "src/assets/passeadores/Caio.jpg",
    },
    {
      nome: "Icaro Hennã",
      horario: "25 Nov • 10:40",
      foto: "src/assets/passeadores/Icaro.jpeg",
    },
    {
      nome: "Maria Witoria",
      horario: "30 Nov • 20:00",
      foto: "src/assets/passeadores/Witoria.jpeg",
    },
  ];

  return (
    <div className="passeios-page">
      {/* voltar */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <ArrowLeft size={22} /> Voltar
      </button>

      {/* título */}
      <h1 className="passeios-title">Passeios</h1>

      {/* banner */}
      <div className="passeios-banner">
        <div className="banner-text">
          <h2>Veja seus últimos passeios</h2>
          <p>Dê felicidade e uma vida saudável ao seu pet</p>

          <button className="banner-btn">Encontrar</button>
        </div>
        <img src="src/assets/pet_passeio.png" className="banner-img" />
      </div>

      {/* busca */}
      <div className="passeios-search">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Buscar passeador..." />
      </div>

      <h3 className="section-title">Passeadores disponíveis</h3>

      {/* lista de passeadores */}
      <div className="walkers-list">
        {walkers.map((w, index) => (
          <motion.div
            className="walker-card"
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <img src={w.foto} className="walker-photo" />

            <div className="walker-info">
              <h4>{w.nome}</h4>
              <p>{w.horario}</p>
            </div>

            <button className="walker-btn">Agendar</button>
          </motion.div>
        ))}
      </div>

      <h3 className="section-title">Seu último passeio</h3>

      {/* Último passeio */}
      <motion.div
        className="last-walk-card"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="last-walk-header">
          <User size={18} />
          <span>Caio Roberto e Raulf</span>
        </div>

        <div className="walk-stats">
          <div>
            <Clock size={18} />
            <p>1h 20min</p>
          </div>

          <div>
            <MapPin size={18} />
            <p>3.4 km</p>
          </div>

          <div>
            <Dog size={18} />
            <p>260 kcal</p>
          </div>
        </div>

        <button className="details-btn">Ver detalhes</button>
      </motion.div>
    </div>
  );
}
