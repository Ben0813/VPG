import { useState, useEffect } from "react";
import axios from "axios";

const Slider = ({ min, max, value, onChange }) => {
  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    onChange(newValue);
  };

  return (
    <div className="flex flex-col items-center mb-4">
      <span className="font-rajdhani text-gray-900">{value}</span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="w-full h-4 rounded-lg overflow-hidden appearance-none bg-slate focus:outline-none focus:bg-gray-400 focus:border-gray-400"
      />
    </div>
  );
};

const CarComponent = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [makeFilter, setMakeFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");
  const [yearFilter, setYearFilter] = useState(new Date().getFullYear());
  const [mileageFilter, setMileageFilter] = useState(300000);
  const [priceFilter, setPriceFilter] = useState(25000);

  useEffect(() => {
    axios
      .get("http://localhost:3001/Cars")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const filtered = cars.filter((car) => {
      const makeMatch = car.make
        .toLowerCase()
        .includes(makeFilter.toLowerCase());
      const modelMatch = car.model
        .toLowerCase()
        .includes(modelFilter.toLowerCase());
      const yearMatch = car.year <= yearFilter;
      const mileageMatch = car.mileage <= mileageFilter;
      const priceMatch = car.price <= priceFilter;

      return makeMatch && modelMatch && yearMatch && mileageMatch && priceMatch;
    });

    setFilteredCars(filtered);
  }, [makeFilter, modelFilter, yearFilter, mileageFilter, priceFilter, cars]);

  const createMailToLink = (carId) => {
    const subject = `vente voiture n°${carId}`;
    const body =
      "Bonjour, je suis intéressé par ce véhicule. Pouvez-vous me fournir plus d'informations ?";
    return `mailto:benoitdewigne@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleContactClick = (e, carId) => {
    e.preventDefault();
    window.location.href = createMailToLink(carId);
  };

  return (
    <div className="p-4 bg-gray-100 w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Nos véhicules d'occasion
      </h2>
      <hr className="mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-0">
        <div className="col-span-full sm:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCars.map((car) => (
              <div key={car.id} className="p-4 bg-bone rounded-lg shadow-md">
                <h2 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">
                  {car.make} {car.model}
                </h2>
                <p className="text-gray-900 mb-2">Année : {car.year}</p>
                <p className="text-gray-900 mb-2">
                  Kilométrage : {car.mileage} km
                </p>
                <p className="text-gray-900 mb-2">Prix : {car.price} €</p>
                {car.pictureUrl && (
                  <img
                    src={`http://localhost:3000${car.pictureUrl}`}
                    alt={car.make}
                    className="w-full h-32 object-cover mb-2"
                  />
                )}
                <button
                  onClick={(e) => handleContactClick(e, car.id)}
                  className="bg-raisin text-white py-2 px-4 rounded"
                >
                  Contactez-nous
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-full sm:col-span-1 p-4 rounded-lg shadow-md bg-khaki bg-opacity-80">
          <h1 className="text-2xl font-bold mb-4 text-gray-900">
            Filtres de recherche
          </h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Marque"
              className="border border-gray-900 p-2 mb-2 w-full"
              value={makeFilter}
              onChange={(e) => setMakeFilter(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Modèle"
              className="border border-gray-900 p-2 mb-2 w-full"
              value={modelFilter}
              onChange={(e) => setModelFilter(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-900 mb-2">Année :</label>
            <Slider
              min={1950}
              max={new Date().getFullYear()}
              value={yearFilter}
              onChange={setYearFilter}
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-900 mb-2">Kilométrage :</label>
            <Slider
              min={0}
              max={300000}
              value={mileageFilter}
              onChange={setMileageFilter}
            />
          </div>
          <div>
            <label className="text-gray-900 mb-2">Prix :</label>
            <Slider
              min={0}
              max={25000}
              value={priceFilter}
              onChange={setPriceFilter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return <CarComponent />;
}
