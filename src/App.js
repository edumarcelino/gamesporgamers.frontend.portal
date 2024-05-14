
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './page/MainPage/MainPage';
import Footer from './component.page/Footer/Footer';
import Header from './component.page/Header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App" style={{ background: 'black' }}>
        <Header />
        <MainPage></MainPage>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
