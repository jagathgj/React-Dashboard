import React from 'react';
import {Router, Switch, Route} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { UserPage, LoginPage, AdminPage, AdminList, AdminPlaces } from '../domains';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { Header } from '../components';
export const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
    <div className="main-container container-fluid">
      <div className="row flex-column h-100 flex-nowrap">
        <Header></Header>
        <Switch>
            <PublicRoute path="/" component={UserPage} exact={true}/>

            <PrivateRoute path="/adashboard" component={LoginPage} exact={true}/>
            <PrivateRoute path="/adashboard" component={AdminPage} exact={true}/>
            <PrivateRoute path="/adashboard/list" component={AdminList} exact={true}/>
            <PrivateRoute path="/adashboard/places" component={AdminPlaces} exact={true}/>

        </Switch>
      </div>
    </div>
  </Router>
  );
};
export default AppRouter;