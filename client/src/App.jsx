import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeContain from './pages/home/HomeContain';
import NotFound from './pages/not-found/NotFound';
const App = () => {
  return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/' exact component={HomeContain} />
            <Route path='/home' exact component={HomeContain} />
            <Route path='' exact component={NotFound} />
          </Switch>
        </Router>
      </Provider>
  )
}

export default App;
