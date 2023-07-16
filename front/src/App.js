// Importing necessary libraries and components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarSelector from "./components/CarSelector";
import Footer from "./components/Footer";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import Hero from "./components/Hero";
import TestimonialsForm from "./components/TestimonialsForm";
import EmployeePage from "./components/views/EmployeePage";
import NotFoundPage from "./components/views/NotFoundPage";
import LoginPage from "./components/views/LoginPage";
import Header from "./components/Header";
import ServicesPage from "./components/views/ServicesPage";
import CGVPage from "./components/views/CGVPage";
import PrivacyPolicyPage from "./components/views/PrivacyPolicyPage";
import ContactPage from "./components/views/ContactPage";

// Component representing the Home Page
const HomePage = () => {
  return (
    <div className="App">
      <Header />
      <section id="services">
        <Hero />
      </section>
      <section id="cars">
        <CarSelector />
      </section>
      <section id="testimonials">
        <TestimonialsCarousel />
      </section>
      <section id="form">
        <TestimonialsForm />
      </section>
      <Footer />
    </div>
  );
};

// Main App component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employee" element={<EmployeePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/services" element={<ServicesPage />} />
        route
        <Route path="/cgv" element={<CGVPage />} />
        <Route
          path="/politique-de-confidentialite"
          element={<PrivacyPolicyPage />}
        />
        <Route path="/contact" element={<ContactPage />} />
        route
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
