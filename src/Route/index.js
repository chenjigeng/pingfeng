import { Route, Link } from 'react-router-dom'
import React from 'react';
import { System } from '../System'
import { Column } from '../Column'

export default [
  {
    path: '/',
    title: '系统管理',
    key: 'system',
    icon: 'appstore-o',
    routes: [{
      key: 'setting',
      title: '系统配置',
      path: '/system',
      component: System,
    }, {
      key: 'user',
      title: '用户管理',
      path: '/user',
      component: () => <h1>用户管理</h1>
    }, {
      key: 'api',
      title: 'API管理',
      path: '/api',
      component: () => <h1>API管理</h1>
    }, {
      key: 'integration',
      title: '系统集成',
      path: '/Integration',
      component: () => <h1>系统集成</h1>
    }]
  }
]
