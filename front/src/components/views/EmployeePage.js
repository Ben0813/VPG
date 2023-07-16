// Importing necessary libraries and components
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TestimonialsList from "../TestimonialsPanel";
import CarsPanel from "../CarsPanel";

// Component representing the Employee Page
const EmployeePage = () => {
  const navigate = useNavigate();

  // Effect hook to check if user is authenticated and has the role 'employee'
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("token") !== null;
    const hasEmployeeRole = localStorage.getItem("role") === "employee";

    // If not authenticated or doesn't have the role 'employee', redirect to login page
    if (!isAuthenticated || !hasEmployeeRole) {
      navigate("/login");
    }
  }, [navigate]);

  // Function to handle logout
  const handleLogout = () => {
    // Remove authentication info from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    // Redirect to logout page
    window.location.href = "http://localhost:3002";
  };

  // Render employee page
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
