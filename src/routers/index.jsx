import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import NotMatch from '@components/NotMatch';

import Hello from '../pages/hello';
import Demo from '../pages/demo';
import Canvas from '../pages/canvas';

export default class Routers extends React.Component{
  render(){
    return (
      <Suspense >
        <Switch>
          <Route exact path="/" /> 
          <Route path={'/hello'} component={Hello} props={'Tomy'} />
          <Route path={'/demo'} component={Demo} />
          <Route path={'/canvas'} component={Canvas} />
        </Switch>
      </Suspense>
    )
  }
}