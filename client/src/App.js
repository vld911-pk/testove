import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProductListWrapper from './pages/ProductList/ProductListWrapper';
import BucketWrapper from './pages/Bucket/BucketWrapper';
import Header from './pages/commonComponents/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListWrapper />} />
          <Route path="/bucket" element={<BucketWrapper />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
