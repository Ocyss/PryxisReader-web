import { lazy } from 'solid-js'

const routes = [
  {
    path: '/test1',
    component: lazy(() => import('@/pages/test1.tsx')),
  },
  {
    path: '/test2',
    component: lazy(() => import('@/pages/test2.tsx')),
  },
]

export default routes
