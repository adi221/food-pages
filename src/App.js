import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, ViewAllPage, SingleItem } from './pages';
import { Navbar, Footer, ScrollToTop, ScrollTopButton } from './components';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/view-all/:type' children={<ViewAllPage />} />
        <Route exact path='/:type/:id' children={<SingleItem />} />
      </Switch>
      <Footer />
      <ScrollTopButton />
    </Router>
  );
}

export default App;
