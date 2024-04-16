import React from 'react'
import {Route} from 'react-router'
import App from './components/dashboard' // Importing App component
import About from './components/about'; // Importing About component
import User from './components/user'; // Importing User component

// IndexPage component
const IndexPage = () => {
    {/* Welcome message and link to homepage */}
    return <div>Welcome to TaskHanlder<br/><a href="/story/1">Homepage</a></div>
}
// NotFoundPage component
const NotFoundPage = () => {
    {/* Not Found message and link to homepage */}
    return <div><h2>Not Found</h2><br/><a href="/story/1">Homepage</a></div>
}
// Exporting routes
export default(
    <Route>
        <Route path='/story/:id' exact component={App}/>
        <Route path='/about' exact component={About}/>
        {/*<Route path="/user" component={User} />*/}
        <Route exact path="/" component={User} />  {/* Route for handling not found pages */}
        {/* Route for handling not found pages */}
        <Route path='*' exact component={NotFoundPage}/>
    </Route>
)
