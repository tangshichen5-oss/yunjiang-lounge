import { ClipboardList, RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import { imageAssets } from '../data.js';
import { analyzeDemand } from '../data/consultRecommendations.js';
import { consultationOptions } from '../data/formOptions.js';
import BrandSelect from '../components/BrandSelect.jsx';
import Revealer from '../components/Revealer.jsx';
import { buildLeadData, submitLead } from '../services/supabaseLeads.js';

const initialDemand = {
  name: '',
  contact: '',
  company: '',
  city: '',
  scene: '',
  recipient: '',
  budget: '',
  quantity: '',
  customization: '',
  delivery: '暂不确定',
  note: '',
};

export default function ConsultPage() {
  const [demand, setDemand] = useState(initialDemand);
  const [result, setResult] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [submitState, setSubmitState] = useState({ status: 'idle', message: '' });
  const [openSelect, setOpenSelect] = useState(null);
  const resultRef = useRef(null);

  const hasInput = useMemo(() => Object.values(demand).some((value) => value.trim() && value !== '暂不确定'), [demand]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDemand((current) => ({ ...current, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setDemand((current) => ({ ...current, [name]: value }));
  };

  const handleAnalyze = (event) => {
    event.preventDefault();
    const nextResult = analyzeDemand(demand);
    setResult(nextResult);
    setShowCard(false);
    setSubmitState({ status: 'idle', message: '' });
    requestAnimationFrame(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const reset = () => {
    setDemand(initialDemand);
    setResult(null);
    setShowCard(false);
    setSubmitState({ status: 'idle', message: '' });
  };

  const handleGenerateCard = async () => {
    if (!result) return;
    setShowCard(true);

    if (!demand.contact.trim()) {
      setSubmitState({
        status: 'error',
        message: '需求卡已生成。若希望工作人员继续完善方案，请补充联系方式后重新生成需求卡。',
      });
      return;
    }

    const leadData = buildLeadData(demand, result);
    setSubmitState({ status: 'submitting', message: '正在同步需求记录...' });

    try {
      await submitLead(leadData);
      setSubmitState({
        status: 'success',
        message: '需求卡已生成，工作人员可根据你的填写内容继续完善商务礼酒方案。',
      });
    } catch {
      setSubmitState({
        status: 'error',
        message: '提交暂时失败，请截图保存需求卡，稍后再试或直接联系工作人员。',
      });
    }
  };

  return (
    <main className="consult-page">
      <section className="page-hero page-hero-consult">
        <img src={imageAssets.tastingEvent} alt="商务礼酒需求方案与品鉴沟通" />
        <div className="page-hero-overlay" />
        <Revealer className="page-hero-copy">
          <p className="eyebrow">Business Gift Wine Analysis</p>
          <h1>商务礼酒方案分析</h1>
          <p>你不需要先确定买哪款酒。先写下使用场景、预算、数量和交付时间，我们会先帮你整理成一份商务礼酒方案建议。</p>
        </Revealer>
      </section>

      <section className="analysis-section">
        <Revealer className="section-title">
          <p className="eyebrow">Fill In Your Needs</p>
          <h2>填写真实需求，生成初步方案建议。</h2>
          <p>根据使用场景、采购数量、预算区间和赠送对象，先整理出一张初步商务礼酒需求卡，帮助后续沟通更清楚。</p>
        </Revealer>

        <form className="analysis-form" onSubmit={handleAnalyze}>
          <div className="contact-fields wide-field">
            <label>
              联系人姓名
              <input
                name="name"
                value={demand.name}
                onChange={handleChange}
                placeholder="例如：张先生 / 李女士"
              />
            </label>
            <label>
              联系方式
              <input
                name="contact"
                value={demand.contact}
                onChange={handleChange}
                required
                placeholder="请输入手机号或微信号"
              />
            </label>
            <label>
              公司名称 / 单位名称
              <input
                name="company"
                value={demand.company}
                onChange={handleChange}
                placeholder="例如：某某科技有限公司 / 某某商会"
              />
            </label>
            <label>
              所在城市
              <input
                name="city"
                value={demand.city}
                onChange={handleChange}
                placeholder="例如：贵阳 / 深圳 / 珠海"
              />
            </label>
          </div>
          <label className="wide-field">
            使用场景
            <textarea
              name="scene"
              value={demand.scene}
              onChange={handleChange}
              placeholder="例如：中秋客户答谢、企业接待、项目签约、商会活动、员工福利等"
            />
          </label>
          <label>
            赠送或接待对象
            <input
              name="recipient"
              value={demand.recipient}
              onChange={handleChange}
              placeholder="例如：重要客户、合作伙伴、商协会嘉宾、企业内部员工等"
            />
          </label>
          <BrandSelect label="预算范围" name="budget" value={demand.budget} placeholder="请选择预算范围" options={consultationOptions.budget} openSelect={openSelect} setOpenSelect={setOpenSelect} onChange={handleSelectChange} />
          <BrandSelect label="预计采购数量" name="quantity" value={demand.quantity} placeholder="请选择预计数量" options={consultationOptions.quantity} openSelect={openSelect} setOpenSelect={setOpenSelect} onChange={handleSelectChange} />
          <BrandSelect label="期望交付时间" name="delivery" value={demand.delivery} options={consultationOptions.delivery} openSelect={openSelect} setOpenSelect={setOpenSelect} onChange={handleSelectChange} />
          <label className="wide-field">
            包装或定制需求
            <textarea
              name="customization"
              value={demand.customization}
              onChange={handleChange}
              placeholder="例如：标准礼盒、企业Logo、祝福语、纪念编号、完整礼盒定制等"
            />
          </label>
          <label className="wide-field">
            其他补充说明
            <textarea
              name="note"
              value={demand.note}
              onChange={handleChange}
              placeholder="可以写下行业、用途、客户重要程度、是否需要正式拜访、是否用于节庆等信息"
            />
          </label>
          <div className="analysis-actions">
            <button className="primary-link form-submit" type="submit">
              生成方案建议
              <Sparkles size={18} />
            </button>
            <div className="secondary-action-row">
            <button className="soft-link dark ghost-button" type="button" onClick={reset} disabled={!hasInput && !result}>
              重新填写
              <RotateCcw size={17} />
            </button>
            </div>
          </div>
        </form>
      </section>

      {result && (
        <section className="analysis-result-section" ref={resultRef}>
          <Revealer className="analysis-result-card">
            <p className="eyebrow">Preliminary Recommendation</p>
            <h2>初步推荐：{result.primary.title}</h2>
            {result.secondary.length > 0 && (
              <p className="combined-plan">可结合：{result.secondary.join(' / ')}</p>
            )}
            <div className="result-block">
              <h3>需求判断</h3>
              <p>{result.reason}</p>
              <p>这类场景不适合简单按价格筛选，更适合先确认对象、数量、预算和交付节奏，再匹配酒体与包装层级。</p>
            </div>
            <div className="result-config">
              <div>
                <span>酒体方向</span>
                <p>{result.wine}</p>
              </div>
              <div>
                <span>包装方向</span>
                <p>{result.package}</p>
              </div>
              <div>
                <span>沟通重点</span>
                <ul>
                  {result.focus.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
            <div className="result-block">
              <h3>注意事项</h3>
              <ul>
                {result.notes.map((note) => <li key={note}>{note}</li>)}
              </ul>
            </div>
            <div className="analysis-actions result-actions">
              <button
                className="primary-link form-submit"
                type="button"
                onClick={handleGenerateCard}
                disabled={submitState.status === 'submitting'}
              >
                生成我的需求卡
                <ClipboardList size={18} />
              </button>
              <p className="action-helper-text">生成后，工作人员可根据你的填写内容继续完善商务礼酒方案。</p>
              <div className="secondary-action-row">
              <button className="soft-link dark ghost-button" type="button" onClick={reset}>
                重新填写
              </button>
              </div>
            </div>
            <p className="privacy-hint">信息仅用于商务礼酒方案沟通，不会公开展示。</p>
            {submitState.message && (
              <div className={`lead-submit-note ${submitState.status}`}>
                {submitState.message}
              </div>
            )}
          </Revealer>

          {showCard && (
            <Revealer className="demand-card">
              <span className="card-mark">云酱会客厅</span>
              <h2>商务礼酒需求卡</h2>
              <div className="card-recommend">
                <small>初步推荐方案</small>
                <strong>{result.primary.title}</strong>
              </div>
              <dl>
                <div><dt>联系人</dt><dd>{demand.name || '暂未填写'}</dd></div>
                <div><dt>联系方式</dt><dd>{demand.contact || '暂未填写'}</dd></div>
                <div><dt>公司 / 城市</dt><dd>{[demand.company, demand.city].filter(Boolean).join(' / ') || '暂未填写'}</dd></div>
                <div><dt>使用场景</dt><dd>{demand.scene || '暂不确定'}</dd></div>
                <div><dt>赠送对象</dt><dd>{demand.recipient || '暂不确定'}</dd></div>
                <div><dt>预算范围</dt><dd>{demand.budget || '暂不确定'}</dd></div>
                <div><dt>预计数量</dt><dd>{demand.quantity || '暂不确定'}</dd></div>
                <div><dt>定制需求</dt><dd>{demand.customization || '暂不确定'}</dd></div>
                <div><dt>期望交付</dt><dd>{demand.delivery || '暂不确定'}</dd></div>
                <div><dt>沟通重点</dt><dd>{result.cardFocus}</dd></div>
              </dl>
              <p>该记录可截图发送给工作人员，便于进一步沟通方案。</p>
            </Revealer>
          )}
        </section>
      )}
    </main>
  );
}
