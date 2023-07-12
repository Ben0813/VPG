import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("token") !== null;
    const hasEmployeeRole = localStorage.getItem("role") === "employee";

    console.log("Token du localStorage :", localStorage.getItem("token"));
    console.log("Rôle du localStorage :", localStorage.getItem("role"));
    console.log("Utilisateur authentifié :", isAuthenticated);
    console.log("A le rôle 'employee' :", hasEmployeeRole);

    if (!isAuthenticated || !hasEmployeeRole) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        const role = response.data.role;
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        if (role === "admin") {
          window.location.href = "http://localhost:3000/admin/login";
        } else {
          navigate("/employee");
        }

        console.log("Token enregistré :", localStorage.getItem("token"));
        console.log("Rôle enregistré :", localStorage.getItem("role"));
      } else {
        alert("Identifiants invalides");
      }
    } catch (error) {
      console.error(error);
      alert("Une erreur s'est produite lors de la connexion");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-5 text-blue-800">
          Page de connexion
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-blue-800 mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded text-blue-800"
            />
          </div>
          <div className="mb-4">
            <label className="block text-blue-800 mb-2">Mot de passe:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded text-blue-800"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-800 text-white rounded px-5 py-2"
            >
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
