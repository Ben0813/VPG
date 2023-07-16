import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Footer() {
  const [openingHours, setOpeningHours] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/OpeningHours")
      .then((response) => setOpeningHours(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:0493506971";
  };

  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
          <button
            className="bg-raisin hover:bg-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2"
            type="button"
            onClick={handlePhoneClick}
          >
            Téléphoner
          </button>
          <p className="text-center sm:text-left">
            20 rue de l'ECF, 5000 Namur
          </p>
        </div>
        <div className="flex flex-col items-center sm:items-center mb-4 sm:mb-0">
          <Link to="/cgv" className="text-white hover:text-khaki mb-2">
            CGV
          </Link>
          <Link
            to="/politique-de-confidentialite"
            className="text-white hover:text-khaki"
          >
            Politique de confidentialité
          </Link>
        </div>
        <div className="flex flex-col items-center sm:items-end">
          <button
            onClick={handleToggle}
            className="bg-raisin hover:bg-khaki text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4 sm:mb-0"
            type="button"
          >
            Horaires
          </button>
          {isOpen && (
            <ul className="flex flex-col space-y-4 text-center bg-white text-black p-4 rounded">
              {openingHours.map((hours) => (
                <li key={hours.id}>
                  {hours.dayOfWeek}: {hours.openTime} - {hours.closeTime}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
