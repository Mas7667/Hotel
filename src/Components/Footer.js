import React from 'react';
import { Waves, MapPin, Phone, Mail } from 'lucide-react';

const Footer = ({ 
  hotelName = "Vue Sur Mer",
  description = "Votre hôtel de luxe face à la Méditerranée. Une expérience inoubliable vous attend.",
  contact = {
    address: "123 Boulevard de la Mer, 06000 Nice",
    phone: "+33 4 93 00 00 00",
    email: "contact@vuesurmer.fr"
  },
  links = [
    { label: "Nos Chambres", href: "/chambres" },
    { label: "Réserver", href: "/reservation" },
    { label: "Mon Compte", href: "/profil" }
  ],
  onLinkClick
}) => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row g-4">
            {/* Section Hôtel */}
            <div className="col-lg-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <Waves size={32} className="text-cyan" />
                <h3 className="h4 mb-0 text-white">{hotelName}</h3>
              </div>
              <p className="footer-description">
                {description}
              </p>
            </div>

            {/* Section Contact */}
            <div className="col-lg-4">
              <h4 className="footer-title">Contact</h4>
              <div className="footer-contacts">
                <div className="footer-contact">
                  <MapPin size={16} />
                  <span>{contact.address}</span>
                </div>
                <div className="footer-contact">
                  <Phone size={16} />
                  <span>{contact.phone}</span>
                </div>
                <div className="footer-contact">
                  <Mail size={16} />
                  <span>{contact.email}</span>
                </div>
              </div>
            </div>

            {/* Section Liens Rapides */}
            <div className="col-lg-4">
              <h4 className="footer-title">Liens Rapides</h4>
              <div className="footer-links">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={(e) => {
                      if (onLinkClick) {
                        e.preventDefault();
                        onLinkClick(link.href, link.label);
                      }
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-bottom">
            <p>&copy; 2025 {hotelName}. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;