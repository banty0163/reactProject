import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider,createRoutesFromElements, Route } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import App from './App.jsx'
import Previous from './Components/Previous/Previous.jsx'
import Child from './Components/About/Child.jsx'


const router = createBrowserRouter(
  
  createRoutesFromElements(
          <Route path='/' element={<App/>}>
               <Route path='about' element={<About/>}>
               </Route>
                 <Route path='/about/child' element={<Child/>}/>
               <Route path='previous' element={<Previous/>}/>
          </Route>

     )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
