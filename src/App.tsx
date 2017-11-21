import * as React from 'react';
import { Route } from 'react-router-dom'
import route from './Routes'

const RouteWithSubRoutes = (route) => {
  console.log(route);
  return (
    <div>
      {route.routes.map((route, i) => (
        <Route key={route.name} {...route} />
      ))}
    </div>
  )
}


export class App extends React.Component<any, any> {

  render() {  
    return (
      <div>
        {
          route.map((router, index) => (
            <RouteWithSubRoutes key={index} {...router} />
          ))
        }
      </div>
    );
  }
}