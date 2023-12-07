import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import "../App.css"
import Footer from '../components/Footer'
import LodingSpinner from '../components/LodingSpinner'
import Navber from '../components/Navber'
import { AuthContext } from '../contexts/AuthProvider'

const Main = () => {
  const {loading}= useContext(AuthContext)
  return (
  <div className=''>
     {
    loading ? <LodingSpinner/> :  <div>
    <Navber/>  
      <div className='min-h-screen'>
      <Outlet/>
      </div>
      <Footer/>
  </div>
   }
  </div>
    
  )
}

export default Main