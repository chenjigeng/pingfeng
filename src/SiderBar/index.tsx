import * as React from 'react';
import { Menu, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import routes from '../Route';

const SubMenu = Menu.SubMenu;

export class SideBar extends React.Component<any, any> {
  render() {
    return (
      <Menu 
        style={{ height: '100%' }}
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
    <SubMenu title={<span><Icon type={route.icon} /><span>{route.title}</span></span>} key={route.key}>
      {route.routes.map(r => (
        <Menu.Item key={r.key}>
          <Link to={r.path}>
            <Icon type={r.icon} />
            {r.title}
          </Link>
        </Menu.Item>
      ))}
    </SubMenu>
  )
}
