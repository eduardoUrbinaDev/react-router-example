import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cards from './layouts/Cards';
import PageOne from './pages/pageOne';
import PageTwo from './pages/pageTwo';
import PageThree from './pages/pageThree';

function App() {

  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Cards />
          </Route>
          <Route exact path="/card1">
            <PageOne />
          </Route>
          <Route exact path="/card2">
            <PageTwo />
          </Route>
          <Route exact path="/card3">
            <PageThree />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
