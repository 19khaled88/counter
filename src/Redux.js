import { createStore } from "redux"

// initial state
const initialState = {
    value:0
}

//action type
const INCREMENT = 'increment'
const DECREMENT = 'decrement'

//action creator
export const increase =(value)=>{
  return{
        type:INCREMENT,
        payload:value
       }
}
export const decrease =(value)=>{
  return{
        type:DECREMENT,
        payload:value
       }
}

//click events
export const increment=(value)=>{
    store.dispatch(increase(value))
   }
export const decrement=(value)=>{
     store.dispatch(decrease(value))
   }

// create reducer function

function counterReducer(state = initialState, action){
    if(action.type === INCREMENT){
        return{
            ...state,
            value: state.value + action.payload
        }
    }else if(action.type === DECREMENT){
        return{
            ...state,
            value: state.value - action.payload
        }
    }else{
        return state
    }
}


// create store 
export const store = createStore(counterReducer)


