import React, { Component }
from 'react';
import { BrowserRouter as Router, Route }
from 'react-router-dom';
import {  browserHistory}  from 'react-router';



import Home from '../Containers/home';
import Demo from '../Containers/demo';
import Profile from '../Containers/profile';
import List from '../Containers/list';
import Login from '../Containers/login';
import NavMenu from '../components/navigation/nav';

export default class Routing extends Component {
render() {
return (
<Router history={browserHistory}>
  <div>
    <NavMenu/>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route path="/profile" component={Profile} />
    <Route path="/list" component={List} />
    <Route path="/login" component={Login} />
    <Route path="/demo" component={Demo} />
  </div>
</Router>
  )
  browserHistory.push('/'); // Ignite app!
}
}