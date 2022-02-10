import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Currencies from './components/currencies/currencies';
import Converter from './components/converter/converter';
import Details from './components/details/details';
import PageNotFound from './components/pageNotFound/pageNotFound';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Currencies />} />
          <Route path="currency/:details" element={<Details />} />
          <Route path="converter" element={<Converter />} />
          <Route path="page-not-found" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
