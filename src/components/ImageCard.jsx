import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ImageCard({ item, className = '', large = false }) {
  return (
    <Link to={item.to || '/scenes'} className={`image-card ${large ? 'image-card-large' : ''} ${className}`}>
      <img src={item.image} alt={item.title} loading="lazy" />
      <div className="image-card-copy">
        <span>{item.label || 'Yunjiang Lounge'}</span>
        <h3>{item.title}</h3>
        <p>{item.copy || item.subtitle}</p>
      </div>
      <div className="image-card-arrow">
        <ArrowUpRight size={18} />
      </div>
    </Link>
  );
}
