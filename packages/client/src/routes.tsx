import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Repositories from './pages/Repositories';

export default function Routes() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/repositories/:username">
        <Repositories />
      </Route>
    </Router>
  );
}
