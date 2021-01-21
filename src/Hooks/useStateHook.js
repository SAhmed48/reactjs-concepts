import React, { useState } from 'react'

function UseStateHook() {

    const initialCount = 0;
    const [count, setCounter] = useState(initialCount);
    const [name, setName] = useState({firstname: '', lastname: ''}); // object in useState

    const [items, setItem] = useState([]); // array using usestate

    const addItems = () => {
        setItem([...items, {id: items.length, value: Math.floor(Math.random() * 10) }])
    }

    const decrementCounter = () => {
        if(count > 0){
            setCounter(prevCount => prevCount - 1); // use prevCount by pass function to setCount to update state.
        }
    }

    return (
        <div>
            Count {count}
            <br />
            <button onClick={() => setCounter(initialCount)}>Reset Counter</button>
            <br />
            <button onClick={() => setCounter(prevCount => prevCount + 1)}>Increment Count</button>
            <br />
            <button onClick={() => decrementCounter()}>Decrement Count</button>

            <br />
            <br />
            <br />
            <br />
            <label>First Name:</label>
            <input type='text' value={name.firstname} onChange={e => setName({...name, firstname: e.target.value })} />
            <br />
            <br />
            <label>Last Name:</label>
            <input type='text' value={name.lastname} onChange={e => setName({...name, lastname: e.target.value })} />

            <h3>First Name: {name.firstname}</h3> ------- <h3>Last Name: {name.lastname}</h3>

            <button onClick={() => addItems()}>Add Items</button>
            <br />
            <ul>
                {items.map(item => (
                    <li>{item.id, item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default UseStateHook;
