import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>云酱会客厅</strong>
        <p>高端商务会客厅 + 酒厂品牌背书 + 商务礼酒解决方案</p>
      </div>
      <div className="footer-actions">
        <Link to="/brand-story">品牌故事</Link>
        <Link to="/custom">预约</Link>
        <Link to="/coming-soon">更多内容</Link>
      </div>
    </footer>
  );
}
