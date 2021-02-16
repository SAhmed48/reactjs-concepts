import React, { Component } from 'react'
import DataFetch from '../../Hooks/useEffectDataFetch';
import UseEffectHook from '../../Hooks/useEffectHook';
import UseStateHook from '../../Hooks/useStateHook';
import ComponentA from '../../Hooks/useContext';
import CounterReducer from '../../Hooks/useReducer';
import ParentComponent from '../../Hooks/useCallback/main';
import FocusInput from '../../Hooks/useRef';


export const UserContext = React.createContext();

export default class Concepts extends Component {
    render() {
        return (
            <div>
                <FocusInput />
                <ParentComponent />
                <CounterReducer />
                <p>here</p>
                <UseStateHook />
                <UserContext.Provider value={{ ...{userId: 1, username: 'Salman Ahmed'}}}>
                    <ComponentA />
                </UserContext.Provider>
                <UseEffectHook />
                <DataFetch />
            </div>
        )
    }
}
