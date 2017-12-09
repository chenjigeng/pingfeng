import * as React from 'react';
import './system.less';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;
export class System extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Tabs
          defaultActiveKey="1"
          tabPosition="left"
        >
          <TabPane tab="系统配置" key="setting">
            系统配置
          </TabPane>
          <TabPane tab="API管理" key="api">
            API管理
          </TabPane>
          <TabPane tab="系统集成" key="integration">
            系统集成
          </TabPane>
        </Tabs>
      </div>
    );
  }
}