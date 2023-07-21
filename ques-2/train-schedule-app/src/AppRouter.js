import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={AllTrainsPage} />
          <Route path="/trains/:trainNumber" component={SingleTrainPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
