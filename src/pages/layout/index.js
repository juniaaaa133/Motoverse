import React from 'react'
import Nav from '../../components/nav/Nav'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
        <Nav/>
        <Outlet/>
    </>
    
  )
}

export default Layout