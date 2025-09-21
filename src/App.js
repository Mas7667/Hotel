import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Building, Users, Waves, MapPin, Phone, Mail } from "lucide-react";
import AccueilAdmin from './admin/AccueilAdmin';
import AccueilClients from './clients/AccueilClients';
import Chambres from './clients/Chambres';
import Reserver from './clients/Reserver';
import 'bootstrap/dist/css/bootstrap.min.css';



function Home() {
  return (
    <div className="app">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="hero-title">
            <Waves size={70} className="waves-icon" />
            <h1>Vue Sur Mer</h1>
          </div>
          <p className="hero-description">
            Découvrez l'élégance et le confort de notre hôtel de bord de mer. Une 
            expérience inoubliable vous attend avec une vue imprenable sur l'océan.
          </p>
          
          {/* Access Cards */}
          <div className="cards-container">
            <div className="access-card">
              <div className="card-icon client-icon">
                <Users size={32} />
              </div>
              <h3>Espace Client</h3>
              <p>
                Réservez votre séjour, consultez nos chambres et 
                gérez vos réservations en toute simplicité.
              </p>
              
                {/* <button className="btn btn-client">Réserver maintenant</button> */}
              <Link to="/clients" className="btn btn-client">
                Réserver maintenant
              </Link>
            </div>
            
            <div className="access-card">
              <div className="card-icon admin-icon">
                <Building size={32} />
              </div>
              <h3>Administration</h3>
              <p>
                Gérez les réservations, les chambres et les clients 
                de votre hôtel avec notre interface intuitive.
              </p>
              {/* <button className="btn btn-admin">Accès gestionnaire</button> */}

              <Link to="/admin" className="btn btn-admin">
                Accès gestionnaire
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="contact-section">
        <h2>Contactez-nous</h2>
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <MapPin size={20} />
            </div>
            <h4>Adresse</h4>
            <p>123 Boulevard de la Mer<br />06000 Nice, France</p>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <Phone size={20} />
            </div>
            <h4>Téléphone</h4>
            <p>+33 4 93 00 00 00</p>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">
              <Mail size={20} />
            </div>
            <h4>Email</h4>
            <p>contact@vuesurmer.fr</p>
          </div>
        </div>
      </div>
      </div>
  );
}
function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<AccueilClients />} />
        <Route path="/admin" element={<AccueilAdmin />} />
        <Route path="/clients/chambres" element={<Chambres />} />
        <Route path="/clients/reserver" element={<Reserver />} />
        {/* <Route path="/clients/" element={<AccueilClients />} /> */}
        {/* autres routes */}
      </Routes>
    </Router>
    
  )
}

export default App;
