import React from 'react'
import { Outlet } from 'react-router-dom'
import "../App.css"
import Footer from '../components/Footer'
import Navber from '../components/Navber'

const Main = () => {
  return (
    <div>
      <Navber/>  
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main