import React, { useState } from 'react';
import { Waves, Filter, Users, Expand, Eye, Wifi, Wind, Coffee, Plus, ChevronDown } from 'lucide-react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Chambres = () => {
  const [activeTab, setActiveTab] = useState('chambres');
  const [filters, setFilters] = useState({
    type: 'tous',
    capacity: '',
    maxPrice: '',
    view: 'tous'
  });

  const rooms = [
    {
      id: 1,
      type: 'Standard',
      name: 'Chambre Standard Vue Mer',
      description: 'Chambre confortable avec vue directe sur la mer méditerranée',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'Disponible',
      capacity: 2,
      size: '25m²',
      view: 'Mer',
      price: 120,
      amenities: ['Wifi', 'Climatisation', 'Balcon', 'Minibar']
    },
    {
      id: 2,
      type: 'Suite',
      name: 'Suite Deluxe Panoramique',
      description: 'Suite luxueuse avec vue panoramique et équipements haut de gamme',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'Disponible',
      capacity: 4,
      size: '45m²',
      view: 'Mer',
      price: 280,
      amenities: ['Wifi', 'Climatisation', 'Balcon', 'Minibar', '+2']
    },
    {
      id: 3,
      type: 'Familiale',
      name: 'Chambre Familiale',
      description: 'Chambre spacieuse idéale pour les familles avec enfants',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'Occupée',
      capacity: 6,
      size: '35m²',
      view: 'Jardin',
      price: 180,
      amenities: ['Wifi', 'Climatisation', 'Lits superposés', 'Minibar']
    },
    {
      id: 4,
      type: 'Premium',
      name: 'Chambre Premium Vue Mer',
      description: 'Chambre premium avec vue mer et équipements de luxe',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      status: 'Disponible',
      capacity: 2,
      size: '30m²',
      view: 'Mer',
      price: 220,
      amenities: ['Wifi', 'Climatisation', 'Balcon', 'Minibar', '+1']
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'Disponible':
        return 'status-available';
      case 'Occupée':
        return 'status-occupied';
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
      case 'Premium':
        return 'type-premium';
      default:
        return 'type-standard';
    }
  };

  return (
    <div className="rooms-page">
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
            <h1>Nos Chambres</h1>
            <p className="page-description">
              Découvrez nos chambres et suites avec vue sur mer, conçues pour votre{' '}
              <span className="highlight">confort et votre détente</span>
            </p>
          </div>

          {/* Filters */}
          <div className="filters-section">
            <div className="filters-header">
              <Filter size={20} />
              <span>Filtrer les chambres</span>
            </div>
            
            <div className="filters-grid">
              <div className="filter-group">
                <label>Type de chambre</label>
                <div className="select-wrapper">
                  <select 
                    value={filters.type}
                    onChange={(e) => handleFilterChange('type', e.target.value)}
                  >
                    <option value="tous">Tous types</option>
                    <option value="standard">Standard</option>
                    <option value="suite">Suite</option>
                    <option value="familiale">Familiale</option>
                    <option value="premium">Premium</option>
                  </select>
                  <ChevronDown className="select-icon" size={16} />
                </div>
              </div>

              <div className="filter-group">
                <label>Capacité</label>
                <div className="select-wrapper">
                  <select 
                    value={filters.capacity}
                    onChange={(e) => handleFilterChange('capacity', e.target.value)}
                  >
                    <option value="">Nombre de personnes</option>
                    <option value="2">2 personnes</option>
                    <option value="4">4 personnes</option>
                    <option value="6">6 personnes</option>
                  </select>
                  <ChevronDown className="select-icon" size={16} />
                </div>
              </div>

              <div className="filter-group">
                <label>Prix maximum</label>
                <input 
                  type="text" 
                  placeholder="€ par nuit"
                  value={filters.maxPrice}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                />
              </div>

              <div className="filter-group">
                <label>Vue</label>
                <div className="select-wrapper">
                  <select 
                    value={filters.view}
                    onChange={(e) => handleFilterChange('view', e.target.value)}
                  >
                    <option value="tous">Type de vue</option>
                    <option value="mer">Vue mer</option>
                    <option value="jardin">Vue jardin</option>
                  </select>
                  <ChevronDown className="select-icon" size={16} />
                </div>
              </div>
            </div>
          </div>

          {/* Rooms Grid */}
          <div className="rooms-grid">
            {rooms.map((room) => (
              <div key={room.id} className="room-card">
                <div className="room-image">
                  <img src={room.image} alt={room.name} />
                  <div className="room-badges">
                    <span className={`room-type ${getTypeColor(room.type)}`}>
                      {room.type}
                    </span>
                    <span className={`room-status ${getStatusColor(room.status)}`}>
                      {room.status}
                    </span>
                  </div>
                </div>

                <div className="room-content">
                  <h3 className="room-title">{room.name}</h3>
                  <p className="room-description">{room.description}</p>

                  <div className="room-specs">
                    <div className="spec-item">
                      <Users size={16} />
                      <span>{room.capacity} pers.</span>
                    </div>
                    <div className="spec-item">
                      <Expand size={16} />
                      <span>{room.size}</span>
                    </div>
                    <div className="spec-item">
                      <Eye size={16} />
                      <span>{room.view}</span>
                    </div>
                  </div>

                  <div className="room-amenities">
                    {room.amenities.slice(0, 3).map((amenity, index) => (
                      <span key={index} className="amenity">
                        {amenity === 'Wifi' && <Wifi size={12} />}
                        {amenity === 'Climatisation' && <Wind size={12} />}
                        {amenity === 'Minibar' && <Coffee size={12} />}
                        {!['Wifi', 'Climatisation', 'Minibar'].includes(amenity) && amenity}
                      </span>
                    ))}
                    {room.amenities.length > 3 && (
                      <span className="amenity extra">
                        <Plus size={12} />
                        {room.amenities.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="room-footer">
                    <div className="room-price">
                      <span className="price">{room.price}€</span>
                      <span className="price-unit">/nuit</span>
                    </div>
                    <button 
                      className={`btn ${room.status === 'Disponible' ? 'btn-primary' : 'btn-disabled'}`}
                      disabled={room.status !== 'Disponible'}
                    >
                      {room.status === 'Disponible' ? 'Réserver' : 'Indisponible'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        .rooms-page {
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

        .highlight {
          background: #3b82f6;
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 0.375rem;
          font-weight: 500;
        }

        /* Filters */
        .filters-section {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          border: 1px solid #e5e7eb;
        }

        .filters-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          font-weight: 600;
          color: #374151;
        }

        .filters-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
        }

        .filter-group label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.5rem;
        }

        .select-wrapper {
          position: relative;
        }

        .select-wrapper select,
        .filter-group input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          background: white;
          appearance: none;
        }

        .select-wrapper select:focus,
        .filter-group input:focus {
          border-color: #0891b2;
          outline: none;
          box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);
        }

        .select-icon {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: #6b7280;
        }

        /* Rooms Grid */
        .rooms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .room-card {
          background: white;
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .room-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
        }

        .room-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .room-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .room-card:hover .room-image img {
          transform: scale(1.05);
        }

        .room-badges {
          position: absolute;
          top: 1rem;
          left: 1rem;
          right: 1rem;
          display: flex;
          justify-content: space-between;
        }

        .room-type {
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .type-standard {
          background: #0891b2;
          color: white;
        }

        .type-suite {
          background: #3b82f6;
          color: white;
        }

        .type-family {
          background: #f59e0b;
          color: white;
        }

        .type-premium {
          background: #10b981;
          color: white;
        }

        .room-status {
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
          background: #ef4444;
          color: white;
        }

        .room-content {
          padding: 1.5rem;
        }

        .room-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .room-description {
          color: #6b7280;
          font-size: 0.875rem;
          margin-bottom: 1rem;
          line-height: 1.5;
        }

        .room-specs {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .spec-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          color: #6b7280;
        }

        .room-amenities {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .amenity {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.25rem 0.75rem;
          background: #f3f4f6;
          border-radius: 50px;
          font-size: 0.75rem;
          color: #374151;
        }

        .amenity.extra {
          background: #0891b2;
          color: white;
        }

        .room-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .room-price {
          display: flex;
          align-items: baseline;
          gap: 0.25rem;
        }

        .price {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0891b2;
        }

        .price-unit {
          font-size: 0.875rem;
          color: #6b7280;
        }

        .btn {
          padding: 0.5rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 0.875rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-primary {
          background: #0891b2;
          color: white;
        }

        .btn-primary:hover {
          background: #0e7490;
        }

        .btn-disabled {
          background: #9ca3af;
          color: white;
          cursor: not-allowed;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .page-header h1 {
            font-size: 2rem;
          }

          .filters-grid {
            grid-template-columns: 1fr;
          }

          .rooms-grid {
            grid-template-columns: 1fr;
          }

          .room-specs {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
};

export default Chambres;