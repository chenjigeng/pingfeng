import { Route, Link } from 'react-router-dom';
import React from 'react';
import { System } from '../System';
import { Column } from '../Column';

export default [
  {
    path: '/',
    title: '系统管理',
    key: 'system',
    icon: 'appstore-o',
    component: System,
  }
]
