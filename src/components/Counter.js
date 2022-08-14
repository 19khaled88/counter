import React, { useEffect, useState } from 'react'

const Counter = ({ value }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount((previousValue) => previousValue + value)
  }
  const decrement = () => {
    setCount((previousValue) => previousValue - value)
  }

  return (
    <div className=" p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold" id="counter">
        {count}
      </div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-600 text-white px-3 py-2 rounded shadow"
          id="increment"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-600 text-white px-3 py-2 rounded shadow"
          id="decrement"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
