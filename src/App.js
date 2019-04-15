import React from 'react';
//import { Switch, Route } from 'react-router'
//import { Link } from 'react-router-dom'
import Routes from './Routes'



//https://reacttraining.com/react-router/web/guides/testing
// export default function App() {

//     const users = [{path : 'user1', name : 'Mark'} ,{path : 'user3', name : 'Luke'}]
//   return (
//     <div>
//         <BrowserRouter>
//       <SideBar users={users} />
//       </BrowserRouter>
//     </div>
//   )
// }



export default function App() {
  return (
    <div>
      <Routes/>
    </div>
  )
}

