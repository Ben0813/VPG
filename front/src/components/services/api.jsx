import axios from "axios";

// Créez une instance d'axios.
const api = axios.create({
  baseURL: "http://localhost:3000", // Remplacez par l'URL de base de votre API.
});

// Ajoutez un intercepteur de requête.
api.interceptors.request.use(
  (config) => {
    // Récupérez le token du localStorage.
    const token = localStorage.getItem("token");

    // Si le token existe, ajoutez-le au header d'autorisation.
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Si une erreur se produit, rejetez la promesse avec l'erreur.
    return Promise.reject(error);
  }
);

export const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

export default api;
