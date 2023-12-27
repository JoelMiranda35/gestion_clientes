import logo from './logo.svg';
import './App.css';
import ListClientesComponents from './components/ListClientesComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <ListClientesComponents/>
      <FooterComponent/>
    </div>
  );
}

export default App;
