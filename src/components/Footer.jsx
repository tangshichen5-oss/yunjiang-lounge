import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);
  const [copyMessage, setCopyMessage] = useState('');

  const copyText = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopyMessage('已复制，可前往微信添加。');
    } catch {
      setCopyMessage('复制失败，请手动复制。');
    }
  };

  return (
    <>
      <footer className="footer">
        <div>
          <strong>云酱会客厅</strong>
          <p>高端商务会客厅 + 酒厂品牌背书 + 商务礼酒解决方案</p>
        </div>
        <div className="footer-actions">
          <Link to="/brand-story">品牌故事</Link>
          <Link to="/custom">预约</Link>
          <Link to="/coming-soon">更多内容</Link>
          <button type="button" onClick={() => setContactOpen(true)}>联系方式</button>
        </div>
      </footer>

      {contactOpen && (
        <div className="contact-modal-overlay" role="presentation" onClick={() => setContactOpen(false)}>
          <section
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-label="联系方式"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="contact-modal-close" type="button" onClick={() => setContactOpen(false)} aria-label="关闭联系方式">
              ×
            </button>
            <p className="eyebrow">Contact</p>
            <h2>联系方式</h2>
            <div className="contact-qr-wrap">
              <img src="/images/wechat-contact.png" alt="云酱会客厅微信二维码" />
            </div>
            <p className="contact-modal-note">扫码添加微信，沟通商务礼酒需求。</p>
            <div className="contact-lines">
              <p><span>手机</span><strong>18786845258</strong></p>
              <p><span>微信号</span><strong>TSC2418</strong></p>
            </div>
            <div className="contact-copy-actions">
              <button type="button" onClick={() => copyText('18786845258')}>复制手机号</button>
              <button type="button" onClick={() => copyText('TSC2418')}>复制微信号</button>
            </div>
            {copyMessage && <div className="contact-copy-note">{copyMessage}</div>}
          </section>
        </div>
      )}
    </>
  );
}
