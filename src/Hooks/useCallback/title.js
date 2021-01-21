import React from 'react'

function Title({children}) {
    console.log('Title component.')
    return (
        <div><h3>{children}</h3></div>
    )
}

export default React.memo(Title);
