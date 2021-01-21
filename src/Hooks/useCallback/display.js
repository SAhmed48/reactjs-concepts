import React from 'react'

function Display({showProps, children}) {
    console.log('Display component.', children)
    return (
        <div>{children} --- {showProps}</div>
    )
}

export default React.memo(Display);