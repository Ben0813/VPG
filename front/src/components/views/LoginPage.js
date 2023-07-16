// Importing necessary libraries and hooks
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Component representing the Login Page
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Effect hook to check if user is authenticated
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("token") !== null;
    const hasEmployeeRole = localStorage.getItem("role") === "employee";

    // Logging for debugging purposes
    console.log("Token du localStorage :", localStorage.getItem("token"));
    console.log("Rôle du localStorage :", localStorage.getItem("role"));
    console.log("Utilisateur authentifié :", isAuthenticated);
    console.log("A le rôle 'employee' :", hasEmployeeRole);

    // Redirect to login if not authenticated or doesn't have the role 'employee'
    if (!isAuthenticated || !hasEmployeeRole) {
      navigate("/login");
    }
  }, [navigate]);

  // Function to handle login
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

  // Render login form
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-khaki to-white">
      <div className="bg-rich p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-rajdhani font-bold mb-5 text-khaki">
          Page de connexion
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-khaki mb-2 font-barlow">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-khaki rounded font-barlow text-khaki bg-metal"
            />
          </div>
          <div className="mb-4">
            <label className="block text-khaki mb-2 font-barlow">
              Mot de passe:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-khaki rounded font-barlow text-khaki bg-metal"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-raisin hover:bg-metal text-khaki rounded py-2 px-5 font-rajdhani"
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
