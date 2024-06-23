import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import AllProducts from './pages/AllProducts';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './context/Cart';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
          < Header />
          <Routes>
            < Route path='/' element={< Index />}/>
            < Route path='/allProducts' element={<AllProducts />} />
          </Routes>
          < Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
