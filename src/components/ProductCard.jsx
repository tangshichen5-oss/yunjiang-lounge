import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import VisualPlaceholder from './VisualPlaceholder.jsx';

export default function ProductCard({ product }) {
  return (
    <Link to="/coming-soon" className={`product-card-v2 product-${product.tone}`}>
      <div className="product-glow" />
      <VisualPlaceholder type="bottle" label={product.title} className="product-image" />
      <div className="product-body">
        <p>{product.subtitle}</p>
        <h3>{product.title}</h3>
        <span>{product.copy}</span>
        <small>{product.scene}</small>
      </div>
      <div className="card-link">
        了解详情
        <ArrowUpRight size={16} />
      </div>
    </Link>
  );
}
