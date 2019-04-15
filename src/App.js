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


// enzyme This is an assertion library that makes it easier to assert, manipulate, and traverse your React Components’ output.

export default function App() {



  // let pathMap = component.find(Route).reduce((pathMap, route) => {
  //   const routeProps = route.props();
  //   pathMap[routeProps.path] = routeProps.component;
  //   return pathMap;
  // }, {});

  // console.log(pathMap)

  return (
    <div>
      <Routes/>
    </div>
  )
}

