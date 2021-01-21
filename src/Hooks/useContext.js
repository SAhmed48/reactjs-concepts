import React, { useContext } from 'react'
import { UserContext } from '../App';

function ComponentA() {
    const user = useContext(UserContext);
    return (
        <div>
            <h1> {user.userId} ----- {user.username} </h1>
        </div>
    )
}

export default ComponentA;
