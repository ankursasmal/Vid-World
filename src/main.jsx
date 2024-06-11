import React from 'react'
import ReactDOM from 'react-dom/client'
  import {
   createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
 import VedioRunpage from './VedioRunpage.jsx';
import Display from './Display.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    // outlet present in app so / rout on App components
    element: <App/>,
    children:[{
      // under outlet elements those want to render dynamically
      // 1. bydefault <Display> components display
      path: "",
    element: <Display/>,
     
     },
     // 2. "/vedio" rout a <Vediorunpage> components display

     ,{ path:"/vedio",
     element: <VedioRunpage/>,
     
  },] 
}
  // if under oulet's child then render on outlet place but if it nomaly  with "/" obj under arry in this case with out outlet template components render
    //  ,{ path:"/vedio",
    //  element: <VedioRunpage/>,

   
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
