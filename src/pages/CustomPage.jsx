import { CheckCircle2, FileText, PackageCheck, Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { processSteps } from '../data.js';
import Revealer from '../components/Revealer.jsx';
import VisualPlaceholder from '../components/VisualPlaceholder.jsx';

const initialForm = {
  company: '',
  contact: '',
  phone: '',
  budget: '3000-10000元',
  quantity: '30-100瓶',
  scene: '节庆礼赠',
  packaging: '商务礼盒',
  date: '',
  note: '',
};

export default function CustomPage() {
  const location = useLocation();
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hash = location.state?.hash;
    if (!hash) return;
    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.state]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="custom-page">
      <section className="custom-hero">
        <Revealer className="custom-hero-copy">
          <p className="eyebrow">Enterprise Customization</p>
          <h1>企业定制礼酒咨询</h1>
          <p>
            把企业名称、预算区间、采购数量、使用场景、包装需求和交付时间一次梳理清楚。当前表单为前端演示，不会真实提交后端。
          </p>
        </Revealer>
        <Revealer className="custom-hero-visual" delay={120}>
          <VisualPlaceholder type="gift" label="高端酒瓶与礼盒渲染图占位" />
        </Revealer>
      </section>

      <section className="custom-content" id="booking">
        <aside className="process-glass glass-card">
          <div className="process-title">
            <PackageCheck size={24} />
            <h2>定制流程</h2>
          </div>
          {processSteps.map((step, index) => (
            <div className="process-row" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </aside>

        <form className="booking-form glass-card" onSubmit={handleSubmit}>
          <div className="form-heading">
            <FileText size={24} />
            <div>
              <h2>预约咨询表单</h2>
              <p>请填写初步需求，我们会以“品鉴 + 方案沟通”的方式推进。</p>
            </div>
          </div>
          <div className="form-grid">
            <label>
              企业名称
              <input name="company" value={form.company} onChange={handleChange} placeholder="请输入企业名称" />
            </label>
            <label>
              联系人
              <input name="contact" value={form.contact} onChange={handleChange} placeholder="请输入联系人" />
            </label>
            <label>
              联系方式
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="手机号或微信" />
            </label>
            <label>
              预算区间
              <select name="budget" value={form.budget} onChange={handleChange}>
                <option>3000-10000元</option>
                <option>10000-30000元</option>
                <option>30000-50000元</option>
                <option>50000元以上</option>
              </select>
            </label>
            <label>
              采购数量
              <select name="quantity" value={form.quantity} onChange={handleChange}>
                <option>30-100瓶</option>
                <option>100-300瓶</option>
                <option>300-800瓶</option>
                <option>800瓶以上</option>
              </select>
            </label>
            <label>
              使用场景
              <select name="scene" value={form.scene} onChange={handleChange}>
                <option>节庆礼赠</option>
                <option>客户答谢</option>
                <option>商协会活动</option>
                <option>周年纪念</option>
                <option>宴席渠道</option>
              </select>
            </label>
            <label>
              包装需求
              <select name="packaging" value={form.packaging} onChange={handleChange}>
                <option>商务礼盒</option>
                <option>企业标签定制</option>
                <option>活动主题包装</option>
                <option>渠道专供包装</option>
              </select>
            </label>
            <label>
              期望交付时间
              <input name="date" type="date" value={form.date} onChange={handleChange} />
            </label>
          </div>
          <label>
            需求备注
            <textarea
              name="note"
              value={form.note}
              onChange={handleChange}
              placeholder="可填写口感偏好、礼盒风格、标签文案方向、品鉴人数或其他交付要求"
            />
          </label>
          <button className="primary-link form-submit" type="submit">
            生成咨询记录
            <Send size={18} />
          </button>
          {submitted && (
            <div className="submit-note">
              <CheckCircle2 size={18} />
              已生成本页咨询记录演示。当前未连接后端，信息不会真实提交。
            </div>
          )}
        </form>
      </section>
    </main>
  );
}
