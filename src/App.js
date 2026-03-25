// App.js
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import AlloysCatalog from './pages/AlloysCatalog/AlloysCatalog'; 
import ProductsCatalog from './pages/ProductsCatalog/ProductsCatalog';
import AlloyDetail from './pages/AlloyDetail/AlloyDetail';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductsOverview from './pages/ProductsOverview/ProductsOverview';
import WirePage from './pages/WirePage/WirePage';
import TapePage from './pages/TapePage/TapePage';
import RodPage from './pages/RodPage/RodPage';
import './App.css'
function App() {
  useEffect(() => {
    // Принудительно показываем скроллбар всегда
    document.documentElement.style.overflowY = 'scroll';
    
    return () => {
      // Очищаем при размонтировании компонента (опционально)
      document.documentElement.style.overflowY = '';
    };
  }, []);
  return (
    <BrowserRouter>
      <Header />
      {/* <Breadcrumbs /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        
        {/* Маршруты для продукции - используем вложенные маршруты */}
        <Route path="/produktsiya" element={<ProductsCatalog />}>
          <Route index element={<ProductsOverview />} />
          <Route path="wire" element={<WirePage />} />
          <Route path="tape" element={<TapePage />} />
          <Route path="rod" element={<RodPage />} />
        </Route>
        
        {/* Маршруты для деталей продукции */}
        <Route path="/produktsiya/:categoryId/:productId" element={<ProductDetail />} />
        
        {/* Маршруты для сплавов */}
          <Route path="/splavi" element={<AlloysCatalog />} />
          <Route path="/splavi/:categoryId" element={<AlloysCatalog />} />
          <Route path="/splavi/:categoryId/:alloyId" element={<AlloyDetail />} />
        
        {/* <Route path="/application" element={<Application />} /> */}
        {/* <Route path="/contacts" element={<Contacts />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;