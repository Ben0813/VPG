import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

const CGVPage = () => {
  //scroll to the top when the page is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-rich text-khaki font-rajdhani">
      <Header />
      <main className="flex-grow pt-24 p-4">
        <h1 className="text-6xl text-khaki mb-2 text-center mt-4">
          Conditions Générales de Vente
        </h1>

        <section className="flex flex-col mt-4">
          <h3 className="text-2xl text-khaki mb-1">Réparation mécanique</h3>
          <p className="text-lg text-white md:text-xl lg:text-xl text-justify font-barlow">
            Tous les travaux de réparation mécanique sont couverts par une
            garantie de 6 mois. Si le même problème se produit pendant cette
            période, nous le réparons gratuitement.
          </p>
        </section>

        <section className="flex flex-col mt-4">
          <h3 className="text-2xl text-khaki mb-1">Entretien</h3>
          <p className="text-lg text-white md:text-xl lg:text-xl text-justify font-barlow">
            Les services d'entretien doivent être payés au moment du service.
            Les annulations doivent être effectuées au moins 24 heures à
            l'avance pour un remboursement complet.
          </p>
        </section>

        <section className="flex flex-col mt-4">
          <h3 className="text-2xl text-khaki mb-1">Pneumatiques</h3>
          <p className="text-lg text-white md:text-xl lg:text-xl text-justify font-barlow">
            Les pneus achetés chez nous sont couverts par une garantie de 12
            mois ou 12 000 km, selon le premier de ces événements à se produire.
            Cette garantie couvre les défauts de fabrication et ne couvre pas
            les dommages causés par l'usure normale, les accidents ou
            l'utilisation inappropriée.
          </p>
        </section>

        <section className="flex flex-col mt-4">
          <h3 className="text-2xl text-khaki mb-1">Carrosserie</h3>
          <p className="text-lg text-white md:text-xl lg:text-xl text-justify font-barlow">
            Les travaux de carrosserie sont couverts par une garantie de 12
            mois. Cette garantie couvre les défauts de matériaux et de
            fabrication. Elle ne couvre pas les dommages causés par des
            accidents, des chocs ou des conditions météorologiques extrêmes
            après la réparation.
          </p>
        </section>

        <section className="flex flex-col mt-4">
          <h3 className="text-2xl text-khaki mb-1">
            Vente de Véhicules d'Occasion
          </h3>
          <p className="text-lg text-white md:text-xl lg:text-xl text-justify font-barlow">
            Tous les véhicules d'occasion sont vendus en l'état et sans
            garantie, sauf indication contraire écrite et signée par nous. Les
            acheteurs ont le droit d'inspecter le véhicule avant l'achat. Toutes
            les ventes sont finales.
          </p>
          <p className="text-white mt-4 mb-4">Mise à jour le 14 juillet 2023</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CGVPage;

// ...
