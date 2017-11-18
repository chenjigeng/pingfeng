/* app/index.tsx */
import * as React from 'react'
import { render } from 'react-dom'
import './index.css'
import './index.less'
import { Print } from './print';
import { b } from './b';

interface IAppProps {}
interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
  public render(): JSX.Element {
    return (
      <div>
        Hello worlds2
        <Print />
      </div>
    )
  }
}
console.log('222ssss');
console.log('123122ss');
const rootEle = document.createElement('div');
document.body.appendChild(rootEle);

render(<App />, rootEle);