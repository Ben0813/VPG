import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TestimonialsList from "../TestimonialButton";
import CarsPanel from "../CarsPanel";

const EmployeePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté et a le rôle "employee"
    const isAuthenticated = localStorage.getItem("token") !== null;
    const hasEmployeeRole = localStorage.getItem("role") === "employee";

    // Rediriger si l'utilisateur n'est pas authentifié ou n'a pas le rôle "employee"
    if (!isAuthenticated || !hasEmployeeRole) {
      navigate("/login"); // Rediriger vers la page de connexion
    }
  }, [navigate]);

  const handleLogout = () => {
    // Supprimer les informations d'authentification du localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    // Rediriger vers la page de déconnexion
    window.location.href = "http://localhost:3002";
  };

  return (
    <div className="bg-white p-4 sm:p-8 h-screen">
      <div className="mb-8 flex justify-end">
        <button
          className="bg-raisin hover:bg-red text-white py-2 px-4 rounded font-rajdhani"
          onClick={handleLogout}
        >
          Déconnexion
        </button>
      </div>
      <div className="space-y-8">
        <TestimonialsList />
        <CarsPanel />
      </div>
    </div>
  );
};

export default EmployeePage;
