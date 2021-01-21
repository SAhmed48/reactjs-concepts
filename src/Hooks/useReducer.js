import React, {useReducer} from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch(action){
        case 'Increment':
            return state + 1;
        case 'Decrement':
            return state - 1;
        case 'reset':
            return initialState;        
    }
}

function CounterReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h5>Count: {state}</h5>
            <button onClick={() => {dispatch('Increment')}}>Increment</button>
            <button onClick={() => {dispatch('Decrement')}}>Increment</button>
            <button onClick={() => {dispatch('reset')}}>Increment</button>
        </div>
    )
}

export default CounterReducer
