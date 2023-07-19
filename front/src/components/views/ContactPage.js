import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  //updates the form state with the new value of the input
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  //send email to a specific email with the form data
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message, phone } = formState;
    const mailtoLink = `mailto:info@vpgarage.com?subject=Nouveau%20message%20de%20contact&body=Nom:%20${name}%0AEmail:%20${email}%0ANum%C3%A9ro%20de%20t%C3%A9l%C3%A9phone:%20${phone}%0AMessage:%20${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-rajdhani text-raisin mb-8">
          Contactez-nous
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-onyx text-sm font-barlow mb-2"
              htmlFor="name"
            >
              Nom
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-metal leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-onyx text-sm font-barlow mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-metal leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-onyx text-sm font-barlow mb-2"
              htmlFor="phone"
            >
              Numéro de téléphone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-metal leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-onyx text-sm font-barlow mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-metal leading-tight focus:outline-none focus:shadow-outline h-24"
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Envoyer
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
