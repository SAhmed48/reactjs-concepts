import React, {useEffect, useState} from 'react'

function UseEffectHook() {

    const [click, setClick] = useState(0);

    const [xPos, setXPos] = useState(0);
    const [yPos, setYPos] = useState(0);

    const mouseEvent = e => {
        setXPos(e.clientX);
        setYPos(e.clientY);
    };

    // Run useEffect only once.
    // Work same as a ComponentDidMount
    useEffect(() => {
        window.addEventListener('mousemove', mouseEvent);

         // Unsubscribe events to avoid memory leaks.
        // Work same as a ComponentWillUnMount
        return () => {
            console.log('Unmount component.');
            window.removeEventListener('mousemove', mouseEvent);
        }

    }, []);

    // Runs after every render.
    // Work same as a DidMount and DidUpdate.
    useEffect(() => {
        document.title = `You click ${click} times.`;
    });


    // Runs as a DidUpdate.
    // Depends on dependencies.
    useEffect(() => {
        console.log('Dependency update', click);
    }, [click]);

    return (
        <div>
            <button onClick={ e => setClick(prevClick => prevClick + 1)}>Click {click}</button>
            <br />
            X: {xPos} Y: {yPos}
        </div>
    )
}

export default UseEffectHook;
