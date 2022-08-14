
// import { decrement, increment, store } from './Redux';

const Counter = ({incrementValue,decrementValue,state,increment,decrement}) => {
    // const [state , setState]= useState('')
    // const render=()=>{
    // const state = store.getState()
    // setState(state.value)
    // }
    // store.subscribe(render)
    // useEffect(()=>{
    //     render()
    // },[])
  
   
  return (
        <div
            className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
        >
            <div className="text-2xl font-semibold" id="counter">{state}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-600 text-white px-3 py-2 rounded shadow"
                    id="increment"
                    onClick={()=>increment(incrementValue)}
                >
                    Increment
                </button>
                <button
                    className="bg-red-600 text-white px-3 py-2 rounded shadow"
                    id="decrement"
                    onClick={()=>decrement(decrementValue)}
                >
                    Decrement
                </button>
            </div>
        </div>
      
   
 
  );
}

export default Counter;
