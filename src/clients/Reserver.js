import React, { useState } from 'react';
import { Waves, MapPin, Users, Eye, Calendar, CreditCard, CheckCircle } from 'lucide-react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Reserver = () => {
  const [activeTab, setActiveTab] = useState('reserver');
  const [formData, setFormData] = useState({
    arrivalDate: '',
    departureDate: '',
    adults: '2',
    children: '0',
    roomType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const selectedRoom = {
    name: 'Chambre Standard Vue Mer',
    capacity: '2 pers.',
    view: 'Vue mer',
    arrival: '15 Mars 2024',
    departure: '18 Mars 2024',
    duration: 3,
    guests: 2,
    pricePerNight: 120,
    taxe: 9
  };

  const totalPrice = selectedRoom.pricePerNight * selectedRoom.duration;
  const finalTotal = totalPrice + selectedRoom.taxe;

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleBackClick = () => {
    console.log('Retour cliqué');
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Réservation confirmée:', formData);
  };

  return (
    <div className="reservation-page">
      {/* Header */}
      <Header 
        showBackButton={false}
        activeTab={activeTab}
        onBackClick={handleBackClick}
        onTabClick={handleTabClick}
      />

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {/* Page Header */}
          <div className="page-header">
            <h1>Réservation</h1>
            <p className="page-description">
              Réservez votre séjour en quelques étapes simples
            </p>
          </div>

          <div className="reservation-container">
            {/* Left Column - Form */}
            <div className="form-section">
              {/* Reservation Details */}
              <div className="form-card">
                <div className="card-header">
                  <h3>Détails de la réservation</h3>
                  <p>Remplissez les informations pour votre séjour</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Date d'arrivée</label>
                      <input 
                        type="date"
                        value={formData.arrivalDate}
                        onChange={(e) => handleInputChange('arrivalDate', e.target.value)}
                        placeholder="jj/mm/aaaa"
                      />
                    </div>
                    <div className="form-group">
                      <label>Date de départ</label>
                      <input 
                        type="date"
                        value={formData.departureDate}
                        onChange={(e) => handleInputChange('departureDate', e.target.value)}
                        placeholder="jj/mm/aaaa"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Adultes</label>
                      <select 
                        value={formData.adults}
                        onChange={(e) => handleInputChange('adults', e.target.value)}
                      >
                        <option value="">Nombre d'adultes</option>
                        <option value="1">1 adulte</option>
                        <option value="2">2 adultes</option>
                        <option value="3">3 adultes</option>
                        <option value="4">4 adultes</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Enfants</label>
                      <select 
                        value={formData.children}
                        onChange={(e) => handleInputChange('children', e.target.value)}
                      >
                        <option value="0">Nombre d'enfants</option>
                        <option value="1">1 enfant</option>
                        <option value="2">2 enfants</option>
                        <option value="3">3 enfants</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Type de chambre</label>
                    <select 
                      value={formData.roomType}
                      onChange={(e) => handleInputChange('roomType', e.target.value)}
                    >
                      <option value="">Choisir une chambre</option>
                      <option value="standard">Chambre Standard</option>
                      <option value="deluxe">Chambre Deluxe</option>
                      <option value="suite">Suite</option>
                      <option value="premium">Chambre Premium</option>
                    </select>
                  </div>
                </form>
              </div>

              {/* Personal Information */}
              <div className="form-card">
                <div className="card-header">
                  <h3>Informations personnelles</h3>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Prénom</label>
                    <input 
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div className="form-group">
                    <label>Nom</label>
                    <input 
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="votre@email.com"
                  />
                </div>

                <div className="form-group">
                  <label>Téléphone</label>
                  <input 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+33 1 23 45 67 89"
                  />
                </div>

                <div className="form-group">
                  <label>Demandes spéciales <span className="optional">(optionnel)</span></label>
                  <textarea 
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    placeholder="Indiquez vos demandes particulières..."
                    rows="4"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Summary */}
            <div className="summary-section">
              <div className="summary-card">
                <div className="card-header">
                  <h3>Récapitulatif</h3>
                </div>

                <div className="room-summary">
                  <div className="room-info">
                    <div className="room-icon">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <h4>{selectedRoom.name}</h4>
                      <div className="room-details">
                        <span><Users size={14} /> {selectedRoom.capacity}</span>
                        <span><Eye size={14} /> {selectedRoom.view}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="booking-details">
                  <div className="detail-row">
                    <span>Arrivée:</span>
                    <span>{selectedRoom.arrival}</span>
                  </div>
                  <div className="detail-row">
                    <span>Départ:</span>
                    <span>{selectedRoom.departure}</span>
                  </div>
                  <div className="detail-row">
                    <span>Durée:</span>
                    <span>{selectedRoom.duration} nuits</span>
                  </div>
                  <div className="detail-row">
                    <span>Invités:</span>
                    <span>{selectedRoom.guests} adultes</span>
                  </div>
                </div>

                <div className="price-breakdown">
                  <div className="price-row">
                    <span>{selectedRoom.pricePerNight}€ × {selectedRoom.duration} nuits</span>
                    <span>{totalPrice}€</span>
                  </div>
                  <div className="price-row">
                    <span>Taxe de séjour</span>
                    <span>{selectedRoom.taxe}€</span>
                  </div>
                  <div className="total-row">
                    <span>Total</span>
                    <span>{finalTotal}€</span>
                  </div>
                </div>

                <div className="cancellation-policy">
                  <CheckCircle size={16} />
                  <span>Annulation gratuite jusqu'à 24h avant</span>
                </div>

                <button className="confirm-button" onClick={handleSubmit}>
                  <CreditCard size={16} />
                  Confirmer la réservation
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        .reservation-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #ecfeff, #dbeafe, #ccfbf1);
        }

        .main-content {
          padding: 2rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* Page Header */
        .page-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .page-header h1 {
          font-size: 3rem;
          font-weight: 700;
          color: #0e7490;
          margin-bottom: 1rem;
        }

        .page-description {
          font-size: 1.125rem;
          color: #4b5563;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Reservation Container */
        .reservation-container {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 2rem;
          align-items: start;
        }

        /* Form Section */
        .form-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid #e5e7eb;
        }

        .card-header {
          margin-bottom: 1.5rem;
        }

        .card-header h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #0e7490;
          margin-bottom: 0.5rem;
        }

        .card-header p {
          color: #6b7280;
          font-size: 0.875rem;
          margin: 0;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
        }

        .form-group label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.5rem;
        }

        .optional {
          color: #9ca3af;
          font-weight: 400;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          transition: all 0.2s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #0891b2;
          outline: none;
          box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        /* Summary Section */
        .summary-section {
          position: sticky;
          top: 2rem;
        }

        .summary-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid #e5e7eb;
        }

        .room-summary {
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #f3f4f6;
        }

        .room-info {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }

        .room-icon {
          width: 2.5rem;
          height: 2.5rem;
          background: #ecfeff;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0891b2;
          flex-shrink: 0;
        }

        .room-info h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 0.5rem 0;
        }

        .room-details {
          display: flex;
          gap: 1rem;
          font-size: 0.75rem;
          color: #6b7280;
        }

        .room-details span {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .booking-details {
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #f3f4f6;
        }

        .detail-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }

        .detail-row span:first-child {
          color: #6b7280;
        }

        .detail-row span:last-child {
          color: #1f2937;
          font-weight: 500;
        }

        .price-breakdown {
          margin-bottom: 1.5rem;
        }

        .price-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          color: #6b7280;
        }

        .total-row {
          display: flex;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid #f3f4f6;
          font-weight: 700;
          font-size: 1.125rem;
          color: #1f2937;
        }

        .cancellation-policy {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #f0fdf4;
          padding: 0.75rem;
          border-radius: 0.5rem;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
          color: #166534;
        }

        .confirm-button {
          width: 100%;
          background: #0891b2;
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .confirm-button:hover {
          background: #0e7490;
          transform: translateY(-1px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .page-header h1 {
            font-size: 2rem;
          }

          .reservation-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .summary-section {
            position: static;
          }

          .form-card,
          .summary-card {
            padding: 1rem;
          }
        }
        `}</style>
    </div>
    );
};

export default Reserver;