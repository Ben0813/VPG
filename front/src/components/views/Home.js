import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Header,
  CarComponent,
  Footer,
  TestimonialsCarousel,
  ServiciesComponent,
  TestimonialsForm,
} from "./components";
import { EmployeePage, NotFoundPage } from "./components/Views";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Header />
            <ServiciesComponent />
            <CarComponent />
            <TestimonialsCarousel />
            <TestimonialsForm />
            <Footer />
          </div>
        </Route>
        <Route path="/employee" component={EmployeePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
