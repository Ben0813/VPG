import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const CGVPage = () => {
  return (
    <div className="font-rajdhani text-raisin bg-rich min-h-screen p-4">
      <Header />
      <h1 className="text-4xl mb-4">Garage Automobile Vincent Parrot</h1>
      <h2 className="text-6xl text-khaki mb-2 text-center">
        Conditions Générales de Vente
      </h2>

      <section className="flex flex-col mt-4">
        <h3 className="text-4xl text-khaki mb-1">Réparation Mécanique</h3>
        <p className="text-lg text-white md:text-xl lg:text-2xl text-justify font-barlow">
          Toutes les réparations mécaniques effectuées par notre garage sont
          garanties pendant une période de 12 mois ou 20 000 km, selon la
          première éventualité.
        </p>
      </section>

      <section className="flex flex-col mt-4">
        <h3 className="text-4xl text-khaki mb-1">Entretien</h3>
        <p className="text-lg text-white md:text-xl lg:text-2xl text-justify font-barlow">
          Nos services d'entretien sont réalisés conformément aux spécifications
          du fabricant. Les pièces remplacées lors de l'entretien sont
          disponibles pour inspection sur demande.
        </p>
      </section>

      <section className="flex flex-col mt-4">
        <h3 className="text-4xl text-khaki mb-1">Pneumatiques</h3>
        <p className="text-lg text-white md:text-xl lg:text-2xl text-justify font-barlow">
          Nous fournissons une gamme de pneus de différentes marques. Tous les
          pneus vendus et installés par notre garage sont couverts par la
          garantie du fabricant.
        </p>
      </section>

      <section className="flex flex-col mt-4">
        <h3 className="text-4xl text-khaki mb-1">Carrosserie</h3>
        <p className="text-lg text-white md:text-xl lg:text-2xl text-justify font-barlow">
          Nos travaux de carrosserie sont garantis pendant une période de 24
          mois. Nous nous engageons à réparer ou à remplacer tout travail de
          carrosserie qui présente des défauts de matériaux ou de fabrication.
        </p>
      </section>

      <section className="flex flex-col mt-4">
        <h3 className="text-4xl text-khaki mb-1 mt-4">
          Vente de Véhicules d'Occasion
        </h3>
        <p className="text-lg text-white md:text-xl lg:text-2xl text-justify font-barlow">
          Tous nos véhicules d'occasion sont vendus avec une garantie de 12 mois
          ou 20 000 km. Nous fournissons un historique complet du véhicule et
          une inspection pré-achat est disponible sur demande.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default CGVPage;
