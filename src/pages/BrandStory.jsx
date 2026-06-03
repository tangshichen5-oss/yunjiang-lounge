import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { imageAssets } from '../data.js';
import Revealer from '../components/Revealer.jsx';

const storyChapters = [
  {
    kicker: '起源',
    title: '酒从山里来',
    image: imageAssets.distilleryAerial,
    paragraphs: [
      '在贵州酱酒产区，粮食、曲香、窖池、陶坛和时间共同决定一瓶酒的底色。云酱会客厅的起点，也来自这条真实的酿造链路。',
      '但关系发生在城市里。企业客户需要的，不只是知道酒从哪里来，更希望它在接待、答谢、签约和节庆礼赠中出现得合适、体面、可解释。',
    ],
  },
  {
    kicker: '会客厅',
    title: '把产区资源带进商务关系',
    image: imageAssets.heroLounge,
    paragraphs: [
      '云酱会客厅不是传统烟酒店，也不是把产品堆成货架的白酒页面。它更像一个商务接待空间，让客户可以坐下来品鉴、沟通预算、确认数量、讨论包装和交付周期。',
      '真正重要的，不只是把酒卖出去，而是让它出现在合适的场合。会客厅承担的，是把产区里的酿造资源，转译成城市里的商务礼遇。',
    ],
  },
  {
    kicker: '底气',
    title: '背后有酒厂，眼前有服务',
    image: imageAssets.fermentationPits,
    paragraphs: [
      '源头酿造资源，是云酱会客厅敢于服务企业礼赠和定制需求的底气。窖池、储酒、陈放和勾调，决定了交付不只停留在包装层面。',
    ],
    points: [
      '产区基础：依托贵州酱香酒生产资源，重视原料、制曲、发酵、蒸馏和陈藏的完整链路。',
      '储酒体系：通过基酒陈放和储酒能力，为商务礼赠和企业定制预留稳定供给空间。',
      '场景服务：在城市会客厅里，把酒体建议、包装方向、预算区间和使用场合一起说清楚。',
    ],
    closing: '酒厂让品质有根，会客厅让礼遇有场合。',
  },
  {
    kicker: '商务',
    title: '一瓶酒，也是一种关系表达',
    image: imageAssets.businessReception,
    paragraphs: [
      '在企业往来里，酒有时代表感谢，有时代表仪式感，有时只是一次得体的拜访。云酱会客厅关心的，是这瓶酒是否与对象、场合和关系相称。',
      '因此，我们先聊送给谁、为什么送、何时送、预算多少，再判断适合标准礼盒、品鉴样品、企业定制还是纪念礼酒。',
    ],
  },
  {
    kicker: '愿景',
    title: '让每一次商务往来，都值得被记住',
    image: imageAssets.tastingEvent,
    paragraphs: [
      '云酱会客厅希望做的，不是喧闹地卖酒，而是安静地把一件商务礼赠做稳：来源说得清，场景想得周到，包装不过度，交付有秩序。',
      '一席云酱，礼遇知己。让来自产区的酱香酒，成为企业商务往来里温和、体面、可被记住的载体。',
    ],
  },
];

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
