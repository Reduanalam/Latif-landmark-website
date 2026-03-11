// src/components/PlotMap.jsx
import { FaExternalLinkAlt, FaMapMarkedAlt } from 'react-icons/fa';
import './PlotMap.css';

export default function PlotMap() {
  return (
    <section className="section plotmap" id="plotmap">
      <div className="container">
        <div className="plotmap__header">
          <p className="section-label">Interactive Map</p>
          <h2 className="section-title">Plot Distribution Map</h2>
          <p className="section-subtitle">
            Explore our interactive plot map to see available and sold plots. Click on any plot to see its details, size, and price.
          </p>
        </div>

        <div className="plotmap__frame-wrap">
          <div className="plotmap__legend">
            <span className="plotmap__legend-item plotmap__legend--available">Available</span>
            <span className="plotmap__legend-item plotmap__legend--sold">Sold</span>
          </div>
          <iframe
          src="https://verdant-lokum-67b489.netlify.app/"
            // src="https://spiffy-monstera-a62e75.netlify.app/"
            title="Latif Landmark Plot Distribution Map"
            className="plotmap__iframe"
            loading="lazy"
          />
          <div className="plotmap__overlay-notice">
            <FaMapMarkedAlt />
            <span>Click plots on the map to view details</span>
          </div>
        </div>

        <div className="plotmap__cta">
          <p>Want to see the full interactive map?</p>
        

          <a href="https://wondrous-biscochitos-d2d2d1.netlify.app/Master%20Plan.pdf" className="btn-primary">
              Open Full Map
          </a>

         <a  href="https://heartfelt-praline-af874b.netlify.app/" className="btn-primary btn-dark">
          View Full Website
        </a>
        </div>
      </div>
    </section>
  );
}
