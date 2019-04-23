import React from 'react'
import A from './A'
import B from './B'
import Foo from './Foo'
import NoMatch from './NoMatch'
import {Route} from 'react-router-dom'

//dont wrap in Browser Router if it is to be tested in MemoryRouter
export default () => (
  <div>
    <Route exact path="/a" component={A}/>
    <Route exact path="/b" component={B}/>
    <Route exact path='/foo' component={Foo} />
    <Route component={NoMatch} />
 </div>

)