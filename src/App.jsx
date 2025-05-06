import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './componenets/home/Layout'
import About from './pages/About'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Layout/>}>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/about' element={<About/>}></Route>
          </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
