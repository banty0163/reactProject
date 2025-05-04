import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import App from './App'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='blog' element={<Blog/>}/>
  </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
