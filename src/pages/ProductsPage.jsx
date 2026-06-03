import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { imageAssets, products } from '../data.js';
import Revealer from '../components/Revealer.jsx';

export default function ProductsPage() {
  return (
    <main className="products-page">
      <section className="page-hero">
        <img src={imageAssets.premiumGiftBox} alt="商务礼盒酒与企业礼赠方案" />
        <div className="page-hero-overlay" />
        <Revealer className="page-hero-copy">
          <p className="eyebrow">Product System</p>
          <h1>产品体系，不是电商货架。</h1>
          <p>每一类产品都服务于明确的赠送对象、商务场景和关系表达。这里不做爆款、促销和在线下单，只帮助企业更快判断适合哪一种礼酒方案。</p>
        </Revealer>
      </section>

      <section className="product-solution-list">
        {products.map((product, index) => (
          <Revealer className="product-solution" delay={index * 70} key={product.title}>
            <img src={product.image} alt={product.title} loading="lazy" />
            <div>
              <p className="eyebrow">{product.label}</p>
              <h2>{product.title}</h2>
              <p>{product.copy}</p>
              <dl>
                <div>
                  <dt>适合谁</dt>
                  <dd>{product.fit}</dd>
                </div>
                <div>
                  <dt>适合场景</dt>
                  <dd>{product.scene}</dd>
                </div>
                <div>
                  <dt>解决问题</dt>
                  <dd>{product.value}</dd>
                </div>
              </dl>
            </div>
          </Revealer>
        ))}
      </section>

      <section className="page-cta">
        <Revealer>
          <p className="eyebrow">Next Step</p>
          <h2>不知道选哪类产品时，先从场景开始。</h2>
          <p>告诉我们赠送对象、预算区间和使用日期，顾问会帮助你收敛到合适的产品体系。</p>
          <Link className="primary-link" to="/consult">
            预约方案咨询
            <ArrowRight size={18} />
          </Link>
        </Revealer>
      </section>
    </main>
  );
}
