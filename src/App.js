import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import './App.scss';
import NavBar from './components/navBar/navBar';
import Footer from './components/footer/footer';
import Currencies from './components/currencies/currencies';
import Converter from './components/converter/converter';
import Details from './components/details/details';
import PageNotFound from './components/pageNotFound/pageNotFound';

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Currencies} />
          <Route path="/:details" component={Details} />
          <Route path="/converter" component={Converter} />
          <Route path="/page-not-found" component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
