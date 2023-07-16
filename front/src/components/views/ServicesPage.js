import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/Services").then((response) => {
      setServices(response.data);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-rich text-khaki font-rajdhani">
      <Header />
      <main className="flex-grow pt-24 p-4">
        <div className="flex-grow flex flex-col justify-center items-center space-y-4 mt-4">
          {services.map((service) => (
            <div key={service.name} className="mt-8">
              <h1 className="text-xl text-khaki items-center md:text-3xl lg:text-5xl font-bold mb-4 mt-4 text-center underline">
                {service.name}
              </h1>

              <p className="text-lg text-white md:text-xl lg:text-2xl text-justify font-barlow">
                {service.description_long}
              </p>
            </div>
          ))}

          <div className="flex flex-col items-center mt-4">
            <p className="text-base md:text-lg lg:text-xl">
              Pour prendre un rendez-vous, veuillez nous contacter au :
            </p>
            <a
              href="tel:0493506971"
              className="mt-2 bg-green text-white py-2 px-4 rounded"
            >
              0493506971
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
