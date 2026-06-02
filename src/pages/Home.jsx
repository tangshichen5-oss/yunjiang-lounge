import { ArrowRight, BadgeCheck, Building2, CalendarClock, CheckCircle2, ClipboardList, QrCode, ShieldCheck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {
  businessScenes,
  customCases,
  faqs,
  loungeSpaces,
  productSeries,
  resourceCards,
} from '../data.js';
import HorizontalRail from '../components/HorizontalRail.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Revealer from '../components/Revealer.jsx';
import VisualPlaceholder from '../components/VisualPlaceholder.jsx';

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
    <main>
      <section id="lounge" className="hero-v2">
        <div className="hero-stage">
          <VisualPlaceholder type="lounge" label="高端会客厅效果图占位" />
          <div className="hero-bottle-scene" aria-hidden="true">
            <div className="hero-bottle" />
            <div className="hero-box" />
          </div>
        </div>
        <Revealer className="hero-copy">
          <p className="eyebrow">Yunjiang Business Lounge</p>
          <h1>一间为企业礼酒而生的酱香会客厅</h1>
          <p>
            云酱会客厅不是普通烟酒店，也不是传统白酒广告页。它以真实生产资源为基础，用会客厅、品鉴、定制和数字化服务，帮助本地企业把礼酒采购变成一套体面、可控、可交付的商务方案。
          </p>
          <div className="hero-actions">
            <Link className="primary-link" to="/custom">
              预约企业品鉴
              <ArrowRight size={18} />
            </Link>
            <Link className="soft-link" to="/coming-soon">
              查看空间手册
            </Link>
          </div>
        </Revealer>
      </section>

      <section id="solution" className="story-section solution-story">
        <Revealer className="solo-copy">
          <p className="eyebrow">Business Gift Solution</p>
          <h2>不是卖一瓶酒，而是交付一个商务礼赠场景</h2>
          <p>
            项目面向本地中小企业、商协会成员、礼品渠道、餐饮渠道和高复购客户。核心价值是降低新品牌信任成本，在产地背书、稳定供应、价格可控、包装体面和定制灵活之间找到适合中端商务采购的空间。
          </p>
        </Revealer>
        <div className="solution-grid">
          {[
            ['名单制触达', '建立企业主、商协会、渠道负责人和高复购客户资源池。'],
            ['预约制品鉴', '用小型沙龙和到店品鉴完成信任建立。'],
            ['方案式定制', '围绕预算、数量、包装和交付周期形成服务方案。'],
            ['客户档案沉淀', '记录偏好、采购周期、复购意向和后续跟进计划。'],
          ].map(([title, copy], index) => (
            <Revealer className="glass-card solution-card" delay={index * 80} key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </Revealer>
          ))}
        </div>
      </section>

      <HorizontalRail
        id="products"
        eyebrow="Product System"
        title="三层产品体系，服务不同企业采购场景"
        copy="横向浏览产品体系。每张卡片预留高端酒瓶与礼盒渲染位，后续可替换为真实产品图。"
      >
        {productSeries.map((product) => (
          <ProductCard product={product} key={product.title} />
        ))}
      </HorizontalRail>

      <HorizontalRail
        id="scenes"
        eyebrow="Business Scenes"
        title="商务场景先行，产品跟随场景表达"
        copy="企业客户关心的不是广告口号，而是这个礼品在客户维护、活动接待和渠道合作中是否体面、可解释、能交付。"
        warm
      >
        {businessScenes.map((scene) => (
          <Link to="/coming-soon" className="scene-card glass-card" key={scene.title}>
            <VisualPlaceholder type={scene.visual} label={scene.title} />
            <h3>{scene.title}</h3>
            <p>{scene.copy}</p>
          </Link>
        ))}
      </HorizontalRail>

      <section id="story" className="split-story story-section">
        <Revealer className="split-copy">
          <p className="eyebrow">Brand Story</p>
          <h2>把生产端的长期能力，转化为城市里的信任入口</h2>
          <p>
            计划书的核心判断是：生产资源本身并不直接等于商业成功。云酱会客厅先在贵阳建设样板空间，以轻前端验证、重后端支撑、以销定产、滚动投入的方式，逐步积累客户数据和B端订单反馈。
          </p>
          <Link className="text-link" to="/coming-soon">阅读完整品牌故事</Link>
        </Revealer>
        <Revealer className="split-visual" delay={120}>
          <VisualPlaceholder type="meeting" label="企业接待场景占位" />
        </Revealer>
      </section>

      <HorizontalRail
        id="resources"
        eyebrow="Production Resource"
        title="产区与酿造资源，是会客厅的信任底座"
        copy="以下内容来自计划书中的生产许可材料、设备设施和经营估算口径，用于说明供应链基础，不作为投资收益承诺。"
      >
        {resourceCards.map((card) => (
          <Link to="/coming-soon" className="resource-card glass-card" key={card.title}>
            <VisualPlaceholder type={card.visual} label={card.title} />
            <strong>{card.value}</strong>
            <h3>{card.title}</h3>
            <p>{card.copy}</p>
          </Link>
        ))}
      </HorizontalRail>

      <section className="story-section custom-preview">
        <Revealer className="solo-copy">
          <p className="eyebrow">Enterprise Customization</p>
          <h2>企业定制，从预算和场景开始，而不是从酒瓶开始</h2>
          <p>
            企业客户通常同时关心包装是否体面、交付是否稳定、预算是否可控、是否能体现企业形象。会客厅把这些问题前置成清晰的定制流程。
          </p>
        </Revealer>
        <div className="custom-band glass-card">
          {['需求沟通', '预算确认', '酒款建议', '包装方案', '样品确认', '生产交付', '售后回访'].map((step, index) => (
            <div className="flow-node" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
        <HorizontalRail
          eyebrow="Customization Cases"
          title="企业定制案例占位"
          copy="当前为样板展示位，后续可替换为真实企业案例、礼盒照片和包装方案。"
          warm
        >
          {customCases.map((item) => (
            <Link to="/coming-soon" className="case-card glass-card" key={item.title}>
              <VisualPlaceholder type="gift" label={item.title} />
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </Link>
          ))}
        </HorizontalRail>
      </section>

      <section id="digital" className="story-section dashboard-story">
        <Revealer className="section-title">
          <p className="eyebrow">Digital Service</p>
          <h2>轻量数字化，让线下服务变得可记录、可跟进、可复盘</h2>
        </Revealer>
        <div className="dashboard-v2 glass-card">
          <div className="dashboard-main">
            <div className="dash-header">
              <span>Yunjiang Service Console</span>
              <strong>企业客户服务看板</strong>
            </div>
            <div className="order-track">
              {['需求确认', '方案设计', '样品确认', '包装制作', '灌装交付', '回访复购'].map((step, index) => (
                <div className={index < 3 ? 'track-step active' : 'track-step'} key={step}>
                  <i />
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="dashboard-side">
            <div className="profile-widget">
              <h3>客户档案</h3>
              <p><span>常购价格带</span><strong>中端商务</strong></p>
              <p><span>采购周期</span><strong>节庆 / 活动</strong></p>
              <p><span>复购状态</span><strong>待回访</strong></p>
            </div>
            <div className="tool-grid">
              <span><QrCode size={17} />扫码选品</span>
              <span><ClipboardList size={17} />需求表单</span>
              <span><CalendarClock size={17} />复购提醒</span>
            </div>
          </div>
        </div>
      </section>

      <HorizontalRail
        id="experience"
        eyebrow="Lounge Experience"
        title="会客厅空间展示"
        copy="以高端酒店大堂、威士忌会所和商务会客厅为参考，先搭好真实照片未来进入的位置、比例和层次。"
      >
        {loungeSpaces.map((space) => (
          <Link to="/coming-soon" className="space-card glass-card" key={space.title}>
            <VisualPlaceholder type={space.visual} label={space.title} />
            <h3>{space.title}</h3>
            <p>{space.copy}</p>
          </Link>
        ))}
      </HorizontalRail>

      <section className="story-section faq-section">
        <Revealer className="section-title">
          <p className="eyebrow">FAQ</p>
          <h2>企业客户常见问题</h2>
        </Revealer>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <Revealer className="faq-item glass-card" delay={index * 70} key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </Revealer>
          ))}
        </div>
      </section>

      <section className="cta-section" id="booking">
        <Revealer className="cta-card">
          <div>
            <p className="eyebrow">Book A Tasting</p>
            <h2>为下一次企业礼赠，先预约一次品鉴</h2>
            <p>从预算、数量、场景和包装开始沟通，形成更适合本地企业的商务礼酒方案。</p>
          </div>
          <Link className="primary-link" to="/custom">
            进入预约咨询
            <ArrowRight size={18} />
          </Link>
        </Revealer>
      </section>
    </main>
  );
}
