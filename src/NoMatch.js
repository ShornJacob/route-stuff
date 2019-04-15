import React from 'react'
import { Link } from 'react-router-dom'

export default function NoMatch() {
  return (
    <div>
     <Link to="/a" >A page</Link><br/>
     <Link to="/b" >B page</Link><br/>
     <Link to="/foo" >Foo</Link><br/>
    </div>
  )
}
