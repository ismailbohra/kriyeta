import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'

function Main() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Main