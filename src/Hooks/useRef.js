import React, { useState, useEffect, useRef } from 'react'

function FocusInput() {
    
    const inputRef = useRef(null);
    const intervalRef = useRef(null);

    const [timer, setTimer] = useState(0);

    // Component did mount.
    useEffect(() => {
        inputRef.current.focus();
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000);

        // unmount 
        return () => {
            clearInterval(intervalRef.current);
        }

    }, []);


    return (
        <div>
            <input ref={inputRef} type='text' />

            <p>Timer ----- <span>{timer}</span></p>
            <button onClick={() => clearInterval(intervalRef.current)}>Clear interval</button>
        </div>
    )
}

export default FocusInput;
