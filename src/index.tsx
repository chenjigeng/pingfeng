/* app/index.tsx */
import * as React from 'react'
import { render } from 'react-dom'
import './index.css'
import './index.less'
import { Print } from './print';

interface IAppProps {}
interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
  public render(): JSX.Element {
    return (
      <div>
        Hello worlds2222陈s2sss22222s
        <Print />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));
const m:any = module;
if (m.hot) {
  m.hot.accept()
}