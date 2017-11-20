import * as React from 'react';
import { Route } from 'react-router-dom'
import route from './Routes'


export class App extends React.Component<any, any> {

  render() {  
    return (
      <div>
        {
          route.map((router, index) => (
            <Route key={index} {...router} />
          ))
        }
      </div>
    );
  }
}