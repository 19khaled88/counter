import { useEffect, useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {
  const [components, setComponents] = useState([
    <Counter key={Math.random()} value={1} />,
  ])
  const addCounterComponent = () => {
    setComponents((oldPost) => [
      ...oldPost,
      <Counter key={Math.random()} value={components.length + 1} />,
    ])
  }

  const resetHandler = () => {
    const resetComponent = []
    components.forEach((index) =>
      resetComponent.push(
        <Counter
          key={Math.random()}
          value={Math.floor(Math.random() * 10) + 1}
        />,
      ),
    )
    setComponents(resetComponent)
  }

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="flex flex-row mx-80">
        <div className="mx-auto flex-1 mt-10 space-y-5 flex flex-col mr-1">
          {/*<Counter />*/}
          {components}
        </div>

        <div className="mt-10 flex-1 ml-1">
          <div className=" p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="flex space-x-3">
              <button
                className="bg-indigo-600 text-white px-3 py-2 rounded shadow"
                id="addCounter"
                onClick={addCounterComponent}
              >
                Add Counter
              </button>
              <button
                className="bg-red-600 text-white px-3 py-2 rounded shadow"
                id="reset"
                onClick={resetHandler}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto mt-10 space-y-5 flex"></div>
    </div>
  )
}

export default App
