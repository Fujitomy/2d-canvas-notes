import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import {secondLevelMenuData} from '@configs';
// import {RouteWithSubRoutes} from './handleSubRoute';
// import NotMatch from '@components/NotMatch';

import Hello from '../pages/hello';
import Demo from '../pages/demo';

export default class Routers extends React.Component{
  render(){
    return (
      <Suspense >
        <Switch>
          <Route exact path="/main" /> 
          <Route path={'/hello'} component={Hello} props={'Tomy'} />
          <Route path={'/demo'} component={Demo} />
        </Switch>
      </Suspense>
    )
  }
}