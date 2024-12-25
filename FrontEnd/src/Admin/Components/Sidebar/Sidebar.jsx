import React from 'react'
import sidebar from './sidebar.module.css'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className={`${sidebar.sidebars} text-white rounded d-flex flex-column border`}>
      <div className='d-flex justify-content-center align-items-center h-25 flex-column'>
        <div className={`${sidebar.adminicon} rounded-circle d-flex justify-content-center align-items-center fs-4 border border-white`}><i class="fa-solid fa-user"></i></div>
        <div className='d-flex justify-content-center align-items-center'>Admin <span className={`${sidebar.activelg} mt-1`}></span></div>
      </div>
      <div className={`${sidebar.scroll} overflow-y-auto mb-3 d-flex flex-column`}>
        <Link to="/Admin" className={`${sidebar.headings}`}><span><i class="fa-solid fa-house"></i> Home</span></Link>
      <Link to="District" className={`${sidebar.headings}`}><span><i class="fa-solid fa-location-dot"></i> District</span></Link>
      <Link to="Place" className={`${sidebar.headings}`}><span><i class="fa-solid fa-map-location-dot"></i> Place</span></Link>
      <Link to="Category" className={`${sidebar.headings}`}><span><i class="fa-solid fa-list"></i> Category</span></Link>
      <Link to="NewShop" className={`${sidebar.headings}`}><span><i class="fa-solid fa-shop"></i> Shop</span></Link>
      <Link to="AcceptedShop" className={`${sidebar.headings}`}><span><i class="fa-solid fa-shop-lock"></i> Accepted Shop</span></Link>
      <Link to="RejectedShop" className={`${sidebar.headings}`}><span><i class="fa-solid fa-shop-slash"></i> Rejected Shop</span></Link>
      <Link to="ViewComplaint" className={`${sidebar.headings}`}><span><i class="fa-solid fa-message"></i> View Complaint</span></Link>
      <Link to="ReplyedComplaint" className={`${sidebar.headings}`}><span><i class="fa-solid fa-thumbs-up"></i> Replyed Complaint</span></Link>
      </div>
    </div>
  )
}

export default Sidebar