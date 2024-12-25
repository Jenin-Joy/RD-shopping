import React from 'react'
import './main.css'
const NewShop = () => {
  return (
    <div className='hm1'>
      <table className='table table-dark' align='center'>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Address</th>
          <th>Photo</th>
          <th>Proof</th>
          <th>District</th>
          <th>Place</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>Shop 1</td>
          <td>9876543210</td>
          <td>shop1@gmail.com</td>
          <td>Angamaly</td>
          <td></td>
          <td></td>
          <td>Ernakulam</td>
          <td>Angamaly</td>
          <td>Delete Edit</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default NewShop