import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link to="/products" className="product-card">
      <div className="product-photo">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>
      <div className="product-copy">
        <span>{product.label}</span>
        <h3>{product.title}</h3>
        <p>{product.copy}</p>
        <small>
          了解方案
          <ArrowRight size={15} />
        </small>
      </div>
    </Link>
  );
}
