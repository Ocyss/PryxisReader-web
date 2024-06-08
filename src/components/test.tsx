import { createSignal } from 'solid-js'

export default function Test() {
  const [count, setCount] = createSignal(1)
  let countLabel = $signal(1)

  return (
    <>
      <div>
        <button onClick={() => setCount(count() + 2)}>
          Test(
          {count()}
          )
        </button>
        <button onClick={() => setCount(count() * 3)}>
          Test(
          {count()}
          )
        </button>
      </div>
      <div>
        <button onClick={() => countLabel += 3}>
          TestLabel(
          {countLabel}
          )
        </button>
        <button onClick={() => countLabel *= 2}>
          TestLabel(
          {countLabel}
          )
        </button>
      </div>
    </>
  )
}
