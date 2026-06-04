import { ArrowRight, CheckCircle2, FileText, PackageCheck, Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { imageAssets, processSteps } from '../data.js';
import { consultationOptions } from '../data/formOptions.js';
import BrandSelect from '../components/BrandSelect.jsx';
import Revealer from '../components/Revealer.jsx';

const initialForm = {
  company: '',
  contact: '',
  phone: '',
  budget: '暂不确定',
  quantity: '30瓶以下',
  scene: '客户答谢',
  packaging: '商务礼盒',
  date: '',
  note: '',
};

const questions = [
  '这批酒送给谁',
  '出现在哪个商务场景',
  '预算区间和采购数量是多少',
  '是否用于节庆、签约、周年、答谢或接待',
  '是否需要企业元素、纪念编号、祝福语或专属礼盒',
];

export default function CustomPage() {
  const location = useLocation();
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [openSelect, setOpenSelect] = useState(null);

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

  const handleSelectChange = (name, value) => {
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="custom-page">
      <section className="custom-hero">
        <img src={imageAssets.customBottle} alt="企业定制酒瓶与礼盒" />
        <div className="custom-hero-overlay" />
        <Revealer className="custom-hero-copy">
          <p className="eyebrow">Enterprise Customization</p>
          <h1>企业定制，不只是把 logo 印在酒瓶上。</h1>
          <p>云酱会客厅会先理解企业行业、赠送对象、使用场景、预算区间与交付周期，再推荐酒体、包装、标签、礼盒和整体方案。</p>
        </Revealer>
      </section>

      <section className="consult-section">
        <Revealer className="section-title">
          <p className="eyebrow">Before Customization</p>
          <h2>定制前，先把关系和场景说清楚。</h2>
          <p>真正高级的企业定制，不是堆材料，也不是换一个标签。它应该让礼酒在合适的场合里，准确表达企业的分寸和心意。</p>
        </Revealer>
        <div className="consult-grid">
          {questions.map((question, index) => (
            <Revealer className="consult-card" delay={index * 70} key={question}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{question}</h3>
            </Revealer>
          ))}
        </div>
      </section>

      <section className="custom-content custom-content-rich" id="booking">
        <aside className="process-glass">
          <div className="process-title">
            <PackageCheck size={24} />
            <h2>顾问式定制流程</h2>
          </div>
          {processSteps.map((step, index) => (
            <div className="process-row" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </aside>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <FileText size={24} />
            <div>
              <h2>预约沟通</h2>
              <p>先留下基础需求，后续可升级为“商务礼酒方案分析 + 需求卡生成”。当前表单为前端演示，不连接后台。</p>
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
            <BrandSelect label="预算区间" name="budget" value={form.budget} options={consultationOptions.budget} openSelect={openSelect} setOpenSelect={setOpenSelect} onChange={handleSelectChange} />
            <BrandSelect label="采购数量" name="quantity" value={form.quantity} options={consultationOptions.quantity} openSelect={openSelect} setOpenSelect={setOpenSelect} onChange={handleSelectChange} />
            <BrandSelect label="使用场景" name="scene" value={form.scene} options={consultationOptions.scene} openSelect={openSelect} setOpenSelect={setOpenSelect} onChange={handleSelectChange} />
            <BrandSelect label="包装方向" name="packaging" value={form.packaging} options={consultationOptions.packaging} openSelect={openSelect} setOpenSelect={setOpenSelect} onChange={handleSelectChange} />
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
              placeholder="可填写赠送对象、使用场合、企业元素、祝福语方向、品鉴人数或其他交付要求"
            />
          </label>
          <div className="form-actions-row">
            <button className="primary-link form-submit" type="submit">
              生成咨询记录
              <Send size={18} />
            </button>
            <Link className="soft-link dark" to="/consult">
              方案建议
              <ArrowRight size={18} />
            </Link>
          </div>
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
