/* app/index.tsx */
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import { App } from './App'
import './index.less'

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));
const m:any = module;
if (m.hot) {
  m.hot.accept()
}