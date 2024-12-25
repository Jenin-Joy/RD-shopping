import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import './App.css'

const Admin = () => {
  return (
    <div className="d-flex side-box bodybg">
        <Sidebar/>     
        <div>
        <Navbar/>
        <Outlet/>
        </div>
    </div>
  )
}

export default Admin