import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TestimonialsList from "../TestimonialsPanel";
import CarsPanel from "../CarsPanel";
import TestimonialsForm from "../TestimonialsForm";

//is for redirecting to login page if user is not authenticated
const EmployeePage = () => {
  const navigate = useNavigate();

  //check if user is authenticated and has the role 'employee'
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("token") !== null;
    const hasEmployeeRole = localStorage.getItem("role") === "employee";

    //redirect to login page
    if (!isAuthenticated || !hasEmployeeRole) {
      navigate("/login");
    }
  }, [navigate]);

  //logout
  const handleLogout = () => {
    //remove authentication info from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    //redirect to logout page
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-b from-khaki via-white to-khaki p-4 sm:p-8 min-h-screen">
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
        <TestimonialsForm />
        <CarsPanel />
      </div>
    </div>
  );
};

export default EmployeePage;
