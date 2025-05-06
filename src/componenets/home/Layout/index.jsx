import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
          <NavBar />
          <Outlet/>
    </>
  )
}

export default Layout
