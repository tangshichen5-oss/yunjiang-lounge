import { ArrowRight, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import { imageAssets } from '../data.js';
import Revealer from '../components/Revealer.jsx';

export default function ConsultPage() {
  return (
    <main className="consult-page">
      <section className="page-hero page-hero-consult">
        <img src={imageAssets.tastingEvent} alt="商务礼酒预约品鉴与方案咨询" />
        <div className="page-hero-overlay" />
        <Revealer className="page-hero-copy">
          <p className="eyebrow">Appointment</p>
          <h1>预约商务礼酒方案咨询</h1>
          <p>先聊赠送对象、使用场景、预算区间和交付周期。后续这里会升级为“商务礼酒方案分析 + 需求卡生成”。</p>
        </Revealer>
      </section>

      <section className="consult-reserve-section">
        <Revealer className="consult-reserve-card">
          <ClipboardList size={28} />
          <h2>本轮先预留清晰入口。</h2>
          <p>
            当前页面保持轻量，不接入数据库、支付、后台或复杂表单逻辑。
            你可以先从商务场景或企业定制进入咨询路径，下一轮再升级方案分析能力。
          </p>
          <div className="consult-actions">
            <Link className="primary-link" to="/custom">
              填写定制需求
              <ArrowRight size={18} />
            </Link>
            <Link className="soft-link dark" to="/scenes">
              查看商务场景
            </Link>
          </div>
        </Revealer>
      </section>
    </main>
  );
}
