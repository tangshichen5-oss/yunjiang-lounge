import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import CustomPage from './pages/CustomPage.jsx';
import BrandStory from './pages/BrandStory.jsx';
import BusinessScenesPage from './pages/BusinessScenesPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ConsultPage from './pages/ConsultPage.jsx';
import ComingSoon from './pages/ComingSoon.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/scenes" element={<BusinessScenesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/custom" element={<CustomPage />} />
          <Route path="/consult" element={<ConsultPage />} />
          <Route path="/brand-story" element={<BrandStory />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
