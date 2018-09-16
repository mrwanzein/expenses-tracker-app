import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CreatePage from '../components/CreatePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/NotFoundPage';
import ExpensesList from '../components/ExpensesList';
import EditPage from '../components/EditPage';

const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        
        <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/create" component={CreatePage} />
        <Route path="/expenses" component={ExpensesList} exact={true} />
        <Route path="/edit/:id" component={EditPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
);

export default AppRouter;