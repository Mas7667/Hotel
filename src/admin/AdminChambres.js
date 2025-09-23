import React, { useState } from 'react';
import { 
  Plus, 
  Eye, 
  Edit, 
  Trash2, 
  MapPin, 
  Users, 
  Expand,
  Home,
  Bed,
  Calendar,
  TrendingUp
} from 'lucide-react';
import Header from '../Components/Header';

const AdminRoomsPage = () => {
  const [activeTab, setActiveTab] = useState('chambres');

  const roomStats = {
    total: 24,
    available: 18,
    occupied: 5,
    maintenance: 1
  };

  const rooms = [
    {
      number: '101',
      name: 'Chambre Standard Vue Mer',
      type: 'Standard',
      price: '120€',
      capacity: 2,
      view: 'Mer',
      status: 'Disponible'
    },
    {
      number: '201',
      name: 'Suite Deluxe Panoramique',
      type: 'Suite',
      price: '280€',
      capacity: 4,
      view: 'Mer',
      status: 'Occupée'
    },
    {
      number: '102',
      name: 'Chambre Familiale',
      type: 'Familiale',
      price: '180€',
      capacity: 6,
      view: 'Jardin',
      status: 'Maintenance'
    }
  ];

  const handleBackClick = () => {
    console.log('Retour cliqué');
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Disponible':
        return 'status-available';
      case 'Occupée':
        return 'status-occupied';
      case 'Maintenance':
        return 'status-maintenance';
      default:
        return 'status-available';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Standard':
        return 'type-standard';
      case 'Suite':
        return 'type-suite';
      case 'Familiale':
        return 'type-family';
      default:
        return 'type-standard';
    }
  };

  return (
    <div className="admin-rooms-page">
      {/* Header */}
      <Header
        className="admin-header"
        showBackButton={true}
        activeTab={activeTab}
        onBackClick={handleBackClick}
        onTabClick={handleTabClick}
        tabs={[
          { id: 'dashboard', label: 'Tableau de bord', to: '/admin' },
          { id: 'rooms', label: 'Chambres', to: '/admin/chambres' },
          { id: 'clients', label: 'Clients', to: '/admin/clients' },
          { id: 'reservations', label: 'Réservations', to: '/admin/reservations' }
        ]}
      />
      {/* Main Content */}
      <main className="main-content">
        <div className="container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div>
              <h2>Gestion des Chambres</h2>
              <p>Gérez le catalogue des chambres et leurs équipements</p>
            </div>
            <div>
              <button className="btn btn-primary">
              <Plus size={16} />
              Nouvelle Chambre
            </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-content">
                <h3>Total Chambres</h3>
                <div className="stat-value">{roomStats.total}</div>
              </div>
              <div className="stat-icon total">
                <MapPin size={24} />
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-content">
                <h3>Disponibles</h3>
                <div className="stat-value available">{roomStats.available}</div>
              </div>
              <div className="stat-icon available">
                <div className="status-dot available"></div>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-content">
                <h3>Occupées</h3>
                <div className="stat-value occupied">{roomStats.occupied}</div>
              </div>
              <div className="stat-icon occupied">
                <div className="status-dot occupied"></div>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-content">
                <h3>Maintenance</h3>
                <div className="stat-value maintenance">{roomStats.maintenance}</div>
              </div>
              <div className="stat-icon maintenance">
                <div className="status-dot maintenance"></div>
              </div>
            </div>
          </div>

          {/* Rooms Table */}
          <div className="table-section">
            <div className="section-header">
              <h3>Liste des Chambres </h3>
            </div>

            <div className="table-container">
              <table className="rooms-table">
                <thead>
                  <tr>
                    <th>N°</th>
                    <th>Nom</th>
                    <th>Type</th>
                    <th>Prix</th>
                    <th>Capacité</th>
                    <th>Vue</th>
                    <th>Statut</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((room) => (
                    <tr key={room.number}>
                      <td className="room-number">{room.number}</td>
                      <td className="room-name">{room.name}</td>
                      <td>
                        <span className={`type-badge ${getTypeColor(room.type)}`}>
                          {room.type}
                        </span>
                      </td>
                      <td className="price">{room.price}</td>
                      <td>
                        <Users size={14} className="m-2" />
                        {room.capacity}
                      </td>
                      <td>
                        <Eye size={14}  className="m-2" />
                        {room.view}
                      </td>
                      <td>
                        <span className={`status ${getStatusColor(room.status)}`}>
                          {room.status}
                        </span>
                      </td>
                      <td className="actions">
                        <button className="action-btn view" title="Voir">
                          <Eye size={16} />
                        </button>
                        <button className="action-btn edit" title="Modifier">
                          <Edit size={16} />
                        </button>
                        <button className="action-btn delete" title="Supprimer">
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .admin-rooms-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #1e3a8a, #3730a3, #1e40af);
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }

        /* Header */
        .admin-header {
          background: rgba(30, 58, 138, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .admin-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin: 0;
        }

        .btn {
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: all 0.2s ease;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
        }

        .btn-nav {
          background: transparent;
          color: rgba(255, 255, 255, 0.8);
        }

        .btn-nav:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .btn-active {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .btn-primary {
          background: #3b82f6;
          color: white;
          font-weight: 600;
        }

        .btn-primary:hover {
          background: #2563eb;
        }

        /* Main Content */
        .main-content {
          padding: 2rem 0;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .page-header h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .page-header p {
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1rem;
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.15);
        }

        .stat-content h3 {
          font-size: 0.875rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 0.5rem 0;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: white;
        }

        .stat-value.available {
          color: #10b981;
        }

        .stat-value.occupied {
          color: #f59e0b;
        }

        .stat-value.maintenance {
          color: #ef4444;
        }

        .stat-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-icon.total {
          background: rgba(59, 130, 246, 0.2);
          color: #60a5fa;
        }

        .status-dot {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
        }

        .status-dot.available {
          background: #10b981;
        }

        .status-dot.occupied {
          background: #f59e0b;
        }

        .status-dot.maintenance {
          background: #ef4444;
        }

        /* Table Section */
        .table-section {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1rem;
          padding: 1rem;
          width: 100%;
          margin: 0 auto;
        }

        .section-header {
          margin-bottom: 1.5rem;
        }

        .section-header h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .section-header p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.875rem;
          margin: 0;
        }

        .table-container {
          width: 100%;
          overflow-x: auto;
        }

        .rooms-table {
          width: 100%;
          table-layout: fixed;
        }

        .rooms-table th {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem;
          text-align: left;
          font-weight: 600;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.9);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          min-width: 120px;
        }

        .rooms-table td {
          padding: 0.5rem 0.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.875rem;
          min-width: 120px;
        }

        .room-number {
          font-weight: 600;
          color: #60a5fa;
        }

        .room-name {
          font-weight: 500;
        }

        .type-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .type-standard {
          background: #3b82f6;
          color: white;
        }

        .type-suite {
          background: #8b5cf6;
          color: white;
        }

        .type-family {
          background: #f59e0b;
          color: white;
        }

        .price {
          font-weight: 600;
          color: #10b981;
        }

        

        .status {
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .status-available {
          background: #10b981;
          color: white;
        }

        .status-occupied {
          background: #f59e0b;
          color: white;
        }

        .status-maintenance {
          background: #ef4444;
          color: white;
        }

        .actions {
          display: flex;
          gap: 0.5rem;
        }

        .action-btn {
          width: 2rem;
          height: 2rem;
          border: none;
          border-radius: 0.375rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .action-btn.view {
          background: rgba(59, 130, 246, 0.2);
          color: #60a5fa;
        }

        .action-btn.view:hover {
          background: rgba(59, 130, 246, 0.3);
        }

        .action-btn.edit {
          background: rgba(16, 185, 129, 0.2);
          color: #34d399;
        }

        .action-btn.edit:hover {
          background: rgba(16, 185, 129, 0.3);
        }

        .action-btn.delete {
          background: rgba(239, 68, 68, 0.2);
          color: #f87171;
        }

        .action-btn.delete:hover {
          background: rgba(239, 68, 68, 0.3);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .rooms-table {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminRoomsPage;