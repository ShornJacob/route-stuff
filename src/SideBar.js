import React from 'react'
import { Link } from 'react-router-dom'

//https://reacttraining.com/react-router/web/guides/testing
//It is not clear what the official document is mentioning
//so https://techdoma.in/testing-routes-react-router-dom-in-react-using-jest-1/
export default function SideBar({users}) {
  return (
    <div>
 
          <ul>
              {/* map returns an array from another array */}
              {users.map( user => (
                  <li>
                      <Link to={user.path}>{user.name}</Link>
                  </li>
              ))}
          </ul>

    </div>
  )
}
