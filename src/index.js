import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/sobre/home";
import Contato from "./pages/contatos/Contatos";
import Certificados from "./pages/certificados/Certificados";
import reportWebVitals from "./reportWebVitals";
import Test from "./pages/teste";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename="/">
      <Routes>
        <Route path="/" index={true} element={<Home />} />
        <Route path="/Contatos" children={true} element={<Contato />} />
        <Route
          path="/Certificados"
          children={true}
          element={<Certificados />}
        />
        <Route path="/test" children={true} element={<Test />} />
        <Route path="/notFound" element={<noFound />} />
        <Route
          path="*"
          errorElement={true}
          element={<Navigate to="/notFound" />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
