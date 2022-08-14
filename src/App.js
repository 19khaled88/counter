import { useEffect, useState } from 'react'
import './App.css'
import Counter from './components/Counter'
function App() {
  const [counterList, setCounterList] = useState([])
  const [reset, setReset] = useState(false)

  const addCounter = () => {
    setCounterList(
      counterList.concat(<Counter value={counterList.length + 2} />),
    )
  }
  const resetCounter = () => {
    console.log('reset')
  }
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <div className="flex flex-row">
        <div className="mx-auto mt-10 space-y-5 flex flex-col">
          <Counter value={1} />
          {counterList}
        </div>

        <div className="mt-10">
          <div className=" p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="flex space-x-3">
              <button
                className="bg-indigo-600 text-white px-3 py-2 rounded shadow"
                id="addCounter"
                onClick={addCounter}
              >
                Add Counter
              </button>
              <button
                className="bg-red-600 text-white px-3 py-2 rounded shadow"
                id="reset"
                onClick={resetCounter}
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
