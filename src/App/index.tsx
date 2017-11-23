import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout, Icon } from 'antd';
import route from '../Route';
import { SideBar } from '../SiderBar/index';

import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

const { Header, Sider, Content } = Layout;

const RouteWithSubRoutes = (route) => {
  console.log(route);
  return (
    <div>
      {route.routes.map((route, i) => (
        <Route key={route.title} {...route} />
      ))}
    </div>
  )
}


export class App extends React.Component<any, any> {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {  
    return (
      <Layout
         style={{ height: '100%' }}
      >
        <Header style={{ background: '#404040', padding: 0 }}>
          <Icon
            className="trigger"
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
        </Header>
        <Layout
          style={{ height: '100%' }}
        >
          <Sider
            style={{ borderTop: '2px solid rgb(44, 42, 42)', height: '100%' }}
            width={200}
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <SideBar />
          </Sider>
          <Content style={{ background: '#fff', minHeight: 280, height: '100%' }}>
            {route.map((router, index) => (
              <RouteWithSubRoutes key={index} {...router} />
            ))}
          </Content>
        </Layout>
      </Layout>
    );
  }
}