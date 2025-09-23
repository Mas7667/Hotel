import React, { useState } from 'react';
import { Waves, Users, Mail, Phone, Calendar, MapPin, Edit2, Save, X, Star, Clock } from 'lucide-react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Compte = () => {
  const [activeTab, setActiveTab] = useState('compte');
  const [activeSection, setActiveSection] = useState('reservations');
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'jean.dupont@email.com',
    phone: '+33 1 23 45 67 89',
    address: '123 Rue de la Paix, 75001 Paris'
  });

  const [editedInfo, setEditedInfo] = useState({ ...userInfo });

  const userStats = {
    status: 'Client Gold',
    memberSince: '2023',
    currentPoints: 1250,
    nextLevel: 'Platine',
    pointsToNext: 750,
    totalNights: 10,
    totalSavings: 156
  };

  const reservations = [
    {
      id: '#R001',
      room: 'Suite Deluxe Panoramique',
      arrival: '14/02/2024',
      departure: '17/02/2024',
      nights: 3,
      total: '840€',
      status: 'Confirmée'
    },
    {
      id: '#R002',
      room: 'Chambre Standard Vue Mer',
      arrival: '09/01/2024',
      departure: '11/01/2024',
      nights: 2,
      total: '240€',
      status: 'Terminée'
    },
    {
      id: '#R003',
      room: 'Chambre Premium Vue Mer',
      arrival: '19/12/2023',
      departure: '24/12/2023',
      nights: 5,
      total: '1000€',
      status: 'Terminée'
    }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleBackClick = () => {
    console.log('Retour cliqué');
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedInfo({ ...userInfo });
  };

  const handleSave = () => {
    setUserInfo({ ...editedInfo });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedInfo({ ...userInfo });
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditedInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmée':
        return 'status-confirmed';
      case 'Terminée':
        return 'status-completed';
      case 'Annulée':
        return 'status-cancelled';
      default:
        return 'status-confirmed';
    }
  };

  const progressPercentage = (userStats.currentPoints / (userStats.currentPoints + userStats.pointsToNext)) * 100;

  return (
    <div className="account-page">
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
            <h1>Mon Compte</h1>
            <p className="page-description">
              Gérez votre profil et consultez vos réservations
            </p>
          </div>

          <div className="account-container">
            {/* Left Column - Profile */}
            <div className="profile-section">
              {/* User Profile Card */}
              <div className="profile-card">
                <div className="profile-avatar">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80" alt="Profile" />
                </div>
                <div className="profile-info">
                  <h2>{userInfo.firstName} {userInfo.lastName}</h2>
                  <div className="status-badge">
                    <Star size={16} />
                    {userStats.status}
                  </div>
                  <div className="contact-info">
                    <div className="contact-item">
                      <Mail size={16} />
                      <span>{userInfo.email}</span>
                    </div>
                    <div className="contact-item">
                      <Phone size={16} />
                      <span>{userInfo.phone}</span>
                    </div>
                    <div className="contact-item">
                      <Calendar size={16} />
                      <span>Membre depuis {userStats.memberSince}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Loyalty Program */}
              <div className="loyalty-card">
                <div className="card-header">
                  <Star size={20} />
                  <h3>Programme Fidélité</h3>
                </div>
                <div className="points-info">
                  <div className="current-points">
                    <span className="points-number">{userStats.currentPoints} pts</span>
                    <span className="points-label">Points actuels</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
                  </div>
                  <div className="next-level">
                    <span>{userStats.pointsToNext} pts pour le niveau {userStats.nextLevel}</span>
                  </div>
                </div>
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-label">Nuits totales</span>
                    <span className="stat-value">{userStats.totalNights} nuits</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Économies totales</span>
                    <span className="stat-value">{userStats.totalSavings}€</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="content-section">
              {/* Tab Navigation */}
              <div className="tab-navigation">
                <button 
                  className={`tab-button ${activeSection === 'reservations' ? 'active' : ''}`}
                  onClick={() => setActiveSection('reservations')}
                >
                  Mes Réservations
                </button>
                <button 
                  className={`tab-button ${activeSection === 'profile' ? 'active' : ''}`}
                  onClick={() => setActiveSection('profile')}
                >
                  Informations Personnelles
                </button>
              </div>

              {/* Reservations Tab */}
              {activeSection === 'reservations' && (
                <div className="tab-content">
                  <div className="section-header">
                    <div className="header-content">
                      <Clock size={20} />
                      <div>
                        <h3>Historique des réservations</h3>
                        <p>Consultez toutes vos réservations passées et à venir</p>
                      </div>
                    </div>
                  </div>

                  <div className="reservations-list">
                    {reservations.map((reservation) => (
                      <div key={reservation.id} className="reservation-card">
                        <div className="reservation-header">
                          <h4>{reservation.room}</h4>
                          <span className={`status ${getStatusColor(reservation.status)}`}>
                            {reservation.status}
                          </span>
                        </div>
                        <div className="reservation-id">
                          Réservation {reservation.id}
                        </div>
                        <div className="reservation-details">
                          <div className="detail-group">
                            <span className="label">Arrivée:</span>
                            <span className="value">{reservation.arrival}</span>
                          </div>
                          <div className="detail-group">
                            <span className="label">Départ:</span>
                            <span className="value">{reservation.departure}</span>
                          </div>
                          <div className="detail-group">
                            <span className="label">Durée:</span>
                            <span className="value">{reservation.nights} nuits</span>
                          </div>
                          <div className="detail-group">
                            <span className="label">Total:</span>
                            <span className="value total">{reservation.total}</span>
                          </div>
                        </div>
                        <div className="reservation-actions">
                          {reservation.status === 'Confirmée' && (
                            <>
                              <button className="action-btn primary">Modifier</button>
                              <button className="action-btn secondary">Annuler</button>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Profile Tab */}
              {activeSection === 'profile' && (
                <div className="tab-content">
                  <div className="section-header">
                    <div className="header-content">
                      <Users size={20} />
                      <div>
                        <h3>Informations personnelles</h3>
                        <p>Modifiez vos informations de profil</p>
                      </div>
                    </div>
                    {!isEditing && (
                      <button className="edit-button" onClick={handleEdit}>
                        <Edit2 size={16} />
                        Modifier
                      </button>
                    )}
                  </div>

                  <div className="profile-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label>Prénom</label>
                        {isEditing ? (
                          <input 
                            type="text"
                            value={editedInfo.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                          />
                        ) : (
                          <div className="form-value">{userInfo.firstName}</div>
                        )}
                      </div>
                      <div className="form-group">
                        <label>Nom</label>
                        {isEditing ? (
                          <input 
                            type="text"
                            value={editedInfo.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                          />
                        ) : (
                          <div className="form-value">{userInfo.lastName}</div>
                        )}
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Email</label>
                      {isEditing ? (
                        <input 
                          type="email"
                          value={editedInfo.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                        />
                      ) : (
                        <div className="form-value">{userInfo.email}</div>
                      )}
                    </div>

                    <div className="form-group">
                      <label>Téléphone</label>
                      {isEditing ? (
                        <input 
                          type="tel"
                          value={editedInfo.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                      ) : (
                        <div className="form-value">{userInfo.phone}</div>
                      )}
                    </div>

                    <div className="form-group">
                      <label>Adresse</label>
                      {isEditing ? (
                        <input 
                          type="text"
                          value={editedInfo.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                        />
                      ) : (
                        <div className="form-value">{userInfo.address}</div>
                      )}
                    </div>

                    {isEditing && (
                      <div className="form-actions">
                        <button className="save-button" onClick={handleSave}>
                          <Save size={16} />
                          Sauvegarder les modifications
                        </button>
                        <button className="cancel-button" onClick={handleCancel}>
                          <X size={16} />
                          Annuler
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        .account-page {
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

        /* Account Container */
        .account-container {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 2rem;
          align-items: start;
        }

        /* Profile Section */
        .profile-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .profile-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid #e5e7eb;
          text-align: center;
        }

        .profile-avatar {
          margin-bottom: 1rem;
        }

        .profile-avatar img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #0891b2;
        }

        .profile-info h2 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          text-align: left;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #6b7280;
        }

        .contact-item svg {
          color: #0891b2;
        }

        /* Loyalty Card */
        .loyalty-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid #e5e7eb;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          color: #0891b2;
        }

        .card-header h3 {
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
        }

        .points-info {
          margin-bottom: 1rem;
        }

        .current-points {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 1rem;
        }

        .points-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0891b2;
        }

        .points-label {
          font-size: 0.75rem;
          color: #6b7280;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: #f3f4f6;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #0891b2, #06b6d4);
          transition: width 0.3s ease;
        }

        .next-level {
          font-size: 0.75rem;
          color: #6b7280;
          text-align: center;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-label {
          font-size: 0.75rem;
          color: #6b7280;
          margin-bottom: 0.25rem;
        }

        .stat-value {
          font-size: 0.875rem;
          font-weight: 600;
          color: #1f2937;
        }

        /* Content Section */
        .content-section {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid #e5e7eb;
        }

        .tab-navigation {
          display: flex;
          border-bottom: 1px solid #e5e7eb;
          background: #f8fafc;
        }

        .tab-button {
          flex: 1;
          padding: 1rem;
          border: none;
          background: transparent;
          font-weight: 500;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tab-button.active {
          background: #cffafe;
          color: #0e7490;
          border-bottom: 2px solid #0891b2;
        }

        .tab-button:hover:not(.active) {
          background: #f1f5f9;
        }

        .tab-content {
          padding: 1.5rem;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .header-content {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .header-content svg {
          color: #0891b2;
        }

        .header-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }

        .header-content p {
          color: #6b7280;
          font-size: 0.875rem;
          margin: 0;
        }

        .edit-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: #0891b2;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .edit-button:hover {
          background: #0e7490;
        }

        /* Reservations List */
        .reservations-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .reservation-card {
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: all 0.2s ease;
        }

        .reservation-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .reservation-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .reservation-header h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }

        .status {
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .status-confirmed {
          background: #d1fae5;
          color: #065f46;
        }

        .status-completed {
          background: #f3f4f6;
          color: #374151;
        }

        .reservation-id {
          font-size: 0.875rem;
          color: #0891b2;
          margin-bottom: 1rem;
        }

        .reservation-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .detail-group {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .detail-group .label {
          font-size: 0.75rem;
          color: #6b7280;
        }

        .detail-group .value {
          font-size: 0.875rem;
          font-weight: 500;
          color: #1f2937;
        }

        .detail-group .total {
          color: #0891b2;
          font-weight: 600;
        }

        .reservation-actions {
          display: flex;
          gap: 0.5rem;
        }

        .action-btn {
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .action-btn.primary {
          background: #0891b2;
          color: white;
        }

        .action-btn.primary:hover {
          background: #0e7490;
        }

        .action-btn.secondary {
          background: #f3f4f6;
          color: #6b7280;
        }

        .action-btn.secondary:hover {
          background: #e5e7eb;
        }

        /* Profile Form */
        .profile-form {
          max-width: 600px;
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

        .form-group input {
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          transition: all 0.2s ease;
        }

        .form-group input:focus {
          border-color: #0891b2;
          outline: none;
          box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);
        }

        .form-value {
          padding: 0.75rem;
          background: #f8fafc;
          border-radius: 0.5rem;
          color: #1f2937;
          font-size: 0.875rem;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .save-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: #0891b2;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .save-button:hover {
          background: #0e7490;
        }

        .cancel-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: #f3f4f6;
          color: #6b7280;
          border: none;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cancel-button:hover {
          background: #e5e7eb;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .page-header h1 {
            font-size: 2rem;
          }

          .account-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .profile-section {
            order: 2;
          }

          .content-section {
            order: 1;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .reservation-details {
            grid-template-columns: 1fr 1fr;
          }

          .form-actions {
            flex-direction: column;
          }

          .tab-content {
            padding: 1rem;
          }

          .profile-card,
          .loyalty-card {
            padding: 1rem;
          }
        }

        @media (max-width: 576px) {
          .reservation-details {
            grid-template-columns: 1fr;
          }

          .reservation-actions {
            flex-direction: column;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Compte;