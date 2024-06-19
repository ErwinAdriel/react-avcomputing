import Header from './components/Header';
import Banner from './components/Banner';
import ContextCategoria  from './components/ContextCategoria';
import ContextProductsDestacados  from './components/ContextProductsDestacados';
import { CartProvider } from './context/Cart';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <div class="w-full pt-0">
        < Banner />
        < ContextCategoria />
        < ContextProductsDestacados />
        </div>
      </div>
    </CartProvider>
    
  );
}

export default App;
