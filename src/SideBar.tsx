import * as React from 'react';
import { Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import routes from './Routes';

const SubMenu = Menu.SubMenu;

export class SideBar extends React.Component<any, any> {
  render() {
    return (
      <Menu 
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['system']}
      >
        {MenuContainer(routes[0])}
      </Menu>
    )
  }
}

function MenuContainer(route) {
  return (
    <SubMenu title={route.title} key={route.key}>
      {route.routes.map(r => (
        <Menu.Item key={r.key}>
          <Link to={r.path}>{r.title}</Link>
        </Menu.Item>
      ))}
    </SubMenu>
  )
}
