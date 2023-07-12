import { useState, useEffect } from "react";
import axios from "axios";

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

  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="mb-4 text-center sm:text-left sm:mb-0 sm:mr-4">
          20 rue de l'ECF, 5000 Namur
        </p>
        <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4 text-center sm:mb-0">
          <li>
            <a href="#" className="text-white">
              CGV
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Politique des cookies
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Politique de confidentialité
            </a>
          </li>
        </ul>
        <div>
          <button
            onClick={handleToggle}
            className="text-white focus:outline-none hover:text-blue-500"
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

export default function App() {
  return (
    <div>
      {/* Other components */}
      <Footer />
    </div>
  );
}
