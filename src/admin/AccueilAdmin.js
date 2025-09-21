import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Home, 
  Bed, 
  Users, 
  Calendar, 
  Euro,
  TrendingUp,
  Building,
  Filter,
  Search,
  Plus,
  Eye,
  Edit,
  Trash2,
  ChevronDown
} from 'lucide-react';

import './AccueilAdmin.css';
import Header from '../Components/Header.js';
import Footer from '../Components/Footer.js';



const AccueilAdmin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [filters, setFilters] = useState({
    roomType: 'tous',
    date: '',
    price: 'tous',
    floor: 'tous'
  });

  // Données d'exemple
  const dashboardStats = {
    reservations: {
      value: 14,
      change: '+2 depuis hier',
      positive: true
    },
    occupancy: {
      value: '43%',
      change: '+5% cette semaine',
      positive: true
    },
    revenue: {
      value: '17 390€',
      change: '+12% ce mois',
      positive: true
    }
  };

  const recentReservations = [
    {
      id: 1,
      client: 'Marie Dubois',
      email: 'marie.dubois@email.com',
      room: 'Suite Vue Mer - 301',
      floor: '3ème étage',
      dates: '15/09 - 18/09',
      nights: 3,
      price: '450€',
      status: 'Confirmée'
    },
    {
      id: 2,
      client: 'Jean Martin',
      email: 'jean.martin@email.com',
      room: 'Chambre Standard - 205',
      floor: '2ème étage',
      dates: '20/09 - 22/09',
      nights: 2,
      price: '180€',
      status: 'En attente'
    }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleBackClick = () => {
    console.log('Retour cliqué');
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const StatCard = ({ icon: Icon, title, value, change, positive }) => (
    <div className="stat-card">
      <div className="stat-icon">
        <Icon size={24} />
      </div>
      <div className="stat-content">
        <h3 className="stat-title">{title}</h3>
        <div className="stat-value">{value}</div>
        <div className={`stat-change ${positive ? 'positive' : 'negative'}`}>
          {change}
        </div>
      </div>
    </div>
  );

  return (
    <div className="admin-dashboard">
      {/* Header Admin */}
      {/* <header className="admin-header">
        <div className="container-fluid">
          <div className="row align-items-center py-3">
            <div className="col-md-4">
              <div className="d-flex align-items-center gap-3">
                <button className="btn btn-ghost" onClick={handleBackClick}>
                  <ArrowLeft size={16} className="me-2" />
                  Retour
                </button>
                <div>
                  <h1 className="admin-title">Vue Sur Mer</h1>
                  <p className="admin-subtitle">Administration Hôtelière</p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <nav className="d-flex justify-content-end gap-2">
                <button 
                  className={`btn ${activeTab === 'dashboard' ? 'btn-active' : 'btn-nav'}`}
                  onClick={() => handleTabClick('dashboard')}
                >
                  <Home size={16} className="me-1" />
                  Tableau de bord
                </button>
                <button 
                  className={`btn ${activeTab === 'rooms' ? 'btn-active' : 'btn-nav'}`}
                  onClick={() => handleTabClick('rooms')}
                >
                  <Bed size={16} className="me-1" />
                  Chambres
                </button>
                <button 
                  className={`btn ${activeTab === 'clients' ? 'btn-active' : 'btn-nav'}`}
                  onClick={() => handleTabClick('clients')}
                >
                  <Users size={16} className="me-1" />
                  Clients
                </button>
                <button 
                  className={`btn ${activeTab === 'reservations' ? 'btn-active' : 'btn-nav'}`}
                  onClick={() => handleTabClick('reservations')}
                >
                  <Calendar size={16} className="me-1" />
                  Réservations
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header> */}
      <Header
        className="admin-header"
        showBackButton={true}
        activeTab={activeTab}
        onBackClick={handleBackClick}
        onTabClick={handleTabClick}
        tabs={[
          { id: 'dashboard', label: 'Tableau de bord' },
          { id: 'rooms', label: 'Chambres' },
          { id: 'clients', label: 'Clients' },
          { id: 'reservations', label: 'Réservations' }
        ]}
      />

      {/* Main Content */}
      <main className="admin-main">
        <div className="container-fluid">
          {/* Page Title */}
          <div className="page-header mb-4">
            <h2 className="page-title">Tableau de Bord</h2>
            <p className="page-subtitle">Vue d'ensemble de votre hôtel</p>
          </div>

          {/* Stats Cards */}
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <StatCard 
                icon={Calendar}
                title="Réservations du jour"
                value={dashboardStats.reservations.value}
                change={dashboardStats.reservations.change}
                positive={dashboardStats.reservations.positive}
              />
            </div>
            <div className="col-md-4">
              <StatCard 
                icon={Building}
                title="Taux d'occupation"
                value={dashboardStats.occupancy.value}
                change={dashboardStats.occupancy.change}
                positive={dashboardStats.occupancy.positive}
              />
            </div>
            <div className="col-md-4">
              <StatCard 
                icon={Euro}
                title="Revenus"
                value={dashboardStats.revenue.value}
                change={dashboardStats.revenue.change}
                positive={dashboardStats.revenue.positive}
              />
            </div>
          </div>

          {/* Filters Section */}
          <div className="filters-section mb-4">
            <div className="filters-header">
              <div className="d-flex align-items-center gap-2 mb-3">
                <Filter size={20} />
                <h4>Filtres</h4>
              </div>
            </div>
            
            <div className="row g-3 align-items-end">
              <div className="col-md-3">
                <label className="form-label">Type de chambre</label>
                <div className="select-wrapper">
                  <select 
                    className="form-select"
                    value={filters.roomType}
                    onChange={(e) => handleFilterChange('roomType', e.target.value)}
                  >
                    <option value="tous">Tous types</option>
                    <option value="standard">Standard</option>
                    <option value="deluxe">Deluxe</option>
                    <option value="suite">Suite</option>
                  </select>
                  <ChevronDown className="select-icon" size={16} />
                </div>
              </div>
              <div className="col-md-3">
                <label className="form-label">Date</label>
                <input 
                  type="date" 
                  className="form-control"
                  value={filters.date}
                  onChange={(e) => handleFilterChange('date', e.target.value)}
                  placeholder="jj/mm/aaaa"
                />
              </div>
              <div className="col-md-2">
                <label className="form-label">Prix</label>
                <div className="select-wrapper">
                  <select 
                    className="form-select"
                    value={filters.price}
                    onChange={(e) => handleFilterChange('price', e.target.value)}
                  >
                    <option value="tous">Tous prix</option>
                    <option value="100-200">100€ - 200€</option>
                    <option value="200-300">200€ - 300€</option>
                    <option value="300+">300€+</option>
                  </select>
                  <ChevronDown className="select-icon" size={16} />
                </div>
              </div>
              <div className="col-md-2">
                <label className="form-label">Étage</label>
                <div className="select-wrapper">
                  <select 
                    className="form-select"
                    value={filters.floor}
                    onChange={(e) => handleFilterChange('floor', e.target.value)}
                  >
                    <option value="tous">Tous étages</option>
                    <option value="1">1er étage</option>
                    <option value="2">2ème étage</option>
                    <option value="3">3ème étage</option>
                  </select>
                  <ChevronDown className="select-icon" size={16} />
                </div>
              </div>
              <div className="col-md-2">
                <div className="d-flex gap-2">
                  <button className="btn btn-primary flex-1">
                    <Search size={16} className="me-1" />
                    Appliquer les filtres
                  </button>
                  <button className="btn btn-outline">
                    Réinitialiser
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Reservations */}
          <div className="reservations-section">
            <div className="section-header">
              <h4>Réservations Récentes</h4>
              <button className="btn btn-primary">
                <Plus size={16} className="me-1" />
                Nouvelle réservation
              </button>
            </div>

            <div className="table-container">
              <table className="reservations-table">
                <thead>
                  <tr>
                    <th>Client</th>
                    <th>Chambre</th>
                    <th>Dates</th>
                    <th>Prix</th>
                    <th>Statut</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentReservations.map((reservation) => (
                    <tr key={reservation.id}>
                      <td>
                        <div className="client-info">
                          <div className="client-name">{reservation.client}</div>
                          <div className="client-email">{reservation.email}</div>
                        </div>
                      </td>
                      <td>
                        <div className="room-info">
                          <div className="room-name">{reservation.room}</div>
                          <div className="room-floor">{reservation.floor}</div>
                        </div>
                      </td>
                      <td>
                        <div className="dates-info">
                          <div className="dates">{reservation.dates}</div>
                          <div className="nights">{reservation.nights} nuits</div>
                        </div>
                      </td>
                      <td className="price">{reservation.price}</td>
                      <td>
                        <span className={`status ${reservation.status === 'Confirmée' ? 'confirmed' : 'pending'}`}>
                          {reservation.status}
                        </span>
                      </td>
                      <td>
                        <div className="actions">
                          <button className="action-btn view" title="Voir">
                            <Eye size={16} />
                          </button>
                          <button className="action-btn edit" title="Modifier">
                            <Edit size={16} />
                          </button>
                          <button className="action-btn delete" title="Supprimer">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <Footer/>
    </div>
  );
}
export default AccueilAdmin;