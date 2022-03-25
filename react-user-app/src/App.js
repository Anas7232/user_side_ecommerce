import './App.css';
import HomePage from './container/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListPage from './container/ProductListPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/:slug" component={ProductListPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
