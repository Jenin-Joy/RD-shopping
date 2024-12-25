import React from 'react'
import navbar from './navbar.module.css'
const Navbar = () => {
  return (
    <div className={`${navbar.navbar} rounded text-white d-flex justify-content-between border`}>
      <div>
        Welcome Admin
      </div>
      <div>
       <a href="" className={`${navbar.headings}`}><span><i class="fa-solid fa-right-from-bracket"></i> Logout</span></a>
      </div>
    </div>
  )
}

export default Navbar