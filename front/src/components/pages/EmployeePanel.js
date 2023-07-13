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

  return (
    <div className="bg-blue-500 p-4 sm:p-8">
      <TestimonialsList />
      <CarsPanel />
    </div>
  );
};

export default EmployeePage;
