import Header from './components/Header';
import Banner from './components/Banner';
import ContextCategoria  from './components/ContextCategoria';
import ContextProductsDestacados  from './components/ContextProductsDestacados';

function App() {
  return (
    <div className="App">
      <Header />
      <div class="w-full pt-0">
      < Banner />
      < ContextCategoria />
      < ContextProductsDestacados />
      </div>
    </div>
  );
}

export default App;
