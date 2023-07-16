import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-red-lighter text-brand-dark px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-khaki to-white">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-rajdhani text-raisin mb-4 text-center shadow-text transition-all duration-500 ease-in-out transform hover:scale-105">
        404 - Page non trouvée
      </h1>
      <p className="text-base sm:text-lg lg:text-xl font-barlow text-black text-center mb-4">
        Ouille ! Il semblerait que cette page ait pris la route sans nous. Mais
        ne vous inquiétez pas, nous avons les meilleurs pneus pour revenir sur
        la bonne voie !
      </p>
      <Link
        to="/"
        className="bg-raisin hover:bg-khaki text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default NotFoundPage;
