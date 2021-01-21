import React from 'react'

function Button({handleInc, children}) {
    console.log('Button component.', children)
    return (
        <button onClick={handleInc}>{children}</button>
    )
}

export default React.memo(Button);
