import React from 'react'
import { Link } from 'react-router-dom'


export default function SideBar({users}) {
  return (
    <div>
 
          <ul>
              {users.map( user => (
                  <li>
                      <Link to={user.path}>{user.name}</Link>
                  </li>
              ))}
          </ul>

    </div>
  )
}
