import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Repositories from './pages/Repositories';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/repositories/:username">
          <Repositories />
        </Route>
      </Switch>
    </Router>
  );
}
