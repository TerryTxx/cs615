import React from 'react'
import {Route} from 'react-router'
import App from './components/dashboard'
import About from './components/about';
import User from './components/user';
const IndexPage = () => {

    return <div>Welcome to Scrum Master<br/><a href="/story/1">Homepage</a></div>
}
const NotFoundPage = () => {

    return <div><h2>Not Found</h2><br/><a href="/story/1">Homepage</a></div>
}
export default(
    <Route>
        <Route path='/story/:id' exact component={App}/>
        <Route path='/about' exact component={About}/>
        {/*<Route path="/user" component={User} />*/}
        <Route exact path="/" component={User} />
        <Route path='*' exact component={NotFoundPage}/>
    </Route>
)
