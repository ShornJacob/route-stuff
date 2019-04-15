import React from 'react'
import { Link } from 'react-router-dom'

//https://reacttraining.com/react-router/web/guides/testing
export default function SideBar({users}) {
  return (
    <div>
 
          <ul>
              {/* map returns an from another array */}
              {users.map( user => (
                  <li>
                      <Link to={user.path}>{user.name}</Link>
                  </li>
              ))}
          </ul>

    </div>
  )
}
