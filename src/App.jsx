import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const location = useLocation();
  const isWarmPage = location.pathname === '/coming-soon';

  return (
    <div className={isWarmPage ? 'app app-warm' : 'app'}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
