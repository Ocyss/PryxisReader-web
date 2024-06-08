import 'solid-devtools'
import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'
import App from './App'
import routes from '@/routes'

render(
  () => (
    <Router root={App}>
      {routes}
    </Router>
  ),
  document.getElementById('root') as HTMLElement,
)
