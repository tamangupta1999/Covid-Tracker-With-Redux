import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppLayout from './hoc/AppLayout/AppLayout';
import WorldCasesData from './containers/HomeContainer/HomeContainer';
import FAQ from './components/FAQ/Faq';
import HelpfulLink from './containers/HelpfulLinkContainer/HelpfulLinkContainer';


const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <AppLayout>
          <Switch >
            <Route path="/help" component={HelpfulLink} />
            <Route path="/faq" component={FAQ} />
            <Route path="/" exact component={WorldCasesData} />
          </Switch>
        </AppLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
