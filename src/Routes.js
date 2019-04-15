import React from 'react'
import A from './A'
import B from './B'
import Parent from './Parent'
import NoMatch from './NoMatch'
import {BrowserRouter as Router, Route} from 'react-router-dom'


export default () => (
    <Router>
    <Route exact path="/a" component={A}/>
    <Route exact path="/b" component={B}/>
    <Route exact path='/parent' component={Parent} />
    {/* always matched . malways displayed */}
    <Route component={NoMatch} />
</Router>
)