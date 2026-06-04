import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navItems } from '../data.js';

const navMarks = ['厅', '礼', '酿', '厂', '定', '品'];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const go = (item) => {
    setOpen(false);
    if (item.hash && location.pathname === item.to) {
      document.getElementById(item.hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    navigate(item.to, { state: { hash: item.hash } });
  };

  return (
    <header className={scrolled ? 'topbar is-compact' : 'topbar'}>
      <Link className="brand" to="/">
        <span className="brand-symbol">云</span>
        <span>
          <strong>云酱会客厅</strong>
          <small>商务酱香礼酒</small>
        </span>
      </Link>
      <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="主导航">
        {navItems.map((item, index) => (
          <button key={`${item.label}-${item.hash || item.to}`} onClick={() => go(item)}>
            <i>{navMarks[index]}</i>
            {item.label}
          </button>
        ))}
        <button className="mobile-nav-cta" onClick={() => go({ to: '/custom', hash: 'booking' })}>
          <i>约</i>
          预约
        </button>
      </nav>
      <button className="nav-cta" onClick={() => go({ to: '/custom', hash: 'booking' })}>
        预约
      </button>
      <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-label="打开导航">
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
    </header>
  );
}
