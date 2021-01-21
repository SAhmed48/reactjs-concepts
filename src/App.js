import React from 'react';
import './App.css';
import DataFetch from './Hooks/useEffectDataFetch';
import UseEffectHook from './Hooks/useEffectHook';
import UseStateHook from './Hooks/useStateHook';
import ComponentA from './Hooks/useContext';
import CounterReducer from './Hooks/useReducer';
import ParentComponent from './Hooks/useCallback/main';

export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
