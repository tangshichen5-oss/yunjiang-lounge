import { ArrowRight, CalendarClock, ClipboardList, QrCode, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {
  businessScenes,
  craftSteps,
  faqs,
  imageAssets,
  loungeSpaces,
  products,
  strengthStats,
} from '../data.js';
import CountUp from '../components/CountUp.jsx';
import HorizontalRail from '../components/HorizontalRail.jsx';
import ImageCard from '../components/ImageCard.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Revealer from '../components/Revealer.jsx';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.state?.hash;
    if (!hash) return;
    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.state]);

  return (
    <main className="home-v3">
      <section id="lounge" className="v3-hero">
        <img src={imageAssets.heroLounge} alt="云酱会客厅高端商务空间" />
        <div className="v3-hero-shade" />
        <Revealer className="v3-hero-copy">
          <p className="eyebrow">Yunjiang Business Lounge</p>
          <h1>
            让每一次商务往来
            <br />
            都值得被记住
          </h1>
          <p>来自贵州酱酒产区的商务礼酒解决方案</p>
          <div className="hero-actions">
            <Link className="primary-link" to="/custom">
              预约品鉴
              <ArrowRight size={18} />
            </Link>
            <a className="soft-link" href="#experience">了解会客厅</a>
          </div>
        </Revealer>
      </section>

      <section className="brand-intro story-section">
        <Revealer className="section-title">
          <span className="ghost-title">BRAND STORY</span>
          <p className="eyebrow">品牌故事</p>
          <h2>从产区资源，到城市商务会客厅</h2>
          <p>
            云酱会客厅不是一个单纯卖酒的页面，而是把贵州酱香酒生产资源、企业礼赠需求和本地商务接待场景连接起来。前端以会客厅建立信任，后端以真实生产资源支撑交付。
          </p>
        </Revealer>
        <div className="intro-grid">
          <Revealer className="intro-photo">
            <img src={imageAssets.distilleryAerial} alt="贵州酱酒产区酒厂航拍" loading="lazy" />
          </Revealer>
          <Revealer className="intro-copy" delay={120}>
            <h3>轻前端验证，重后端支撑</h3>
            <p>
              项目以贵阳样板空间为起点，通过品鉴会、企业邀约、商协会资源和私域运营，逐步验证客户需求、价格带、毛利结构和复购周期。
            </p>
            <Link className="text-link" to="/brand-story">阅读完整品牌故事</Link>
          </Revealer>
        </div>
      </section>

      <HorizontalRail
        id="scenes"
        eyebrow="Business Scenes"
        title="商务场景先于产品"
        copy="企业客户真正关心的，是一次礼赠是否体面、来源是否可解释、交付是否稳定。"
      >
        {businessScenes.map((scene) => (
          <ImageCard item={scene} large key={scene.title} />
        ))}
      </HorizontalRail>

      <section id="strength" className="strength-section">
        <img src={imageAssets.distilleryAerial} alt="酒厂航拍背景" loading="lazy" />
        <div className="strength-overlay" />
        <Revealer className="strength-copy">
          <p className="eyebrow">Production Strength</p>
          <h2>酒厂实力，是商务信任的底座</h2>
          <p>以下数字来自计划书中的生产资源与试点测算口径，用于说明供应链基础，不作为收益承诺。</p>
        </Revealer>
        <div className="strength-stats">
          {strengthStats.map((stat, index) => (
            <Revealer className="stat-tile" delay={index * 80} key={stat.label}>
              <CountUp value={stat.value} suffix={stat.suffix} />
              <span>{stat.label}</span>
              <p>{stat.note}</p>
            </Revealer>
          ))}
        </div>
      </section>

      <section id="craft" className="craft-story">
        <Revealer className="section-title">
          <span className="ghost-title">BREWING STORY</span>
          <p className="eyebrow">酿造故事</p>
          <h2>从一粒高粱，到一瓶商务礼酒</h2>
          <p>产区环境、七道主工序、成酒展示、产品体系与会客厅体验，构成云酱礼酒的完整叙事。</p>
        </Revealer>
        <div className="craft-list">
          <div className="craft-progress-line" />
          {craftSteps.map((step, index) => (
            <article className={`craft-step craft-tone-${step.tone || 'default'}`} key={`${step.kicker}-${step.title}`}>
              <img src={step.image} alt={step.title} loading="lazy" />
              <Revealer className="craft-copy">
                <span>{step.kicker || String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.subtitle}</p>
              </Revealer>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="lounge-section story-section">
        <Revealer className="section-title">
          <span className="ghost-title">LOUNGE EXPERIENCE</span>
          <p className="eyebrow">会客厅体验</p>
          <h2>网站核心不是酒瓶，而是商务会客空间</h2>
          <p>会客厅承担品牌展示、品鉴接待、企业定制、客户洽谈和团购转化功能，是项目的第一信任入口。</p>
        </Revealer>
        <div className="lounge-grid">
          {loungeSpaces.map((space, index) => (
            <Revealer className={index === 0 ? 'lounge-card lounge-card-wide' : 'lounge-card'} delay={index * 80} key={space.title}>
              <Link to="/coming-soon">
                <img src={space.image} alt={space.title} loading="lazy" />
                <div>
                  <h3>{space.title}</h3>
                  <p>{space.copy}</p>
                </div>
              </Link>
            </Revealer>
          ))}
        </div>
      </section>

      <HorizontalRail
        id="products"
        eyebrow="Product System"
        title="产品体系，为商务场景服务"
        copy="产品不以电商货架呈现，而作为企业礼赠、定制、品鉴和纪念场景中的解决方案。"
      >
        {products.map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </HorizontalRail>

      <section id="digital" className="digital-section story-section">
        <Revealer className="section-title">
          <span className="ghost-title">DIGITAL SERVICE</span>
          <p className="eyebrow">数字化客户服务</p>
          <h2>让线下服务更清晰，而不是喧宾夺主</h2>
        </Revealer>
        <div className="liquid-panel">
          <div className="service-console">
            <div className="console-head">
              <span>Yunjiang Service Console</span>
              <strong>企业客户服务看板</strong>
            </div>
            <div className="console-track">
              {['需求确认', '方案设计', '样品确认', '包装制作', '交付回访'].map((item, index) => (
                <div className={index < 3 ? 'console-step active' : 'console-step'} key={item}>
                  <i />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="service-widgets">
            <div><Users size={20} /><span>客户档案</span><strong>偏好 / 周期 / 复购</strong></div>
            <div><QrCode size={20} /><span>扫码选品</span><strong>到店快速了解</strong></div>
            <div><ClipboardList size={20} /><span>需求表单</span><strong>预算数量标准化</strong></div>
            <div><CalendarClock size={20} /><span>复购提醒</span><strong>节庆节点跟进</strong></div>
          </div>
        </div>
      </section>

      <section className="faq-section story-section">
        <Revealer className="section-title">
          <p className="eyebrow">FAQ</p>
          <h2>企业客户常见问题</h2>
        </Revealer>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <Revealer className="faq-item" delay={index * 70} key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </Revealer>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <img src={imageAssets.businessReception} alt="预约商务品鉴背景" loading="lazy" />
        <div className="final-cta-copy">
          <p className="eyebrow">Book A Tasting</p>
          <h2>为下一次企业礼赠，先预约一次品鉴</h2>
          <Link className="primary-link" to="/custom">
            进入预约咨询
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
