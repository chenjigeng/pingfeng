import { StaticRouter } from 'react-router';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { App } from '../../src/App';

export function renderReactTemplate(context, url) {
 
  return renderToString(
      <StaticRouter
        location={url}
        context={context}
      >
        <App />
      </StaticRouter>
    )
  
}