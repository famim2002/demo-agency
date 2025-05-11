import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './componenets/home/Layout'
import About from './pages/About'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Design from './pages/Design'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Layout/>}>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/about' element={<About/>}></Route>
           <Route path='/blog' element={<Blog/>}></Route>
           <Route path='/design' element={<Design/>}></Route>
          </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
