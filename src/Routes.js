import { Route, Link } from 'react-router-dom'
import React from 'react';
import { System } from './System'
import { Column } from './Column'

export default [
  {
    path: '/',
    title: '系统管理',
    routes: [{
      name: '系统配置',
      path: '/system',
      component: () => <h1>系统配置</h1>
    }, {
      name: '用户管理',
      path: '/user',
      component: () => <h1>用户管理</h1>
    }, {
      name: 'API管理',
      path: '/api',
      component: () => <h1>API管理</h1>
    }, {
      name: '系统集成',
      path: '/Integration',
      component: () => <h1>系统集成</h1>
    }]
  }
]
