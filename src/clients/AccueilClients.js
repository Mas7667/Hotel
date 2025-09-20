import React from 'react';
import './AccueilClients.css';
import { 
  Waves, Search, Star, Wifi, Car, Coffee, Utensils, ArrowLeft, 
  MapPin, Phone, Mail 
} from "lucide-react";

const AccueilClients = () => {
  return (
    <div className="min-vh-100">
      {/* Header */}
      <header className="header-sticky bg-white shadow-sm">
        <div className="container-fluid">
          <div className="row align-items-center py-3">
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-3">
                <button className="btn btn-ghost">
                  <ArrowLeft size={16} className="me-2" />
                  Retour
                </button>
                <div className="d-flex align-items-center gap-2">
                  <Waves size={32} className="text-cyan" />
                  <h1 className="h4 mb-0 text-cyan-dark">Vue Sur Mer</h1>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <nav className="d-flex justify-content-end gap-2">
                <button className="btn btn-active">Accueil</button>
                <button className="btn btn-nav">Nos Chambres</button>
                <button className="btn btn-nav">Réserver</button>
                <button className="btn btn-nav">Mon Compte</button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Real Hotel Room Image */}
      <div className="hero-section">
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" 
            alt="Luxury Hotel Room with Ocean View" 
            className="hero-bg-image"
          />
        </div>
        <div className="hero-overlay">
          <div className="container h-100 d-flex align-items-center justify-content-center">
            <div className="text-center text-white px-4">
              <h2 className="hero-title mb-4">Votre Évasion Vue Sur Mer</h2>
              <p className="hero-description mb-5">
                Découvrez le luxe et la sérénité dans notre hôtel face à l'océan. 
                Chaque chambre offre une vue imprenable sur la mer Méditerranée.
              </p>
              <button className="btn btn-hero">
                Réserver maintenant
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Booking Section */}
      <div className="quick-booking-wrapper">
        <div className="container">
          <div className="quick-booking-card">
            <h3 className="text-center mb-4 text-dark">Réservation Rapide</h3>
            <div className="row g-3 align-items-end">
              <div className="col-md-3">
                <label className="form-label">Arrivée</label>
                <input type="date" className="form-control form-control-custom" placeholder="jj/mm/aaaa" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Départ</label>
                <input type="date" className="form-control form-control-custom" placeholder="jj/mm/aaaa" />
              </div>
              <div className="col-md-3">
                <label className="form-label">Personnes</label>
                <input 
                  type="number" 
                  min="1" 
                  max="4" 
                  defaultValue="2" 
                  className="form-control form-control-custom" 
                />
              </div>
              <div className="col-md-3">
                <button className="btn btn-search w-100">
                  <Search size={16} className="me-2" />
                  Rechercher
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Rooms */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h3 className="section-title">Nos Chambres d'Exception</h3>
          <p className="section-description">
            Chaque chambre est soigneusement conçue pour vous offrir confort et élégance 
            avec une vue spectaculaire sur la mer.
          </p>
        </div>

        <div className="row g-4">
          {/* Chambre Standard */}
          <div className="col-lg-4 col-md-6">
            <div className="room-card">
              <div className="room-image">
                <img 
                  src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Chambre Standard"
                  className="room-img"
                />
              </div>
              <div className="room-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="room-title">Chambre Standard</h4>
                  <div className="room-stars">
                    <Star size={16} className="star-filled" />
                    <Star size={16} className="star-filled" />
                    <Star size={16} className="star-filled" />
                    <Star size={16} className="star-filled" />
                    <Star size={16} className="star-empty" />
                  </div>
                </div>
                <p className="room-description">
                  Chambre confortable avec vue partielle sur mer, parfaite pour un séjour relaxant.
                </p>
                <div className="room-badges mb-3">
                  <span className="badge-service cyan">
                    <Wifi size={12} className="me-1" />
                    Wi-Fi
                  </span>
                  <span className="badge-service cyan">
                    Minibar
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="room-price cyan">120€</span>
                    <span className="room-price-unit">/nuit</span>
                  </div>
                  <button className="btn btn-room cyan">Réserver</button>
                </div>
              </div>
            </div>
          </div>

          {/* Chambre Deluxe */}
          <div className="col-lg-4 col-md-6">
            <div className="room-card">
              <div className="room-image">
                <img 
                  src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Chambre Deluxe"
                  className="room-img"
                />
              </div>
              <div className="room-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="room-title">Chambre Deluxe</h4>
                  <div className="room-stars">
                    <Star size={16} className="star-filled" />
                    <Star size={16} className="star-filled" />
                    <Star size={16} className="star-filled" />
                    <Star size={16} className="star-filled" />
                    <Star size={16} className="star-filled" />
                  </div>
                </div>
                <p className="room-description">
                  Chambre spacieuse avec vue directe sur mer et balcon privé pour des moments inoubliables.
                </p>
                <div className="room-badges mb-3">
                  <span className="badge-service blue">
                    <Wifi size={12} className="me-1" />
                    Wi-Fi
                  </span>
                  <span className="badge-service blue">
                    Minibar
                  </span>
                  <span className="badge-service blue">Balcon</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="room-price blue">180€</span>
                    <span className="room-price-unit">/nuit</span>
                  </div>
                  <button className="btn btn-room blue">Réserver</button>
                </div>
              </div>
            </div>
          </div>

          {/* Suite Vue Mer */}
          <div className="col-lg-4 col-md-6">
            <div className="room-card">
              <div className="room-image">
                <img 
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Suite Vue Mer"
                  className="room-img"
                />
              </div>
              <div className="room-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="room-title">Suite Vue Mer</h4>
                  <div className="room-stars">
                    <Star size={16} className="star-filled" />
                    <Star size={16} className="star-filled" />
                    <Star size={16} className="star-filled" />
                    <Star size={16} className="star-filled" />
                    <Star size={16} className="star-filled" />
                  </div>
                </div>
                <p className="room-description">
                  Suite luxueuse avec vue panoramique sur mer, salon séparé et terrasse privée.
                </p>
                <div className="room-badges mb-3">
                  <span className="badge-service teal">
                    <Wifi size={12} className="me-1" />
                    Wi-Fi
                  </span>
                  <span className="badge-service teal">
                    Minibar
                  </span>
                  <span className="badge-service teal">Terrasse</span>
                  <span className="badge-service teal">Salon</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="room-price teal">320€</span>
                    <span className="room-price-unit">/nuit</span>
                  </div>
                  <button className="btn btn-room teal">Réserver</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="section-title">Nos Services</h3>
            <p className="section-description">
              Profitez d'une gamme complète de services pour rendre votre séjour inoubliable.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="service-item text-center">
                <div className="service-icon cyan">
                  <Wifi size={32} />
                </div>
                <h4 className="service-title">Wi-Fi Gratuit</h4>
                <p className="service-description">Connexion haut débit dans tout l'hôtel</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item text-center">
                <div className="service-icon blue">
                  <Car size={32} />
                </div>
                <h4 className="service-title">Parking Privé</h4>
                <p className="service-description">Stationnement sécurisé gratuit</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item text-center">
                <div className="service-icon teal">
                  <Utensils size={32} />
                </div>
                <h4 className="service-title">Restaurant</h4>
                <p className="service-description">Cuisine gastronomique vue sur mer</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item text-center">
                <div className="service-icon emerald">
                  <Coffee size={32} />
                </div>
                <h4 className="service-title">Service 24h/24</h4>
                <p className="service-description">Réception et conciergerie</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <Waves size={32} className="text-cyan" />
                <h3 className="h4 mb-0 text-white">Vue Sur Mer</h3>
              </div>
              <p className="footer-description">
                Votre hôtel de luxe face à la Méditerranée. Une expérience inoubliable vous attend.
              </p>
            </div>
            <div className="col-lg-4">
              <h4 className="footer-title">Contact</h4>
              <div className="footer-contacts">
                <div className="footer-contact">
                  <MapPin size={16} />
                  <span>123 Boulevard de la Mer, 06000 Nice</span>
                </div>
                <div className="footer-contact">
                  <Phone size={16} />
                  <span>+33 4 93 00 00 00</span>
                </div>
                <div className="footer-contact">
                  <Mail size={16} />
                  <span>contact@vuesurmer.fr</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h4 className="footer-title">Liens Rapides</h4>
              <div className="footer-links">
                <a href="/chambres">Nos Chambres</a>
                <a href="/reservation">Réserver</a>
                <a href="/profil">Mon Compte</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Vue Sur Mer. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
        </div>
  );
};

export default AccueilClients;