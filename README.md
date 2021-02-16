<center> <h1>React Routing</h1> </center>

- To add multiple page functionality in the SPA (single page application), we use react-router and react-router-dom packages.
- Install packages

```
npm i --save react-router react-router-dom
```

- Wrap the App.js component in the **BrowserRouter** from 'react-router-dom' to enable routing functionality in the app.

###### Link in the Router

- When you want stop single page application to reload everytime when click on new route or link from the application we can user react-router **Link**.

- Using **href='/anypath'** in the anchor tag for the links always reloads the page. To avoid this behaviour we can use react-router domain **Link**.

- React rerendering the parts of the page using this approach and the browser page spinner does not load this time.

```
<Link to='/path' />

// Pass object in the route
<Link to={{
    pathname: '/new-path',
    hash: '#section1' // Scroll to the special section of the page.
    search: '?submit-form=true'
}}/>
```

- The **to** parameter in the Link is always using absolute path by default, means our root domain is appended in the first then path.
- To change this behaviour in the relative path, we will do this way:

```
// Pass object in the route
<Link to={{
    pathname: this.props.match.url + '/new-path', // add new-post in the front of the url.
}}/>
```

###### Props in the router

- The router props contains three important things:

```
history: // contains the goback, goForward, push, pop etc functionalities.
location: // contains the pathname, hash, search, state.
match: // contains the isExact flag, current url, current url params

```

###### Active Route Highlight

- Sometimes we want to add the styling to the active route by highlighting it or by changing its colour. Do this in the react-router we can use **NavLink** instead of **Link**

```
<NavLink
to='/'
exact // apply class only the current active route.
activeClassName='my-custom-active-cls', // pass custom class
activeStyle={{ color: 'greem'}} // do inline styling if you want.
>
```

###### Switch

- Switch tells the router to load only one route at a time which appears first in the top-down approach.
  -- Order matters in the switch.

```
<Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/posts/' exact component={Posts} />
    <Route path='/:id' exact component={DetailPost} />
</switch>
```

###### Route from the program.

```
this.props.history.push({'pathname': '/new-post' });

// replace: remove the page from push stack.
this.props.history.replace({ '/new-post' });
```

###### Redirect

- In some cases, you want to redirect the route to the separate route so you can use react-router-dom built in component **Redirect**.

```
import {Redirect} from 'react-router-dom';

<Redirect from='/' to='/login-page' />

// Conditionally redirect

render(){
    let redirect = null;
    if(someCondition){
        redirect = <Redirect to='/posts' />
    }

    return (
        {redirect}
        <div>
            Conditional redirect.
        </div>
    )
}
```

###### withRouter higher order function.

- Sometimes we need router props in the child components to perform some functionality. So, to access router props in the child component using simple and common way is to drill down from the parent component in the child component.
- Second way is to direct wrap the child component with the HOC (withRouter)

```
function ChildComp = (props) => {
    console.log(props);

    return (
        <div> Hello Router Props in the child component. </div>
    )
}

export default withRouter(ChildComp);
```

###### Handle 404 without a path

```
<Route render={() => <h1> 404 Page not found </h2>} />
```

###### Code Spliting and lazy loading.

- Loading only specific page on which we are working instead of loading all application parts.
- We can do this by using HOC to wrap the component and load only when required.

###### Routing and the server Deployment.

Flow:

client ---> server ---> reactjs-app

- Always point server '/' and 404 error to the reactjs index.html file because we are handling 404 and other routes in the reactjs.

- If you want to serve the specific application name (i.e www.example.com/my-app/home) then set the basepath in the reactjs application.

```
function App() {
  return (
    <BrowserRouter basename='/my-app'>
      <div className="App">
        <Home />
      </div>
    </BrowserRouter>
  );
}
```

- You can set application basepath on creating application build.
- You can serve multiple builds using this approach.

```
builds/
    my-app-1
    my-app-2
    my-app-3

Build Creation:
    set PUBLIC_URL=/builds/my-app-1 npm run build


www.example.com/my-app-1
www.example.com/my-app-2

```

<center> <h1>Hooks</h1> </center>

#### What are hooks in reactjs?

Hooks are a new feature introduced by react in version **16.8** which allows you to use react features without having class-based components.
Hooks cannot be used in class-based components.

#### Rules of Hooks:

> - Only call hooks at the top level of the functional component.
> - Don't call hooks inside loops, conditions, and nested functions.
> - Only call hooks inside reactJS functional components not inside in regular javascript function.

---

Hooks we are looking in this series are:

- useState - state
- useEffect - side effects
- Data Fetch using useEffect.
- useContext - Context API
- useReducer - reducer
- useCallback - perfomance optimizer
- useMemo - Change only updated value.
- useRef = access dom element.
- custom Hook.

#### useEffect:

> The useEffect hook is used to add side effects to the functional components. It is a replacement of **componentWillMount**, **componentDidUpdate** and **componentWillUnmount** of the class-based components.

#### What is context in reactjs?

> Context provides a way to pass data through the component tree without having to pass the props down manually at every level.

#### What is useReducer?

- It is used for the state management.
- It is an alternative of useState.
- Take two values. reducer function and initial values.

```
reducer(currentState, dispatch)

useReducer(reducer, initialState);
```

#### Difference between useState and useReducer?

- useState is built using useReducer.
- When we have to use useState and useReducer?

#### useCallback Hook?

- useCallback is a hook that will return a memoized version of the callback function that only changes if one of the depencies has changed.
- To prevent unnecessary renders.
- useCallback Hook only renders the component when their is any change in its props and state.
- If we have around 20+ child components and changing 1 component value renders all components is a serious optimization problem.
- To handle this case we used **useCallback** Hook.

#### useRef Hook:

- Use to access the dom element in the functional component.
- Create a container to hold mutable parameter in the functional component.

#### Custom Hook

- A simple javascript function.
- Create a new custom hook using the existing hooks.
- Share logic between different components.
- Instead of repeating the same logic and code in the different hooks create a custom hook and utilize that.
- custom Hook starts with the 'use'

---
