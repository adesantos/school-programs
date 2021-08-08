import programs from './programs.json';
import './App.css';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">

      <Header />

      <Content programs={programs} />

      <Footer />

    </div>
  );
}

export default App;
