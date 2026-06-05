import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { imageAssets, storyChapters } from '../data.js';
import Revealer from '../components/Revealer.jsx';

export default function BrandStory() {
  return (
    <main className="brand-story-page">
      <section className="story-hero">
        <img src={imageAssets.jarCellar} alt="陶坛酒库与酱香储酒体系" />
        <div className="story-hero-overlay" />
        <Revealer className="story-hero-copy">
          <p className="eyebrow">Brand Story</p>
          <h1>云酱会客厅 · 品牌故事</h1>
          <p>酒从山里来，但关系发生在城市里。</p>
        </Revealer>
      </section>

      <section className="story-manifest">
        <Revealer>
          <span>一席云酱，礼遇知己</span>
          <h2>云酱会客厅的意义，是把产区里的酿造资源，带到城市的商务关系里。</h2>
        </Revealer>
      </section>

      <section className="story-chapters">
        {storyChapters.map((chapter, index) => (
          <article className={index % 2 === 0 ? 'story-chapter' : 'story-chapter story-chapter-reverse'} key={chapter.title}>
            <Revealer className="story-chapter-image">
              <img src={chapter.image} alt={chapter.title} loading="lazy" />
            </Revealer>
            <Revealer className="story-chapter-copy" delay={100}>
              <p className="eyebrow">{chapter.kicker}</p>
              <h2>{chapter.title}</h2>
              {chapter.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {chapter.points && (
                <div className="story-points">
                  {chapter.points.map((point, pointIndex) => (
                    <div key={point}>
                      <span>{String(pointIndex + 1).padStart(2, '0')}</span>
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              )}
              {chapter.closing && <p className="story-quote">{chapter.closing}</p>}
            </Revealer>
          </article>
        ))}
      </section>

      <section className="story-closing-claim">
        <Revealer>
          <p className="eyebrow">Brand Claim</p>
          <h2>让每一次商务往来，都值得被记住。</h2>
          <p>如果你正在准备企业接待、客户答谢、节庆采购或定制礼酒，可以先从一次咨询开始。</p>
          <Link className="primary-link" to="/consult">
            预约商务礼酒咨询
            <ArrowRight size={18} />
          </Link>
        </Revealer>
      </section>
    </main>
  );
}
