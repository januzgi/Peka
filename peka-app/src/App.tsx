import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Ilmoitukset from './components/Ilmoitukset/Ilmoitukset';
import UusiIlmoitus from './components/Ilmoitukset/UusiIlmoitus/UusiIlmoitus';
import OmaProfiili from './components/OmaProfiili/OmaProfiili';
import Viestit from './components/Viestit/Viestit';
import Muut from './components/Muut/Muut';

// constants
import { APP_TITLE } from './utils/constants';

function App() {
  return (
    <BrowserRouter>
      <Header otsikko={APP_TITLE} />

      <main>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/ilmoitukset' />
          </Route>
          <Route path='/ilmoitukset' component={Ilmoitukset} />
          <Route path='/jatailmoitus' component={UusiIlmoitus} />
          <Route path='/omaprofiili' component={OmaProfiili} />
          <Route path='/viestit' component={Viestit} />
          <Route path='/muut' component={Muut} />
        </Switch>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
