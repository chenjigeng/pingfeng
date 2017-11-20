import { Route } from 'react-router-dom'
import { System } from './System'
import { Column } from './Column'

export default [
  {
    path: '/',
    exact: true,
    component: System
  },
  {
    path: '/column',
    component: Column
  }
]
