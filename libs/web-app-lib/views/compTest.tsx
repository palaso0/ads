import { useState } from 'react'

export default function Stepper() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button aria-label="decrement" onClick={() => setCount(count - 1)}>
        -
      </button>
      <span data-cy="counter">{count}</span>
      <button aria-label="increment" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  )
}

