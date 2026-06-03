import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessScenes, imageAssets } from '../data.js';
import Revealer from '../components/Revealer.jsx';

export default function BusinessScenesPage() {
  return (
    <main className="business-page">
      <section className="page-hero page-hero-light">
        <img src={imageAssets.businessReception} alt="企业商务接待与礼酒场景" />
        <div className="page-hero-overlay" />
        <Revealer className="page-hero-copy">
          <p className="eyebrow">Business Scenes</p>
          <h1>商务场景先于产品。</h1>
          <p>
            不是先问买哪款酒，而是先问这次酒要送给谁、出现在哪个场合、代表什么关系。
            普通酒厂卖产品，云酱会客厅先理解商务场景，再给出礼酒方案。
          </p>
        </Revealer>
      </section>

      <section className="scene-intent-section">
        <Revealer className="scene-intent">
          <span>酒只是载体</span>
          <h2>在不同商务场合里，它承担的角色并不相同。</h2>
          <p>
            有时是一次体面接待，有时是一份感谢，有时是长期关系维护，有时是签约节点的仪式感。
            云酱会客厅把这些场景先说清楚，再谈酒体、包装、预算和交付。
          </p>
        </Revealer>
      </section>

      <section className="scene-detail-section">
        {businessScenes.slice(0, 5).map((scene, index) => (
          <article className={index % 2 === 0 ? 'scene-detail' : 'scene-detail scene-detail-reverse'} key={scene.title}>
            <Revealer className="scene-detail-image">
              <img src={scene.image} alt={scene.title} loading="lazy" />
            </Revealer>
            <Revealer className="scene-detail-copy" delay={90}>
              <p className="eyebrow">{scene.label}</p>
              <h2>{scene.title}</h2>
              <p>{scene.copy}</p>
              <div className="scene-role">
                <span>场景角色</span>
                <strong>{scene.role}</strong>
              </div>
            </Revealer>
          </article>
        ))}
      </section>

      <section className="page-cta">
        <Revealer>
          <p className="eyebrow">Consultation</p>
          <h2>先聊场景，再定方案。</h2>
          <p>如果你正在准备客户接待、节庆礼赠、签约宴请或企业定制，可以先预约一次商务礼酒方案咨询。</p>
          <Link className="primary-link" to="/consult">
            预约商务礼酒方案咨询
            <ArrowRight size={18} />
          </Link>
        </Revealer>
      </section>
    </main>
  );
}
