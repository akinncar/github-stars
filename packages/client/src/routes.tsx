import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Repositories from './pages/Repositories';
import Api from './pages/ApiDocs';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/repositories/:username">
          <Repositories />
        </Route>
        <Route path="/api-docs">
          <Api />
        </Route>
      </Switch>
    </Router>
  );
}
