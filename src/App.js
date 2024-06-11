import Header from './components/Header';
import Banner from './components/Banner';
import { ContextCategoria } from './components/ContextCategoria';

function App() {
  return (
    <div className="App">
      <Header />
      <div class="w-full pt-0">
      < Banner />
      < ContextCategoria />
      </div>
    </div>
  );
}

export default App;
