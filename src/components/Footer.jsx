import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>云酱会客厅</strong>
        <p>基于茅台镇酱香酒生产资源的城市商务礼酒前端项目</p>
      </div>
      <div className="footer-actions">
        <Link to="/custom">预约品鉴</Link>
        <Link to="/coming-soon">更多页面</Link>
      </div>
    </footer>
  );
}
