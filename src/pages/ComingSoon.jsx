import { ArrowLeft, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { imageAssets } from '../data.js';

export default function ComingSoon() {
  return (
    <main className="coming-page">
      <section className="coming-card">
        <img src={imageAssets.comingSoon} alt="高粱、酒坛与酿造蒸汽" />
        <div className="coming-copy">
          <p className="eyebrow">Coming Soon</p>
          <h1>更多精彩内容正在酿造中</h1>
          <p>这部分内容正在慢慢展开。先回到会客厅，或预约一次企业品鉴，把真正重要的事聊起来。</p>
          <div className="coming-actions">
            <Link className="soft-link dark" to="/">
              <ArrowLeft size={18} />
              返回首页
            </Link>
            <Link className="primary-link" to="/custom">
              <CalendarCheck size={18} />
              预约
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
