import { ArrowLeft, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ComingSoon() {
  return (
    <main className="coming-page">
      <section className="coming-card glass-card">
        <div className="coming-illustration" aria-label="会客厅施工中插画">
          <div className="tiny-bottle" />
          <div className="tiny-sofa" />
          <div className="tiny-lamp" />
          <div className="tiny-sign">醒酒中</div>
        </div>
        <p className="eyebrow">Coming Soon</p>
        <h1>页面正在醒酒中，更多精彩，敬请期待</h1>
        <p>
          这部分内容正在像一杯好酒一样慢慢展开。先回到会客厅，或直接预约一次企业品鉴，把真正重要的事聊起来。
        </p>
        <div className="coming-actions">
          <Link className="soft-link dark" to="/">
            <ArrowLeft size={18} />
            返回首页
          </Link>
          <Link className="primary-link" to="/custom">
            <CalendarCheck size={18} />
            预约咨询
          </Link>
        </div>
      </section>
    </main>
  );
}
