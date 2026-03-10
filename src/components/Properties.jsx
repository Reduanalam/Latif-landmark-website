// src/components/Properties.jsx
import { useState } from 'react';
import PropertyCard from './PropertyCard';
import PropertyModal from './PropertyModal';
import { properties } from '../data/properties';
import './Properties.css';

const filters = ['All', 'Available', 'Sold'];

export default function Properties() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'All'
    ? properties
    : properties.filter(p => p.status === filter);

  return (
    <section className="section properties" id="properties">
      <div className="container">
        <div className="properties__header">
          <div>
            <p className="section-label">Our Listings</p>
            <h2 className="section-title">Available Properties</h2>
            <p className="section-subtitle">
              Explore our hand-picked selection of residential plots, commercial land, and flats across prime locations in Bangladesh.
            </p>
          </div>
          <div className="properties__filters">
            {filters.map(f => (
              <button
                key={f}
                className={`properties__filter-btn ${filter === f ? 'properties__filter-btn--active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
                <span className="properties__filter-count">
                  {f === 'All' ? properties.length : properties.filter(p => p.status === f).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="properties__grid">
          {filtered.map(p => (
            <PropertyCard key={p.id} property={p} onClick={setSelected} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="properties__empty">No properties found.</p>
        )}
      </div>

      {selected && <PropertyModal property={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
