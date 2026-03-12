// src/components/Stats.jsx
import { FaHome, FaChartLine, FaCheckCircle, FaBuilding } from 'react-icons/fa';
import { stats } from '../data/properties';
import './Stats.css';

const items = [
  { icon: <FaHome />, value: stats.totalArea, label: 'Total Land Area', color: '#2563eb' },
  // { icon: <FaChartLine />, value: `${stats.availablePlots}+`, label: 'Available Plots', color: '#16a34a' },
  // { icon: <FaCheckCircle />, value: `${stats.soldPlots}+`, label: 'Plots Sold', color: '#c9a84c' },
  { icon: <FaBuilding />, value: stats.ongoingProjects, label: 'Ongoing Projects', color: '#0ea5e9' },
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-section__bg" />
      <div className="container stats-section__inner">
        <div className="stats-section__text">
          <p className="section-label" style={{ color: 'var(--gold-light)' }}>Project Statistics</p>
          <h2 className="section-title" style={{ color: 'white' }}>Numbers That<br />Speak For Us</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Over the years, Latif Landmark Ltd. has grown into a trusted real estate brand serving clients across Bangladesh with quality and transparency.
          </p>
        </div>
        <div className="stats-section__grid">
          {items.map((item, i) => (
            <div className="stats-card" key={i}>
              <div className="stats-card__icon" style={{ color: item.color }}>
                {item.icon}
              </div>
              <span className="stats-card__value">{item.value}</span>
              <span className="stats-card__label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
