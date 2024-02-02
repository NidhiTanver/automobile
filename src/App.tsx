import React from "react";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoPageFound from "./pages/NoPageFound";
import Services from "./pages/Services";
import { routes } from "./routes/routeConstant";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Header from "./global/Header";
import Footer from "./global/component/Footer";
// import "./App.css";

function App() {
  const { home, services, notFound } = routes;
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={routes.home}>
          <Route index element={<Dashboard />} />
          <Route path={routes.services} element={<Services />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.notFound} element={<NoPageFound />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
