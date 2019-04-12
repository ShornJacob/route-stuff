import React from 'react';
//import { Switch, Route } from 'react-router'
//import { Link } from 'react-router-dom'
import './App.css';
import SideBar from './SideBar'
import {BrowserRouter} from 'react-router-dom'



export default function App() {

    const users = [{path : 'user1', name : 'Mark'} ,{path : 'user3', name : 'Luke'}]
  return (
    <div>
        <BrowserRouter>
      <SideBar users={users} />
      </BrowserRouter>
    </div>
  )
}



