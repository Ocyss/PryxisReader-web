import type { Component } from 'solid-js'
import type { RouteSectionProps } from '@solidjs/router'
import { useMouse } from 'solidjs-use'
import styles from './App.module.scss'
import Test from '@/components/test'

const App: Component<RouteSectionProps> = (props) => {
  const { x, y } = useMouse()
  return (
    <>
      <nav>
        <p>
          <a href="/test1">t1</a>
        </p>
        <p>
          <a href="/test2">t2</a>
        </p>
      </nav>
      <div class={styles.app}>
        <Test />
      </div>
      {props.children}
      <h1>
        {x()}
        x
        {y()}
      </h1>
    </>
  )
}

export default App
