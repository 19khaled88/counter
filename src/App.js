import { useEffect, useState } from 'react';
import AddCounter from './AddCounter';
import './App.css';
import Counter from './Counter';
import { decrement, increment, store } from './Redux';

function App() {
  const [components, setComponents] = useState([<Counter />])
  const [values,setValues] = useState([0])

  const [state , setState]= useState('')
  const [state1, setState1] = useState('')

  const render=()=>{
  const state = store.getState()
  setState(state.value)
  }
  const render1=()=>{
  const state1 = store.getState()
  setState1(state1.value)
  }

  store.subscribe(render)
  store.subscribe(render1)

  useEffect(()=>{
      render()
      render1()
  },[])

  const value=5
 

  
 
  const addComponent=()=>{
    setComponents([...components],<Counter />)
  }
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
   
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
      </h1>
      <div className="max-w-lg mx-auto mt-10 space-y-5 flex">
      <div>
        <Counter increment={increment} decrement={decrement} state={state} incrementValue={value} decrementValue={value} />
      </div>
        <AddCounter  func={addComponent} />
      </div>
      <div className="max-w-lg mx-auto mt-10 space-y-5 flex">
        {/*<Counter increment={increment} decrement={decrement} state={state1} incrementValue={addition1} decrementValue={substraction1} />*/}
      
        </div>
   </div>
  )
}

export default App;
