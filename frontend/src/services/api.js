const API_URL = "http://localhost:5000/api";

export const api = {
  // Login
  login: async (email, senha) => {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });
    return response.json();
  },

  // Cadastro
  cadastrar: async (dados) => {
    const response = await fetch(`${API_URL}/cadastro`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });
    return response.json();
  },

  // Pega usuário autenticado
  getUsuario: async (token) => {
    const response = await fetch(`${API_URL}/usuario`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  },
};
