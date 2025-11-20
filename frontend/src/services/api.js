import { BASE_URL } from "./config";
import { getToken } from "./auth";

export const api = {
  // Login
  login: async (email, senha) => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });
    return response.json();
  },

  // Cadastro
  cadastrar: async (dados) => {
    const response = await fetch(`${BASE_URL}/cadastro`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });
    return response.json();
  },

  // Pega usuário autenticado
  getUsuario: async () => {
    const token = getToken();
    const response = await fetch(`${BASE_URL}/usuario`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  },
};
