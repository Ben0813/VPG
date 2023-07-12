import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarComponent from "./components/CarComponent";
import Footer from "./components/Footer";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import ServicesComponent from "./components/ServiciesComponent";
import TestimonialsForm from "./components/TestimonialsForm";
import EmployeePage from "./components/views/EmployeePage";
import NotFoundPage from "./components/views/NotFoundPage";
import LoginPage from "./components/views/LoginPage";
import Header from "./components/Header";

const HomePage = () => {
  return (
    <div className="App">
      <Header />
      <section id="services">
        <ServicesComponent />
      </section>
      <section id="cars">
        <CarComponent />
      </section>
      <section id="testimonials">
        <TestimonialsCarousel />
      </section>
      <section id="contact">
        <TestimonialsForm />
      </section>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employee" element={<EmployeePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
