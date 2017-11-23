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
        style={{height: "100%"}}
      >
        <Sider 
          width={200}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <SideBar />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {route.map((router, index) => (
              <RouteWithSubRoutes key={index} {...router} />
            ))}
          </Content>
        </Layout>
      </Layout>
    );
  }
}