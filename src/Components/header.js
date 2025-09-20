import React from 'react';
import { Waves, ArrowLeft } from 'lucide-react';

const Header = ({ 
  showBackButton = true, 
  activeTab = 'accueil', 
  onBackClick,
  onTabClick 
}) => {
  const tabs = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'chambres', label: 'Nos Chambres' },
    { id: 'reserver', label: 'Réserver' },
    { id: 'compte', label: 'Mon Compte' }
  ];

  return (
    <>
      <header className="header-sticky bg-white shadow-sm">
        <div className="container-fluid">
          <div className="row align-items-center py-3">
            <div className="col-md-6">
              <div className="d-flex align-items-center gap-3">
                {showBackButton && (
                  <button 
                    className="btn btn-ghost"
                    onClick={onBackClick}
                  >
                    <ArrowLeft size={16} className="me-2" />
                    Retour
                  </button>
                )}
                <div className="d-flex align-items-center gap-2">
                  <Waves size={32} className="text-cyan" />
                  <h1 className="h4 mb-0 text-cyan-dark">Vue Sur Mer</h1>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <nav className="d-flex justify-content-end gap-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`btn ${activeTab === tab.id ? 'btn-active' : 'btn-nav'}`}
                    onClick={() => onTabClick && onTabClick(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;