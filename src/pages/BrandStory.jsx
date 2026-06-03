import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { imageAssets } from '../data.js';
import Revealer from '../components/Revealer.jsx';

const storyChapters = [
  {
    kicker: '序',
    title: '山水酿初心，一席会知己',
    image: imageAssets.distilleryAerial,
    paragraphs: [
      '在茅台镇群山环抱、赤水河蜿蜒流淌的河谷间，云雾常年栖落于酒坊屋脊。百年以来，赤水河谷的红土、本地糯高粱与大曲古法，沉淀出酱香白酒独有的风土基因。',
      '云酱会客厅的起源，便扎根在这片酱香核心产区的山水里，依托源头酒厂数十年酿造积淀，跳出传统白酒“重经销、轻体验”的老路，以会客厅为载体，重构酱香商务礼酒的全新生态。',
    ],
  },
  {
    kicker: '第一篇章',
    title: '缘起｜从酒坊匠心，到破局思考',
    image: imageAssets.sorghumAerial,
    paragraphs: [
      '品牌创始团队深耕酱酒生产十余年，坐拥河谷产区自有酿造基地，守着传统大曲酱香工艺，完整覆盖原料、制曲、发酵、蒸馏、陈储全链路。',
      '在行业同质化严重、商务用酒选型杂乱的大环境下，团队发现痛点：商务场景里，企业采购难寻适配价位、品质稳定的定制酱酒；酒厂埋头生产，缺少直面终端企业客户的有效通路，产销两端信息割裂。',
      '于是团队定下轻前端验证、重后端支撑的发展思路：不盲目铺渠道建厂，先以贵阳样板会客厅作为落地支点，把酒厂酿造实力放在后端做硬核保障，前端用沉浸式品鉴空间链接政企、商会、民营企业资源。',
    ],
  },
  {
    kicker: '第二篇章',
    title: '落地｜以会客厅为桥，做实前端验证',
    image: imageAssets.heroLounge,
    paragraphs: [
      '贵阳首座云酱会客厅落地后，摒弃传统酒水门店卖货逻辑，打造集酱酒品鉴、商务洽谈、圈层沙龙、礼酒定制于一体的体验空间。',
    ],
    points: [
      '品鉴会深耕圈层：定期开办酱香科普品鉴沙龙，拆解酿造细节、不同轮次基酒风味差异，让企业采购从“凭名气选酒”变成“靠品质选酒”。',
      '政企与商协会联动：对接各地商会、行业协会资源，深度挖掘年会伴手礼、项目答谢礼、客户馈赠与企业招待用酒需求。',
      '私域精细化运营：沉淀精准企业客群，持续复盘客户真实需求、产品定价区间、毛利模型与复购周期。',
    ],
    closing: '经过样板空间的市场验证，团队逐步摸清商务礼酒细分赛道的市场规律：商务用酒既要产区正宗、酒体过硬，又可按需做瓶身定制、酒体微调和整单专属方案，后端自有酒厂的产能与储酒优势恰好能承接个性化需求。',
  },
  {
    kicker: '第三篇章',
    title: '底气｜后端酒厂托底，筑牢品质根基',
    image: imageAssets.fermentationPits,
    paragraphs: [
      '藏于赤水河谷云雾间的厂区，是云酱会客厅的品质底盘。',
    ],
    points: [
      '原料闭环：就地选用河谷糯高粱与赤水河谷水源，遵循大曲酱香酿造规范，守住从原料到发酵的基础品质。',
      '储酒储备充足：厂区常年储备不同年份基酒，从基酒陈储、酒体勾调，到小批量定制生产，全链路自主可控。',
      '工艺传承迭代：延续酿酒师傅的勾调经验，结合现代酒体风味测评，适配商务宴请不同饮用场景，兼顾适口度与酱酒风味表达。',
    ],
    closing: '后端工厂的产能、储酒与工艺实力，让前端会客厅无需担忧货源品质与交付周期，形成“前端会客厅拓客获需，后端酒厂按需落地生产”的闭环商业模式。',
  },
  {
    kicker: '第四篇章',
    title: '生长｜一城一会客，酱香进商务',
    image: imageAssets.businessReception,
    paragraphs: [
      '贵阳样板模式跑通后，云酱会客厅开启城市复制，坚持一城一会客厅的布局逻辑：每座落地城市，以本地会客厅作为品牌落地窗口，背靠茅台镇源头酒厂做供应链支撑。',
      '品牌跳出大众流通酒内卷赛道，专注商务礼酒细分解决方案：从企业年会定制酒、项目签约纪念酒、客户节日馈赠与日常商务招待用酒，一站式完成酒体选型、包装设计、专属文化赋能、批量生产交付。',
    ],
  },
  {
    kicker: '尾声',
    title: '一席云酱，礼敬知己',
    image: imageAssets.tastingEvent,
    paragraphs: [
      '云酱会客厅的初心从未改变：以赤水河谷酱香风土为根，以会客厅为媒介，让正宗产区酱酒走进企业的商务往来。',
      '不做流水线量产的通货白酒，只做适配商务场景、有温度、可定制的酱香礼酒；一端守住酿酒人的匠心本分，一端成全商务往来的人情心意。',
      '让每一瓶从云酱走出的酱酒，既是舌尖的风土佳酿，也是商务合作的温情载体。',
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
          <h1>云酱会客厅 · 完整品牌故事</h1>
          <p>让每一次商务往来，都值得被记住。</p>
        </Revealer>
      </section>

      <section className="story-manifest">
        <Revealer>
          <span>一席云酱，礼遇知己</span>
          <h2>这不是一个卖酒网页，而是一家有产区、有工艺、有酒厂、有空间、有商务服务能力的品牌。</h2>
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
              {chapter.closing && <p>{chapter.closing}</p>}
            </Revealer>
          </article>
        ))}
      </section>

      <section className="story-closing-claim">
        <Revealer>
          <p className="eyebrow">Brand Claim</p>
          <h2>让每一次商务往来，都值得被记住。</h2>
          <p>备选短句：一席云酱，礼遇知己。云聚赤水酱香，一席礼遇知己。</p>
          <Link className="primary-link" to="/custom">
            预约一次商务品鉴
            <ArrowRight size={18} />
          </Link>
        </Revealer>
      </section>
    </main>
  );
}
