import React, { useState, useEffect } from "react";
import axios from "axios";

//retrieves the current user ID from local storage
const getCurrentUserId = () => {
  const userId = localStorage.getItem("userId");
  return userId ? userId : "";
};

//show a panel with a list of cars, allows the user to create, update and delete cars
const CarsPanel = () => {
  const [cars, setCars] = useState([]);
  const [showUpdatePanel, setShowUpdatePanel] = useState(false);
  const [showCreatePanel, setShowCreatePanel] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [newCar, setNewCar] = useState({
    make: "",
    model: "",
    year: "",
    mileage: "",
    price: "",
    userId: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [updateImageFile, setUpdateImageFile] = useState(null);

  //fetch list of cars from the server when the component is mounted
  useEffect(() => {
    fetchCars();
  }, []);

  //fetch list of cars from the server
  const fetchCars = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Cars");
      setCars(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCar = async (carId) => {
    try {
      await axios.delete(`http://localhost:3000/Cars/${carId}`);
      fetchCars();
    } catch (error) {
      console.log(error);
    }
  };

  const openUpdatePanel = (car) => {
    setSelectedCar(car);
    setShowUpdatePanel(true);
  };

  const closeUpdatePanel = () => {
    setSelectedCar(null);
    setUpdateImageFile(null);
    setShowUpdatePanel(false);
  };

  const updateCar = async (carId) => {
    try {
      const formData = new FormData();
      formData.append("make", selectedCar.make);
      formData.append("model", selectedCar.model);
      formData.append("year", selectedCar.year);
      formData.append("mileage", selectedCar.mileage);
      formData.append("price", selectedCar.price);
      formData.append("userId", getCurrentUserId());
      if (updateImageFile) {
        formData.append("image", updateImageFile);
      }

      await axios.put(`http://localhost:3000/Cars/${carId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      fetchCars();
      closeUpdatePanel();
    } catch (error) {
      console.log(error);
    }
  };

  const openCreatePanel = () => {
    setShowCreatePanel(true);
  };

  const closeCreatePanel = () => {
    setShowCreatePanel(false);
  };

  //create a car on the server
  const createCar = async () => {
    try {
      const formData = new FormData();
      formData.append("make", newCar.make);
      formData.append("model", newCar.model);
      formData.append("year", newCar.year);
      formData.append("mileage", newCar.mileage);
      formData.append("price", newCar.price);
      formData.append("userId", newCar.userId);

      formData.append("image", imageFile);

      await axios.post("http://localhost:3000/Cars", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      fetchCars();
      setNewCar({
        make: "",
        model: "",
        year: "",
        mileage: "",
        price: "",
        userId: "",
      });
      setImageFile(null);
      closeCreatePanel();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen p-4">
      <h2 className="text-3xl font-rajdhani text-center mb-4">
        Gestion des véhicules
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-metal text-white p-4 rounded-xl shadow"
          >
            <img
              src={`http://localhost:3000${car.pictureUrl}`}
              alt={car.make}
              className="w-full mb-4"
            />
            <h2 className="text-xl font-rajdhani font-bold mb-2">{car.make}</h2>
            <p className="text-white mb-2 font-barlow">{car.model}</p>
            <p className="text-white mb-2 font-barlow">{car.year}</p>
            <p className="text-white mb-4 font-barlow">
              {car.mileage} Kilométrage
            </p>
            <p className="text-white mb-4 font-barlow">{car.price}€</p>
            <div>
              <button
                className="bg-red text-white px-4 py-2 rounded mr-2 font-rajdhani"
                onClick={() => deleteCar(car.id)}
              >
                Supprimer
              </button>
              <button
                className="bg-onyx text-white px-4 py-2 rounded mr-2 font-rajdhani"
                onClick={() => openUpdatePanel(car)}
              >
                Modifier
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="bg-green text-white px-4 py-2 rounded mt-4 font-rajdhani"
        onClick={openCreatePanel}
      >
        Ajouter
      </button>

      {/* The Update Panel */}
      {showUpdatePanel && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-rich p-4 rounded-xl shadow">
            <h2 className="text-xl font-rajdhani font-bold mb-2">
              Modifier une voiture
            </h2>
            <input
              type="text"
              placeholder="Make"
              required
              value={selectedCar.make}
              onChange={(e) =>
                setSelectedCar({ ...selectedCar, make: e.target.value })
              }
              className="border border-gray-300 rounded mb-2 p-2 w-full"
            />
            <input
              type="text"
              placeholder="Model"
              required
              value={selectedCar.model}
              onChange={(e) =>
                setSelectedCar({ ...selectedCar, model: e.target.value })
              }
              className="border border-gray-300 rounded mb-2 p-2 w-full"
            />
            <input
              type="text"
              placeholder="Year"
              required
              value={selectedCar.year}
              onChange={(e) =>
                setSelectedCar({ ...selectedCar, year: e.target.value })
              }
              className="border border-gray-300 rounded mb-2 p-2 w-full"
            />
            <input
              type="text"
              placeholder="Mileage"
              required
              value={selectedCar.mileage}
              onChange={(e) =>
                setSelectedCar({ ...selectedCar, mileage: e.target.value })
              }
              className="border border-gray-300 rounded mb-2 p-2 w-full"
            />
            <input
              type="text"
              placeholder="Price"
              required
              value={selectedCar.price}
              onChange={(e) =>
                setSelectedCar({ ...selectedCar, price: e.target.value })
              }
              className="border border-gray-300 rounded mb-2 p-2 w-full"
            />
            <input
              type="file"
              onChange={(e) => setUpdateImageFile(e.target.files[0])}
              className="border border-gray-300 rounded mb-2 p-2 w-full"
            />
            <input
              type="text"
              placeholder="User ID"
              required
              value={selectedCar.userId}
              onChange={(e) =>
                setSelectedCar({ ...selectedCar, userId: e.target.value })
              }
              className="border border-gray-300 rounded mb-2 p-2 w-full"
            />
            <div>
              <button
                className="bg-green text-white px-4 py-2 rounded mr-2"
                onClick={() => updateCar(selectedCar.id)}
              >
                Save
              </button>
              <button
                className="bg-red text-white px-4 py-2 rounded mr-2"
                onClick={closeUpdatePanel}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      {/* The Create Panel */}
      {showCreatePanel && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-rich p-4 rounded-xl shadow">
            <h2 className="text-xl font-rajdhani font-bold mb-2">
              Créer une voiture
            </h2>
            <input
              type="text"
              placeholder="Make"
              required
              value={newCar.make}
              onChange={(e) => setNewCar({ ...newCar, make: e.target.value })}
              className="border border-gray-300 rounded mb-2 p-2 w-full"
            />
            <input
              type="text"
              placeholder="Model"
              required
              value={newCar.model}
              onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
              className="border border-gray-300 rounded mb-2 p-2 w-full"
            />
            <input
              type="text"
              placeholder="Year"
              required
              value={newCar.year}
              onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
              className="border border-gray-300 rounded mb-2 p-2 w-full"
            />
            <input
              type="text"
              placeholder="Mileage"
              required
              value={newCar.mileage}
              onChange={(e) =>
                setNewCar({ ...newCar, mileage: e.target.value })
              }
              className="border border-gray-300 rounded mb-2 p-2 w-full"
            />
            <input
              type="text"
              placeholder="Price"
              required
              value={newCar.price}
              onChange={(e) => setNewCar({ ...newCar, price: e.target.value })}
              className="border border-gray-300 rounded mb-2 p-2 w-full"
            />
            <input
              type="file"
              required
              onChange={(e) => setImageFile(e.target.files[0])}
              className="border border-gray-300 rounded mb-2 p-2 w-full"
            />
            <input
              type="text"
              placeholder="User ID"
              required
              value={newCar.userId}
              onChange={(e) => setNewCar({ ...newCar, userId: e.target.value })}
              className="border border-gray-300 rounded mb-2 p-2 w-full"
            />
            <div>
              {imageFile && (
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="Preview"
                  className="h-32 w-32 object-cover rounded mb-2"
                />
              )}
              <button
                className="bg-green text-white px-4 py-2 rounded mr-2"
                onClick={createCar}
              >
                Ajouter
              </button>
              <button
                className="bg-red text-white px-4 py-2 rounded"
                onClick={closeCreatePanel}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarsPanel;
