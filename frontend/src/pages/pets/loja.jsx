import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowLeft, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../../styles/pets/loja.css";

export default function Loja() {
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();

  const produtos = [
    { id: 1, nome: "Coleira Personalizada", preco: "R$ 49,90", img: "src/assets/loja/coleira.png", destaque: true },
    { id: 2, nome: "Caminha Premium", preco: "R$ 199,00", img: "src/assets/loja/caminha.png" },
    { id: 3, nome: "Ração Gold 10kg", preco: "R$ 89,90", img: "src/assets/loja/ração.png" },
  ];

  const filtrados = produtos.filter(p =>
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="loja-container">
      <div className="loja-header">
  <button onClick={() => navigate("/home/home")} className="back-btn">
    <ArrowLeft size={20} /> Voltar
  </button>

  <div className="loja-titulo">
    <ShoppingBag size={26} />
    <h1>Loja Pet</h1>
  </div>
</div>

      <div className="loja-search">
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      <motion.div
        className="loja-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {filtrados.map((produto) => (
          <motion.div
            key={produto.id}
            className={`produto-card ${produto.destaque ? "highlight" : ""}`}
            whileHover={{ scale: 1.05 }}
          >
            <div className="produto-img">
              <img src={produto.img} alt={produto.nome} />
            </div>
            <h3>{produto.nome}</h3>
            <span className="preco">{produto.preco}</span>
            {produto.destaque && <span className="star"><Star size={16} /></span>}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
