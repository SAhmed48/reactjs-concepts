<center> <h1>Hooks</h1> </center>
#### What are hooks in reactjs?

Hooks are a new feature introduced by react in version **16.8** which allows you to use react features without having class-based components.
Hooks cannot be used in class-based components.

#### Rules of Hooks:
> + Only call hooks at the top level of the functional component.
> + Don't call hooks inside loops, conditions, and nested functions.
> + Only call hooks inside reactJS functional components not inside in regular javascript function.

*****

Hooks we are looking in this series are:
+ useState - state
+ useEffect - side effects
+ Data Fetch using useEffect.
+ useContext - Context API
+ useReducer - reducer

#### useEffect:
> The useEffect hook is used to add side effects to the functional components. It is a replacement of **componentWillMount**, **componentDidUpdate** and **componentWillUnmount** of the class-based components.

#### What is context in reactjs?
> Context provides a way to pass data through the component tree without having to pass the props down manually at every level.

#### What is useReducer?
+ It is used for the state management.
+ It is an alternative of useState.
+ Take two values. reducer function and initial values.
```
reducer(currentState, dispatch)

useReducer(reducer, initialState);
```

#### Difference between useState and useReducer?
+ useState is built using useReducer.
+ When we have to use useState and useReducer?



